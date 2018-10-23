export enum BedType {
    double = 'double',
    single = 'single',
    twin = 'twin'
}

export enum RoomView {
    city = 'city',
    river = 'river',
    ocean = 'ocean'
}

export class Address {
    city: string;
    country: string;
    getFullAddress() {
        return `${this.city}, ${this.country}`;
    }
}

export class Hotel {
    name: string;
    address: Address;
    rating: number;
    rooms: [{
        roomNumber: number,
        availableDate: [Date],
        bedType: BedType,
        view: RoomView,
        size: number,  //meter square
    }];
    roomType: [{
        bedType: BedType,
        price: number,  //dolar
        totalRooms: number,
        discount: number  //percent
    }];
}