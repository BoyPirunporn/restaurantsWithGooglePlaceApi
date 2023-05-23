import { Box, Button, Grid, useTheme, } from '@mui/material'
import React from 'react'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { makeStyles, } from '@mui/styles';
import { useNavigate, useParams } from 'react-router-dom';
import DetailLeft from '../components/detailComponent/DetailLeft';
import { Theme } from '@mui/system';
import DetailRight from '../components/detailComponent/DetailRight';
import { MediaQueryScreen } from '../constant/MediaQuery';
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import MainContent from '../components/MainContent';
import { useAppSelector } from '../Redux/hook';
import { RootState } from '../Redux/Store';

const useChipStyles = makeStyles((theme: Theme) => ({
  chip: {
    "&:hover": {
      backgroundColor: '#134B8A'
    },
  },
  Container: {
    marginTop: '25px !important',
    height: 'auto',
    display: 'block',
    backgroundColor: '#C4D3E9',
    borderRadius: '10px',
    [theme.breakpoints.down('md')]: {
      background: 'none',
      display: 'none'
    },
  },
  boxSt: {
    padding: '20px'
  },
  pText: {
    fontSize: '16px',
    fontWeight: '600',
  },
  hiden: {
    display: 'none'
  },

}));



const RestaurentsDetail = () => {
  const style = useChipStyles()
  const navigation = useNavigate()
  const param = useParams()
  const { restaurants } = useAppSelector((state: RootState) => state.Restaurant);


  console.log(param.id)
  const detailData: IRestaurants = restaurants.find((item: IRestaurants) => item.id === Number(param.id)) as IRestaurants
  console.log(detailData)
  if (!detailData) {
    navigation('/')
  }

  return (
    <MainContent>
      <Button onClick={() => navigation('/')} className={style.chip} variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={{ borderRadius: 30, backgroundColor: '#134B8A', color: '#fff', fontWeight: 600 }} >
        Back
      </Button>

      <Box sx={{
        display: MediaQueryScreen(useTheme()) ? 'none' : 'block',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 3,
      }}>
        <Box component={Tabs}
          sx={{
            '& div > button': {
              color: '#134B8A',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              width: '100%',
              padding: '10px',
              border: 'none',
              borderRadius: '30px',
              display: 'flex',
              justifyContent: 'center',
            },
            '& div > button.Mui-selected': {
              backgroundColor: "#134B8A",
              color: "#fff"
            },
            '& div > button.Mui-disabled': {
              opacity: 0.5,
              cursor: "not-allowed"
            },
          }}
          defaultValue={0}  >
          <Box component={TabsList}
            sx={{
              minWidth: "320px",
              backgroundColor: '#fff',
              marginBottom: '16px',
              borderRadius: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'space-between',
              boxShadow: '0 2px 4px rgb(0,0,0,0.4)',
            }}
          >
            <Box component={Tab} style={{ textTransform: 'uppercase', }}>Information</Box>
            <Box component={Tab} style={{ textTransform: 'uppercase', }}>Image</Box>
          </Box>
          <Box sx={{
            width: '100%',
            fontSize: ".875rem"
          }} component={TabPanel} value={0}><DetailLeft detailData={detailData} /></Box>
          <Box component={TabPanel} value={1}><DetailRight detailData={detailData} /></Box>
        </Box>
      </Box>
      <Box className={style.Container}>
        <Box className={style.boxSt}>
          <Grid container spacing={6} >
            <Grid item sm={12} md={6}  >
              <DetailLeft detailData={detailData} />
            </Grid>
            <Grid item sm={12} md={6} >
              <DetailRight detailData={detailData} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainContent>
  )
}

export default RestaurentsDetail