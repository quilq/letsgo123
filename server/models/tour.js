const { mongoose } = require('../database/mongoose');
const moment = require('moment');

const tourSchema = new mongoose.Schema({
    name: String,
    journey: [{
        city: String,
        country: String,
        date: Date,
        info: String
    }],
    rating: Number,
    tourType: String,
    price: Number,
    discount: Number,
    allSeats: Number,
    availableSeats: Number,
    note: String,
    imageUrl: String
})

tourSchema.statics.findTour = function (req, res) {
    const Tour = this,
        skip = parseInt(req.params.skip),
        limit = parseInt(req.params.limit);

    Tour.find({}, null, { skip: skip, limit: limit }, (err, docs) => {
        if (err) {
            console.log(err)
        };
        res.send(docs);
    })
}

//Find tours by name
// tourSchema.statics.findTourByName = function (req, res) {
//     const Tour = this,
//         name = req.params.name;

//     Tour.find({ name: name }, (err, doc) => {
//         if (err) {
//             console.log(err);
//         };
//         res.send(doc);
//     })
// }

// Find tour by ID
tourSchema.statics.findTourByID = function (req, res) {
    const Tour = this,
        id = req.params.id;

    Tour.findOne({ _id: id }, (err, doc) => {
        if (err) {
            console.log(err);
        };
        res.send(doc);
    })
}

// Find tours by address
tourSchema.statics.searchTourByAddressAndDate = function (req, res) {
    const Tour = this,
        from = req.params.from,
        to = req.params.to,
        date = req.params.date;

    Tour.find({
        $and: [{
            $or: [
                { 'journey.0.city': from },
                { 'journey.0.country': from }
            ]
        }, {
            'journey.0.date': { $gt: moment(+date).format() }
        }, {
            $or: [
                { 'journey.city': to },
                { 'journey.country': to }
            ]
        }, {
            $and: [
                { 'journey.0.city': { $ne: to } },
                { 'journey.0.country': { $ne: to } }
            ]
        }]
    }, (err, docs) => {
        if (err) {
            console.log(err)
        };
        res.send(docs);
    })
}

// Find tours by address and date
tourSchema.statics.findTourByAddress = function (req, res) {
    const Tour = this,
        address = req.params.address;

    Tour.find({
        $or: [
            { 'journey.city': address },
            { 'journey.country': address }
        ]
    }, (err, docs) => {
        if (err) {
            console.log(err)
        };
        res.send(docs);
    })
}

//Find tours by rating
// tourSchema.statics.findTourByRating = function (req, res) {
//     const Tour = this,
//         rating = req.params.rating;

//     Tour.find({ rating: { $gte: rating } }, (err, doc) => {
//         if (err) {
//             console.log(err)
//         };
//         res.send(doc);
//     })
// }

//Find tours by price
// tourSchema.statics.findTourByPrice = function (req, res) {
//     const Tour = this,
//         price = req.params.price;

//     Tour.find({ price: { $gte: price } }, (err, doc) => {
//         if (err) {
//             console.log(err)
//         };
//         res.send(doc);
//     })
// }

//Find discounted tours
tourSchema.statics.findDiscountedTours = function (req, res) {
    const Tour = this;

    Tour.find({ discount: { $gt: 0 } }, (err, docs) => {
        if (err) {
            console.log(err)
        };
        res.send(docs);
    })
}

//Get popular destinations
tourSchema.statics.getPopularPlaces = function (req, res) {
    const Tour = this;

    //find({conditions}, 'optional fields to return', {options}, {callback})
    Tour.find({}, 'journey.city', {}, (err, docs) => {
        if (err) {
            console.log(err);
        }

        let cities = [];
        docs.forEach(element => {
            element.journey.forEach(place => {
                if (!cities.includes(place.city)) {
                    cities.push(place.city);
                }
            })
        });

        res.send(cities);
        //Find top 10 cities?
    })
}

tourSchema.statics.getDeparturePlaces = function (req, res) {
    const Tour = this;

    Tour.find({}, 'journey.city', {}, (err, docs) => {
        if (err) {
            console.log(err);
        };

        //Find the first cities of tours
        let cities = [];
        docs.forEach(element => {
            if (!cities.includes(element.journey[0].city)) {
                cities.push(element.journey[0].city);
            }
        });

        res.send(cities);
    })
}

tourSchema.statics.getDestinations = function (req, res) {
    const Tour = this;

    //Find all cities, exclude the first & last ones of every tour
    Tour.find({}, 'journey.city', {}, (err, docs) => {
        if (err) {
            console.log(err);
        };

        let cities = [];
        docs.forEach(element => {
            for (let i = 1; i < (element.journey.length - 1); i++) {
                if (!cities.includes(element.journey[i].city)) {
                    cities.push(element.journey[i].city);
                }  
            }
        });

        res.send(cities);
    })
}

//[Admin] Add tours


//[Admin] Delte tours


//[Admin] Update tours

const Tour = mongoose.model('Tour', tourSchema);

module.exports = { Tour };