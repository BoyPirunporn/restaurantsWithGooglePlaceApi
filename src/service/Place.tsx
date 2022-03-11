import axios from 'axios'
import React, { useState } from 'react'
import { DataObject, DetailRestaurant, placeLocation, OperationTime } from '../model/place'

export const placeRestaurant = async (type:string) => {
    let url = `/textsearch/json?location=${13.779820829768585},${100.54464812602707}&key=${process.env.REACT_APP_API_KEY}`
    let _radius = `&radius=${5000}`
    let _type =  `&types=${type}`
    // let _query = `&query=${query}`
    
    // let items:DetailRestaurant['detail'] = []
    const { data } = await axios.get(url +_radius+_type)
    const result: DataObject[] = []
    console.log(data)
    if(data){
        for (let item of data.results){
            result.push({
                id:1,
                place_id: item.place_id,
                name: item.name,
                rating: item.rating || 0,
                categories: item.types,
                address: item.formatted_address,
                profile_image_url: '',
                images: [],
                operation_time:[],
            })
        }
      
        
    }
    return result
    // if(!data) return
    // else {
    //     data.results.map((item: any) => items.push({restaurantName:item.name,rating:item.rating,photo:item.photos[0]?.photo_reference,palceId:item.place_id}))
    //     if (items.length){
    //         let url = `details/json?key=${process.env.REACT_APP_API_KEY}&place_id=`
    //         for(let item of items){
    //            let {data} = await axios.get(url+item.palceId)
    //             // let nItem = data.filter((e:any) => e.palceId === item.palceId)
    //         }
    //     }
    // }
    // return data
}


