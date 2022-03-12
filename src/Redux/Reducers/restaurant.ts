
import { ActionType } from "../Action";
import data from '../../example_data.json'
export const reducerRestaurant = (state: any = { loading: false, restaurant:data }, action: ActionType) => {
    switch (action.type) {
        case "REQUEST":
            return { loading: true, }
        case "SUCCESS":
            return { loading: false, restaurant: action.payload };
        case "FAIL":
            return { loading: false, error: action.error }
        default:
            return state
    }
}