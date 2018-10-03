export interface BookingDetails{
    Pickup_city: string;
    Pickup_address: string;
    PickUpLng?: any;
    PickUpLat?: any;
    Drop_city?: string;
    Drop_address?: string;
    DropLng?: any;
    DropLat?: any;
    Pickup_date?: Date;
    Drop_date?: Date;
    CarId ?:number;
    TotalPrice?: number;
}

