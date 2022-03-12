import axios from 'axios'
import React, { useState } from 'react'
import { DataObject } from '../model/place'

export const placeRestaurant = async (type: string) => {
    let url = `/textsearch/json?location=${13.779820829768585},${100.54464812602707}&key=${process.env.REACT_APP_API_KEY}`
    let _radius = `&radius=${5000}`
    let _type = `&types=${type}`
    // let _query = `&query=${query}`

    // let items:DetailRestaurant['detail'] = []
    const { data } = await axios.get(url + _radius + _type)
    const result: DataObject[] = []
    if (data) {
        for (let item of data.results) {
            result.push({
                id: 1,
                place_id: item.place_id,
                name: item.name,
                rating: item.rating || 0,
                categories: item.types,
                address: item.formatted_address,
                profile_image_url: item.photos ?
                    `https://maps.googleapis.com/maps/api/place/photo?photo_reference=${item.photos[0].photo_reference}&maxwidth=500` : '',
                images: [],
                operation_time: [],
            })
        }
        for (let i in result) {
            let url = `/details/json?key=${process.env.REACT_APP_API_KEY}&place_id=${result[i].place_id}`
            let { data } = await axios.get(url)
            data.result.photos ? data.result.photos.map((img: any, index: number) => {
                if (index >= 3) return;
                result[i].images.push(`/photo?photo_reference=${img?.photo_reference}&maxwidth=500`)
            }) : result[i].images = []
            
        } 
    }
    return result
   
}


