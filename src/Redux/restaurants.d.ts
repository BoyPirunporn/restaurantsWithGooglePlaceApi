interface IRestaurants {
    id:number,
    name:string,
    categories:string[],
    profile_image_url:string,
    images:string[],
    operation_time:IOperationTime[],
    address:string,
    rating:number
}

interface IOperationTime {
    day:string,
    time_open:string,
    time_close:string
}