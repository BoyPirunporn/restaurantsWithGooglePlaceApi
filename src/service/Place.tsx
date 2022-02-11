import React from 'react'

export const _place = async () => {
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&types=food&name=harbour&key=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(data => console.log(data))
}

