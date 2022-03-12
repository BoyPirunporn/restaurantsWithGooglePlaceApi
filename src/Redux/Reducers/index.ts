import { combineReducers } from "redux";
import { reducerRestaurant } from "./restaurant";

export const rootReducer = combineReducers({
    Restaurant: reducerRestaurant
})
export type State = ReturnType<typeof rootReducer>
