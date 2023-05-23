import { createStore, applyMiddleware, compose, Action } from 'redux'
import thunk, { ThunkAction } from 'redux-thunk'

import { rootReducer } from './Reducers'
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState: IInitialState = {
    Restaurant: {
        loading: true,
        error: null,
        restaurants: []
    }
}


const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppState = typeof store.getState


export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action
>;

export default store
