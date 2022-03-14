import { Alert, Box, Pagination, Stack, useMediaQuery, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardComponent from '../components/CardComponent'
import { DataObject, OperationTime } from '../model/place'
import { Header } from '../components/Header'
import SideBar from '../navbar/NavBar'
import data from '../example_data.json';
import { MediaQueryScreen } from '../constant/MediaQuery'
import { placeRestaurant } from '../service/Place'
import { useDispatch, useSelector } from 'react-redux'
import { actionRestaurant, actionRestaurantMock, actionSearchName } from '../Redux/Action/actionRestaurant'
import PaginationComponent from '../components/Pagination'


const HomeScreen = () => {
  const Restaurent: DataObject[] = data;
  const [Restaurens, setRestaurens] = useState<DataObject[]>(Restaurent);
  const [value, setvalue] = useState<string>('restaurant')
  const [searchText, setSearchText] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemPage] = useState<number>(9)

  const dispatch = useDispatch()
  const { loading, error, restaurant } = useSelector((state: any) => state.Restaurant)
  const handleChange = (val: string) => {
    setvalue(val)
    setSearchText('')
    dispatch(actionRestaurantMock(val))
  }
  
  const handleClick = () => {
    dispatch(actionSearchName(searchText))
  }
  useEffect(() => {
    if (restaurant !== undefined) {
      setRestaurens(restaurant)
    }

  }, [value, dispatch, restaurant, ])
  const indexOfLastPage = currentPage * itemPage
  const indexOfFirstPage = indexOfLastPage - itemPage
  const currentOfPage = Restaurens?.slice(indexOfFirstPage, indexOfLastPage)
  
  
  return (
    <Box  >
      <Box >
        <Header
          handleChange={handleChange}
          handleClick={handleClick}
          SearchText={searchText}
          setSearchText={setSearchText}
          value={value}
          setValue={setvalue} />
        {error ? <Alert sx={{ marginTop: 1 }} severity="error">{error}</Alert> : <></>}
     </Box>
      <Box sx={{ marginTop: 3 }} >
        <Stack spacing={2}>
          <CardComponent loading={loading} resturent={currentOfPage} />
        </Stack>
      </Box>
      <Box display={'flex'} justifyContent={'center'} mt={3}>
        <PaginationComponent
          itemPerPage={itemPage}
          totalPage={Restaurens.length}
          setCurrentPage={setCurrentPage} />
      </Box>
    </Box>
  )
}

export default HomeScreen