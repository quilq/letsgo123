const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { mongoose } = require('../database/mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 1,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 1,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    }
});

//Hash password before saving
userSchema.pre('save', function (next) {
    let user = this;
    if (user.isModified('password')) {
        bcrypt.genSalt(12, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

//Check hashed password when user logged in (Use statics method for model)
userSchema.statics.findUserByCredentials = function (email, password) {
    let User = this;

    return User.findOne({ email }).then(user => {
        if (!user) {
            return Promise.reject();
        }
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    resolve(user);
                } else {
                    reject(user);
                }
            });
        });
    });
}


//Generate auth jwt with document method (instance method)
userSchema.methods.generateAuthToken = function () {
    let user = this;
    let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' }).toString();
    return Promise.resolve(token);
}

//Verify jwt
userSchema.statics.findByToken = function(token) {
    let User = this;
    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return Promise.reject(error);
    }

    return User.findOne({
        _id: decoded._id
    });
}

userSchema.methods.toJSON = function(){
    let user = this;

    let userObject = user.toObject();
    return {_id: userObject._id, email: userObject.email, username: userObject.username}
}

const User = mongoose.model('User', userSchema);

module.exports = { User };

