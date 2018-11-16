const express = require('express');
const router = express.Router();
const { Tour } = require('../models/tour');
const { User } = require('../models/user');
const { authenticate } = require('../middleware/authenticate');

router.get('/:skip/:limit', (req, res) => {
    Hotel.findTour(req, res);
})

//Find tours by name/ address/ rating/ price (with req.skip)
router.get('/name/:name', (req, res) => {
    Hotel.findTourByName(req, res);
})

router.get('/address/:address', (req, res) => {
    Hotel.findTourByAddress(req, res);
})

router.get('/rating/:rating', (req, res) => {
    Hotel.findTourByRating(req, res);
})

router.get('/price/:price', (req, res) => {
    Hotel.findTourByPrice(req, res);
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

//[Admin] Delete hotels

//[Admin] Update hotels

module.exports = router;