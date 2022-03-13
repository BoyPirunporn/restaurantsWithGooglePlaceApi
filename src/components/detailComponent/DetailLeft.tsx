import { Box, Card, CardContent, CardMedia, Grid, makeStyles, Typography } from '@mui/material'
import { useTheme } from '@mui/styles';
import { } from '@mui/system';
import React from 'react'
import { MediaQueryScreen } from '../../constant/MediaQuery';
import { DataObject, OperationTime } from '../../model/place'

type Props = {
    detailData: DataObject;
}


const DetailLeft: React.FC<Props> = ({ detailData }) => {
    return (
        <Card sx={{ boxShadow: MediaQueryScreen(useTheme()) ? 'none' : '0 3px 4px rgb(0,0,0,0.4)' }}>
            {detailData?.profile_image_url ? <CardMedia
                component="img"
                height="350"
                image={`${detailData?.profile_image_url}&key=${process.env.REACT_APP_API_KEY}`}
                alt="green iguana"
            /> : <Typography variant='h2' sx={{ height: '350', textAlign: 'center' }}>No Image</Typography>}
            <CardContent>
                <Box >
                    <Typography fontWeight={'600'} variant="h5" component="div">
                        {detailData?.name}
                    </Typography>
                </Box>
                <Box mt={2}>
                    <Grid container spacing={6}  >
                        <Grid item sm={3}  >
                            <Box>
                                <Typography sx={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                }} component="div">
                                    Addredd :
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={9}  >
                            <Box> <Typography sx={{
                                fontSize: '16px',
                                fontWeight: '400'
                            }} component="div">
                                {detailData?.address}
                            </Typography></Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2}>
                    <Grid container spacing={6} >
                        <Grid item sm={3} >
                            <Typography sx={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                            }} component="div">
                                Opening Hour :
                            </Typography>
                        </Grid>
                        <Grid item sm={9}  >
                            {
                                detailData?.operation_time.map((item: OperationTime, index: number) => {
                                    return (
                                        <Typography key={index.toString()} sx={{fontWeight:'400'}} gutterBottom component="div">
                                            {item.day} : {item.time_open} AM - {item.time_close} PM
                                        </Typography>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
}

export default DetailLeft