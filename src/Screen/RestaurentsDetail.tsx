import { Box, Button, Grid, useTheme, } from '@mui/material'
import React from 'react'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { makeStyles, } from '@mui/styles';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../example_data.json';
import { DataObject } from '../model/place'
import TabsUnstyled from '@mui/base/TabsUnstyled';
import DetailLeft from '../components/detailComponent/DetailLeft';
import { Theme } from '@mui/system';
import DetailRight from '../components/detailComponent/DetailRight';
import { Tab, TabPanel, TabsList } from '../components/TapListComponent/TapElements';
import { MediaQueryScreen } from '../constant/MediaQuery';
import { useSelector } from 'react-redux';

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
  const [value, setValue] = React.useState('1');
  const { loading, error, restaurant } = useSelector((state: any) => state.Restaurant)
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const detailData: DataObject | any = restaurant?.find((item: DataObject) => item.id === Number(param.id) || item.id === param.id)
  if (!detailData) {
    navigation('/')
  }
  return (
    <Box >
      <Button onClick={() => navigation('/')} className={style.chip} variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={{ borderRadius: 30, backgroundColor: '#134B8A', color: '#fff', fontWeight: 600 }} >
        Back
      </Button>

      <Box sx={{
        display: MediaQueryScreen(useTheme()) ? 'none' : 'block',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop: 3,
      }}>
        <TabsUnstyled defaultValue={0}  >
          <TabsList>
            <Tab style={{ textTransform: 'uppercase', }}>Information</Tab>
            <Tab style={{ textTransform: 'uppercase', }}>Image</Tab>
          </TabsList>
          <TabPanel value={0}><DetailLeft detailData={detailData} /></TabPanel>
          <TabPanel value={1}><DetailRight detailData={detailData} /></TabPanel>
        </TabsUnstyled>
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
    </Box>
  )
}

export default RestaurentsDetail