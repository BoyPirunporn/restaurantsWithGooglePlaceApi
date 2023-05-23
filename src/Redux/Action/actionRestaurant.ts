import { ActionType } from './index';
import { Dispatch } from "react";
import data from '../../example_data.json'

// export const actionRestaurant = (query: string) => async (dispatch: Dispatch<ActionType>) => {
//     dispatch({ type: 'REQUEST' })
//     try {
//         let url = `/textsearch/json?location=${13.779820829768585},${100.54464812602707}&key=${process.env.REACT_APP_API_KEY}`
//         let _radius = `&radius=${5000}`
//         let _query = `&query=${query}`
//         // let _query = `&query=${query}`
//         // let items:DetailRestaurant['detail'] = []
//         const { data } = await axios.get(url + _radius + _query)
//         const result: DataObject[] = []
//         if (data) {
//             for (let item of data.results) {
//                 let url = `/details/json?key=${process.env.REACT_APP_API_KEY}&place_id=${item.place_id}`
//                 let { data } = await axios.get(url)
//                 const _isOpen: OperationTime[] = []
//                 data.result.opening_hours?.periods?.map((item: any) => {
//                     _isOpen.push({
//                         day: changeName(item.open ? item.open.day : item.close ? item.close.day : ''),
//                         time_open: item.open ? item.open.time.substring(0, 2) + ':' + item.open.time.substring(2, 4) : '',
//                         time_close: item.close ? item.close.time.substring(0, 2) + ':' + item.close.time.substring(2, 4) : '',
//                     })
//                 })
//                 let images: string[] = []
//                 data.result.photos &&
//                     data.result.photos.map((img: any, index: number) => {
//                         if (index >= 3) {
//                             return
//                         }
//                         images.push(`https://maps.googleapis.com/maps/api/place/photo?photo_reference=${img?.photo_reference}&maxwidth=500`)
//                     })
//                 result.push({
//                     id: item.place_id,
//                     place_id: item.place_id,
//                     name: item.name,
//                     rating: item.rating || 0,
//                     categories: item.types,
//                     address: item.formatted_address,
//                     profile_image_url: item.photos ?
//                         `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${item.photos[0].photo_reference}&maxwidth=500` : '',
//                     images: images,
//                     operation_time: _isOpen.length ? _isOpen : [],
//                 })
//             }

//             dispatch({ type: 'SUCCESS', payload: result })
//         }
//     } catch (error) {
//         dispatch({ type: 'FAIL', error: error })
//     }
// }

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

