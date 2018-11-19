const { mongoose } = require('../database/mongoose');

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
    price: Number
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
tourSchema.statics.findTourByName = function (req, res) {
    const Tour = this,
        name = req.params.name;

    Tour.find({ name: name }, (err, doc) => {
        if (err) {
            console.log(err);
        };
        res.send(doc);
    })
}

tourSchema.statics.findTourByID = function (req, res) {
    const Tour = this,
        id = req.params.id;

    Tour.find({ _id: id }, (err, doc) => {
        if (err) {
            console.log(err);
        };
        res.send(doc);
    })
}

//Find tours by address
tourSchema.statics.findTourByAddress = function (req, res) {
    const Tour = this,
        address = req.params.address;

    Tour.find({
        $or: [
            { 'journey.city': address },
            { 'journey.country': address }
        ]
    }, (err, doc) => {
        if (err) {
            console.log(err)
        };
        res.send(doc);
    })
}

//Find tours by rating
tourSchema.statics.findTourByRating = function (req, res) {
    const Tour = this,
        rating = req.params.rating;

    Tour.find({ rating: { $gte: rating } }, (err, doc) => {
        if (err) {
            console.log(err)
        };
        res.send(doc);
    })
}

//Find tours by price
tourSchema.statics.findTourByPrice = function (req, res) {
    const Tour = this,
        price = req.params.price;

    Tour.find({ price: { $gte: price } }, (err, doc) => {
        if (err) {
            console.log(err)
        };
        res.send(doc);
    })
}

//Get popular destinations
tourSchema.statics.getPopularCities = function (req, res) {
    const Tour = this,
        skip = 0;

    Tour.find({}, 'journey', { skip: skip, limit: 1 }, (err, docs) => {
        if (err) {
            console.log(err)
        };
        console.log(docs);

        // let cities = [];

        //Find top 10 cities
        //Send list to user

    })
}

//[Admin] Add tours


//[Admin] Delte tours


//[Admin] Update tours

const Tour = mongoose.model('Tour', tourSchema);

module.exports = { Tour };