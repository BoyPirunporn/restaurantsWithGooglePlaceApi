import { Box, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardComponent from '../components/CardComponent'
import { DataObject } from '../model/place'
import { Header } from '../navbar/Header'
import SideBar from '../navbar/SideBar'
import data from '../example_data.json';
import { MediaQueryScreen } from '../constant/MediaQuery'
import { placeRestaurant } from '../service/Place'


const HomeScreen = () => {
  const Restaurent: DataObject[] = data;
  const [Restaurens, setRestaurens] = useState<DataObject | null>(null);
  const [value, setvalue] = useState<string>('Restaurent')
  const handleChange =  (val: string) => {
    setvalue(val)
    placeRestaurant(val).then((item: any) => setRestaurens(item))
  }
  console.log("Restaurens>>>", Restaurens)
  useEffect(() => {
  
  }, [value])
  
  return (
    <Box  >
      <Header handleChange={handleChange} value={value} setValue={setvalue}/>
      <Box sx={{ marginTop: 3 }}>
        <CardComponent resturent={Restaurent} />
      </Box>
    </Box>
  )
}

export default HomeScreen