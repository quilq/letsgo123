const express = require('express');
const router = express.Router();
const moment = require('moment');

const { Tour } = require('../models/tour');
const { User } = require('../models/user');
const { authenticate } = require('../middleware/authenticate');

router.get('/tour/:skip/:limit', (req, res) => {
    Tour.findTour(req, res);
})

//Find tours by name/ address/ rating/ price (with req.skip)
// router.get('/name/:name', (req, res) => {
//     Tour.findTourByName(req, res);
// })

router.get('/address/:address', (req, res) => {
    Tour.findTourByAddress(req, res);
})

router.get('/search/:from/:to/:date', (req, res) => {
    Tour.searchTourByAddressAndDate(req, res);
})

router.get('/discount', (req, res) => {
    Tour.findDiscountedTours(req, res);
})

// router.get('/rating/:rating', (req, res) => {
//     Tour.findTourByRating(req, res);
// })

// router.get('/price/:price', (req, res) => {
//     Tour.findTourByPrice(req, res);
// })

router.get('/places', (req, res)=>{
    Tour.getPopularPlaces(req, res);
})

router.get('/from', (req, res)=>{
    Tour.getDeparturePlaces(req, res);
})

router.get('/to', (req, res)=>{
    Tour.getDestinations(req, res);
})

router.get('/id/:id', (req, res) => {
    Tour.findTourByID(req, res);
})

//[User] Sign up
router.post('/user/signup', (req, res) => {
    let body = { username: req.body.user.username, email: req.body.user.email, password: req.body.password };
    
    User.checkUsernameAndEmail(body.username, body.email).then(() => {
        let user = new User(body);
        user.save().then(() => {
            return user.generateAuthToken();
        }).then((token) => {
            res.header('x-auth', token).send(user);
        }).catch((e) => {
            console.log(e);
            res.status(400).send(e);
        })
    }).catch((e) => {
        console.log(e);
        res.status(400).send(e);
    })
})

//[User] Sign in
router.post('/user/signin', (req, res) => {
    let body = { email: req.body.email, password: req.body.password };

    User.findUserByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);
        });
    }).catch((e) => {
        console.log(e);
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
//         name: 'Ha Noi - Da Lat',
//         journey: [  //1 - 5 days
//             {
//                 city: 'Ha Noi',
//                 country: 'Vietnam',
//                 date: moment().add(56, 'days'),
//                 info: ''
//             },
//             {
//                 city: 'Nha Trang',
//                 country: 'Vietnam',
//                 date: moment().add(57, 'days'),
//                 info: ''
//             },
//             {
//                 city: 'Da Lat',
//                 country: 'Vietnam',
//                 date: moment().add(58, 'days'),
//                 info: ''
//             },
//             {
//                 city: 'Da Lat',
//                 country: 'Vietnam',
//                 date: moment().add(59, 'days'),
//                 info: ''
//             },
//             {
//                 city: 'Ha Noi',
//                 country: 'Vietnam',
//                 date: moment().add(60, 'days'),
//                 info: ''
//             }

//         ],
//         rating: 5,  //stars 4* 5*
//         tourType: 'Economy',  //Luxary vs Economy
//         price: 130, //$  50$ - 200$
//         discount: 5, //%  0% - 30% 
//         allSeats: 25,  
//         availableSeats: 10,
//         note: '',
//         imageUrl: '' //image url
//     })
    
//     tour.save().then(err => console.log(err));
// })


//[Admin] Delete tours

//[Admin] Update tours

module.exports = router;