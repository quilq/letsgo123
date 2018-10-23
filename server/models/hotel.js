const { mongoose } = require('../database/mongoose');

const hotelSchema = new mongoose.Schema({
    name: String,
    address: {
        city: String,
        country: String
    },
    rating: Number,
    rooms: [{
        roomNumber: Number,
        availableDate: [Date],
        bedType: String,
        view: String,
        size: Number
    }],
    roomType: [{
        bedType: String,
        price: Number,
        totalRooms: Number,
        discount: Number
    }],
})

hotelSchema.statics.findHotel = function (req, res) {
    const Hotel = this,
        skip = parseInt(req.params.skip),
        limit = parseInt(req.params.limit);

    Hotel.find({}, null, { skip: skip, limit: limit }, (err, doc) => {
        if (err) {
            console.log(err)
        };
        res.send(doc);
    })
}

//Find hotels by name
hotelSchema.statics.findHotelByName = function (req, res) {
    const Hotel = this,
        name = req.params.name;

    Hotel.find({ name: name }, (err, doc) => {
        if (err) {
            console.log(err)
        };
        res.send(doc);
    })
}

//Find hotels by address
hotelSchema.statics.findHotelByAddress = function (req, res) {
    const Hotel = this,
        address = req.params.address;

    Hotel.find({
        $or: [
            { 'address.city': address },
            { 'address.country': address }
        ]
    }, (err, doc) => {
        if (err) {
            console.log(err)
        };
        res.send(doc);
    })
}

//Find hotels by rating
hotelSchema.statics.findHotelByRating = function (req, res) {
    const Hotel = this,
        rating = req.params.rating;

    Hotel.find({ rating: { $gte: rating } }, (err, doc) => {
        if (err) {
            console.log(err)
        };
        res.send(doc);
    })
}

//Find hotels by price
hotelSchema.statics.findHotelByPrice = function (req, res) {
    const Hotel = this,
        price = req.params.price;

    Hotel.find({ price: { $gte: price } }, (err, doc) => {
        if (err) {
            console.log(err)
        };
        res.send(doc);
    })
}

//[Admin] Add hotels


//[Admin] Delte hotels


//[Admin] Update hotels

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = { Hotel };