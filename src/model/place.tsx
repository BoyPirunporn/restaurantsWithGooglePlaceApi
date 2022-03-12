export interface placeLocation {
    lat: string;
    long: string;
    type?: string;
    radius?: number;
    name?: string;
    query?: string
}

export interface DetailRestaurant {
    detail: {
        restaurantName: string;
        rating: number;
        photo: string;
        palceId?: string;
        periods?: string;
        picture?: string[]
    }[]
}
export interface DataObject {
    id?: number | string;
    name: string;
    categories: string[];
    profile_image_url: string;
    images: string[];
    operation_time: OperationTime[];
    address: string;
    rating: number;
    place_id?: string;
}
export interface OperationTime {
    day?: string;
    time_open?: string;
    time_close?: string;
}