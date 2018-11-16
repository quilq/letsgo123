export class Tour {
    _id?: string;
    name: string;
    journey: [{
        city: string,
        country: string,
    }];
    startDay: Date;
    endDay: Date;
    rating: number;
    tourType: string;
    price: number
}