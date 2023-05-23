import { Alert, Box, CircularProgress, Stack } from '@mui/material'
import { useEffect, useState } from 'react'
import CardComponent from '../components/CardComponent'
import { Header } from '../components/Header'
import { actionRestaurantMock, actionSearchName } from '../Redux/Action/actionRestaurant'
import PaginationComponent from '../components/Pagination'
import MainContent from '../components/MainContent'
import { useAppDispatch, useAppSelector } from '../Redux/hook'

const HomeScreen = () => {
  const [value, setvalue] = useState<string>('restaurant')
  const [searchText, setSearchText] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [itemPage] = useState<number>(9)

  const dispatch = useAppDispatch()
  const { loading, error, restaurants } = useAppSelector((state) => state.Restaurant)

  const handleChange = (val: string) => {
    setvalue(val)
    setSearchText('')
    dispatch<any>(actionRestaurantMock(val))
  }

  const handleClick = () => {
    dispatch<any>(actionSearchName(searchText))
  }
  useEffect(() => {
    if (!restaurants.length) {
      dispatch<any>(actionRestaurantMock('all'))
    }
  }, [dispatch, restaurants])


  const indexOfLastPage = currentPage * itemPage
  const indexOfFirstPage = indexOfLastPage - itemPage
  const currentOfPage = restaurants?.slice(indexOfFirstPage, indexOfLastPage)


  return (
    <Box>
      <Box position={"sticky"} zIndex={99} top={"55px"} >
        <Header
          handleChange={handleChange}
          handleClick={handleClick}
          SearchText={searchText}
          setSearchText={setSearchText}
          value={value}
          setValue={setvalue} />
        {error ? <Alert sx={{ marginTop: 1 }} severity="error">{error}</Alert> : <></>}
      </Box>
      {loading ? (<Box sx={{
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        transform: "translate(50%, 50%)",
      }}><CircularProgress /></Box>) :
        <MainContent >
          <Box sx={{ marginTop: 3 }} >
            <Stack spacing={2}>
              <CardComponent loading={loading} resturent={currentOfPage} />
            </Stack>
          </Box>
          <Box display={'flex'} justifyContent={'center'} mt={3}>
            <PaginationComponent
              itemPerPage={itemPage}
              totalPage={restaurants.length}
              setCurrentPage={setCurrentPage} />
          </Box>
        </MainContent>}
    </Box>

  )
}

export default HomeScreen