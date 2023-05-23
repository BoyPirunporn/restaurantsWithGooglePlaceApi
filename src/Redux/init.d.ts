interface IInitialState {
    Restaurant: {
        loading: boolean,
        restaurants: IRestaurants[],
        error: any
    }

}


interface IPayload {
    loading: boolean,
    restaurants: IRestaurants[],
    error: any
}