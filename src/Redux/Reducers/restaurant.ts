
import { ActionType } from "../Action";

export const reducerRestaurant = (state: IPayload = { loading: true, restaurants: [], error: null }, action: ActionType): IPayload => {
    switch (action.type) {
        case "REQUEST":
            return { ...state, loading: true, }
        case "SUCCESS":
            return { ...state,loading: false, restaurants: action.payload };
        case "FAIL":
            return { ...state,loading: false, error: action.error }
        default:
            return state
    }
}