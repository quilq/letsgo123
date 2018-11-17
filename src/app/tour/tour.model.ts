export class Tour {
    _id?: string;
    name: string;
    journey: [{
        city: string,
        country: string,
        date: Date,
        formattedDate?: string
    }];
    rating: number;
    tourType: string;
    price: number
}