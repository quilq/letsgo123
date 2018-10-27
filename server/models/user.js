const { mongoose } = require('../database/mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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
userSchema.statics.findUserByCredentials = function (emai, password) {
    let User = this;

    return User.findOne({email}).then(user => {
        if (!user){
            return Promise.reject();
        }
        return new Promise((result, reject)=>{
            bcrypt.compare(password, user.password, (err, result)=>{
                if (result){
                    resolve(user);
                } else {
                    reject(user);
                }
            });
        });
    });
}


//Generate auth jwt with document method (instance method)
userSchema.methods.generateAuthToken = function(){
    let user = this;
    let token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'}, (err, token)=>{
        console.log('token', token);
    });
    return Promise.resolve(token);
}

//Verify jwt
userSchema.methods.findByToken = function(token){
    let user = this;
    let decoded;

    try {
        decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return Promise.reject(error);        
    }

    return user.findOne({
        _id: decoded._id
    });
}

const User = mongoose.model('User', userSchema);

module.exports = { User };

