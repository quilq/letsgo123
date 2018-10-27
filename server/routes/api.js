const express = require('express');
const router = express.Router();
const { Hotel } = require('../models/hotel');

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
router.post('/user/signup', (req, res)=>{

})

//[User] Sign in
router.post('/user/signin', (req, res)=>{

})

//[User] Sign out
router.delete('/user/signout', (req, res)=>{

})

//[User] Get user info
router.get('/user/me', (req, res)=>{

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