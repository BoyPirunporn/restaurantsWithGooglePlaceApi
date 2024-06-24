import { ActionType } from './index';
import { Dispatch } from "react";
import data from '../../example_data.json'

export const actionRestaurantMock = (categories: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch({ type: 'REQUEST' })
    try {
        let result = data;
        if (categories !== 'all') {
            result = data.filter((item:IRestaurants) => item.categories[item.categories.indexOf(categories)] === categories )
        }
        setTimeout(() => dispatch({ type: 'SUCCESS', payload: result }), 2 * 1000)
    } catch (error) {
        dispatch({ type: 'FAIL', error: error })

    }

}

export const actionSearchName = (name: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch({ type: 'REQUEST' })
    try {
        if (!name) {
            dispatch({ type: 'FAIL', error: 'Please enter your keyword for search' })
        } else {
            let result = data.filter((item: IRestaurants) => {
                return item.name.replace(/\s/g, '').toLocaleLowerCase() === name.replace(/\s/g, '').toLocaleLowerCase()
            })
            dispatch({ type: 'SUCCESS', payload: result })
        }
    } catch (error) {
        dispatch({ type: 'FAIL', error: error })

    }

}

