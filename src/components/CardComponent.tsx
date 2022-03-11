import {  Card, CardContent, Grid, Typography, Box, CardMedia, CircularProgress } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React, { useEffect, useState, FC } from 'react'
import { DataObject, DetailRestaurant, placeLocation } from '../model/place'
import { placeRestaurant } from '../service/Place';
import CircleIcon from '@mui/icons-material/Circle';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import ImageListComponent from './ImageListComponent';
import ImageSlide from './ImageSlide';
import { useNavigate } from "react-router-dom";

type Props = {
    resturent: DataObject[]
}


const CardComponent: FC<Props> = ({ resturent }) => {
    // const [restaurants, setRestaurants] = useState<DetailRestaurant['detail']>([])
    // const [isLoading, setLoading] = useState<boolean>(true)
    // let queryPlace: placeLocation = {
    //     lat: '13.779820829768585',
    //     long: '100.54464812602707',
    //     radius: 5000,
    //     type: 'food',
    //     query: 'restaurant'
    // }
    const navigation = useNavigate ()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
    useEffect(() => {
        // (async () => {
        //     const { results } = await placeRestaurant(queryPlace);
        // })()

    }, [])
    return (
        <>
            {!resturent.length ? <Box sx={{ display: 'flex', justifyContent: 'center' }}> <CircularProgress /></Box> :
                <Grid container justifyContent="start" spacing={6} >
                    {resturent?.map((item) =>
                    (
                        <Grid key={item.id} item xs={12} md={6}  sm={12}  xl={4} >
                            <Card style={{
                                background: '#FFFFFF',
                                boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)',
                                borderRadius: '15px',
                                cursor:'pointer'
                            }} 
                                onClick={() => navigation('/detail/'+item.id)}
                            >
                                {!matches ? <CardMedia component="img"
                                    height='150px'
                                    width='100%'
                                    image={`${item.profile_image_url}&key=${process.env.REACT_APP_API_KEY}`}
                                    alt="green iguana"
                                /> : <></>}
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={2}>
                                            {matches ? <CardMedia component="img"
                                                height='80'
                                                width='70'
                                                image={`${item.profile_image_url}&key=${process.env.REACT_APP_API_KEY}`}
                                                alt="green iguana"
                                                style={{ borderRadius: '10px' }} /> : <></>}
                                        </Grid>
                                        <Grid item xs={12} sm={10} >
                                            <Box>
                                                <Typography variant="h6" component="div" sx={{ fontWeight: '600' }}>
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', justifyContent: 'space-between',marginTop:2 }}>
                                                <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                                                <DateRangeRoundedIcon />
                                                    <Typography variant="h6" sx={{fontWeight:'500'}} component="div">
                                                        {item.operation_time[0].time_open +' AM'} - {item.operation_time[0].time_close + 'PM'}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                    <CircleIcon fontSize="small" sx={{ color: '#134B8A', mx: 1, }} />
                                                    <Typography variant="h6" component="div" sx={{ color: '#134B8A', fontWeight: 'bold' }}>
                                                        {item.rating}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Box mt={2}>
                                        {matches ? 
                                        ( //Device Desktop
                                            <ImageListComponent image={item.images} />
                                        ) :
                                         //Device Mobile
                                           ( <ImageSlide image={item.images}/>)
                                        }
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            }
        </>
    )
}
export default CardComponent