export interface BookingDetails{
    Pickup_city: string;
    Pickup_address: string;
    Drop_city?: string;
    Drop_address?: string;
    Pickup_date?: Date;
    Drop_date?: Date;
}