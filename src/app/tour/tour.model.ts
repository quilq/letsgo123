export class Tour {
    _id?: string;
    name: string;
    journey: [{
        city: string,
        country: string,
        date: Date,
        info: string,
        formattedDate?: string
    }];
    rating: number;
    tourType: string;
    price: number

    constructor() {
        this.name = '',
        this.journey = [{
            city: '', country: '', info: '', date: new Date()
        }],
        this.rating = 0,
        this.tourType = '',
        this.price = 0
    }
}