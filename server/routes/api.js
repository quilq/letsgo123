const express = require('express');
const router = express.Router();
const { Hotel } = require('../models/hotel');
const { User } = require('../models/user');
const { authenticate } = require('../middleware/authenticate');

router.get('/:skip/:limit', (req, res) => {
    Hotel.findHotel(req, res);
})

//Find hotels by name/ address/ rating/ price (with req.skip)
router.get('/name/:name', (req, res) => {
    Hotel.findHotelByName(req, res);
})

router.get('/address/:address', (req, res) => {
    Hotel.findHotelByAddress(req, res);
})

router.get('/rating/:rating', (req, res) => {
    Hotel.findHotelByRating(req, res);
})

router.get('/price/:price', (req, res) => {
    Hotel.findHotelByPrice(req, res);
})

//[User] Sign up
router.post('/user/signup', (req, res) => {
    let body = { username: req.body.user.username, email: req.body.user.email, password: req.body.password };
    let user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        console.log('test', token);
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

//[User] Sign in
router.post('/user/signin', (req, res) => {
    let body = { email: req.body.email, password: req.body.password };
    console.log(body);

    User.findUserByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            console.log('test', token);
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        res.status(400).send(e);
    })
})

//[User] Sign out
router.delete('/user/signout', authenticate, (req, res) => {
    if (req.user) {
        res.status(200).send();
    } else {
        res.status(400).send();
    }
})

//[User] Get user info
router.get('/user/me', (req, res) => {

})

//[User] Update user info

//[User] Delete user info


//[Admin] Add hotels

//[Admin] Delte hotels

//[Admin] Update hotels


//---------------------------------------------
//CREATE TEST DATA

router.post('/new', (req, res) => {

    let randomNumber = Math.floor((Math.random() * 100) + 1);
    randomCharacter1 = String.fromCharCode(Math.floor((Math.random() * 25) + 65)),
        randomCharacter2 = String.fromCharCode(Math.floor((Math.random() * 25) + 65));

    const newHotel = new Hotel({
        name: `${randomCharacter1}${randomCharacter2}-${randomNumber}`,
        address: {
            city: 'Ho Chi Minh',
            country: 'Vietnam'
        },
        rating: Math.floor((Math.random() * 2) + 3),
        rooms: [{
            roomNumber: Math.floor((Math.random() * 899) + 100),
            availableDate: [new Date()],
            bedType: 'double',
            view: 'city',
            size: 20,  //meter square
        }],
        roomType: [{
            bedType: 'double',
            price: '25',  //dolar
            totalRooms: 10,
            discount: 0  //percent
        }],
    });

    Hotel.create(newHotel, (err, result) => {
        if (err) {
            console.log(err);
        };
    })

    console.log('New hotels created');
})

module.exports = router;