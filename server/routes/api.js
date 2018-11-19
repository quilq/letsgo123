const express = require('express');
const router = express.Router();
// const moment = require('moment');

const { Tour } = require('../models/tour');
const { User } = require('../models/user');
const { authenticate } = require('../middleware/authenticate');

router.get('/:skip/:limit', (req, res) => {
    Tour.findTour(req, res);
})

//Find tours by name/ address/ rating/ price (with req.skip)
router.get('/name/:name', (req, res) => {
    Tour.findTourByName(req, res);
})

router.get('/address/:address', (req, res) => {
    Tour.findTourByAddress(req, res);
})

router.get('/rating/:rating', (req, res) => {
    Tour.findTourByRating(req, res);
})

router.get('/price/:price', (req, res) => {
    Tour.findTourByPrice(req, res);
})

router.get('/id/:id', (req, res) => {
    Tour.findTourByID(req, res);
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

//[Admin] Add tours
// router.post('/tour/new', (req, res) => {

//     let tour = new Tour({
//         name: 'Central Vietnam',
//         journey: [
//             {
//                 city: 'Ho Chi Minh City',
//                 country: 'Vietnam',
//                 date: moment().add(6, 'days')
//             },
//             {
//                 city: 'Nha Trang',
//                 country: 'Vietnam',
//                 date: moment().add(7, 'days')
//             },
//             {
//                 city: 'Da Lat',
//                 country: 'Vietnam',
//                 date: moment().add(8, 'days')
//             },
//             {
//                 city: 'Ho Chi Minh City',
//                 country: 'Vietnam',
//                 date: moment().add(9, 'days')
//             }
//         ],
//         rating: 5,  //stars
//         tourType: 'Luxary',
//         price: 125 //$
//     })
    
//     tour.save().then(err => console.log(err));
// })


//[Admin] Delete tours

//[Admin] Update tours

module.exports = router;