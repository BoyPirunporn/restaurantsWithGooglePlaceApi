import { Button, Card, CardActions, CardContent, Grid, Paper, Typography, Box, CardMedia, ImageList, ImageListItem } from '@mui/material'
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import MuiImageSlider from 'mui-image-slider';
import axios from 'axios'
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
 const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
    ];

const images = [
    'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
    'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
    'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
    'https://homepages.cae.wisc.edu/~ece533/images/barbara.png',
];
const BodyComponent = () => {
    const card_ = Array.from({ length: 10 }, (_, i) => i + 1)
    let lat = '13.779820829768585'
    let long = '100.54464812602707'
    const [results, setResults] = useState([])
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    useEffect(() => {
        axios.get(`/json?query=coffee+shop&location=35.792491,-78.653009&radius=2000®ion=us&type=cafe,bakery&key=AIzaSyA6lxj2XLZ1d-czpM1IVWpkPdbqVSHBUaw`)
            .then(res => {
                console.log(res.data.results)
                setResults(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])
   
    return (
        <Grid container justifyContent="start" spacing={6} >
            {card_.map((value, i) => (
                <Grid key={i} item xs={12} sm={4}>
                    <Card style={{
                        background: '#FFFFFF',
                        boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)',
                        borderRadius: '10px'
                    }}>
                        {!matches ? <CardMedia component="img"
                            height='150'
                            width='100%'
                            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                            alt="green iguana"
                            /> : <></>}
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={2}>
                                    {matches ? <CardMedia component="img"
                                        height='60'
                                        width='60'
                                        image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                                        alt="green iguana"
                                        style={{ borderRadius: '10px' }} />:<></>}
                                </Grid>
                                <Grid item xs={12} sm={10}>
                                    <Box>
                                        <Typography variant="h6" component="div">
                                            h6. Heading
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Box>  
                                            <Typography variant="h6" component="div">
                                            h6. Heading
                                        </Typography>
                                        </Box>
                                        <Box> 
                                            <Typography variant="h6" component="div">
                                            h6. Heading
                                        </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box >
                                <Grid container >
                                    <Grid item xs={12} sm={12}>
                                      

                                        <MuiImageSlider images={images} />
                                        {/* <ImageList cols={3} gap={0} sx={{  borderRadius: '10px;',  }}>
                                            {itemData.map((item) => (
                                                
                                                // <ImageListItem key={item.img}>
                                                //     <img
                                                //         // style={{ width: '331px'}}
                                                //         src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                                //         srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                                //         alt={item.title}
                                                //     />
                                                // </ImageListItem>
                                            ))}
                                        </ImageList> */}
                                    </Grid>
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default BodyComponent