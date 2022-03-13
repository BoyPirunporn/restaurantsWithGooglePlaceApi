import { Box, Card, CardContent, CardMedia, Grid,  Theme, Typography } from '@mui/material'
import { useTheme } from '@mui/styles';
import { makeStyles, styled } from '@mui/styles';
import React,{FC} from 'react'
import { MediaQueryScreen } from '../../constant/MediaQuery';
import { DataObject, OperationTime } from '../../model/place'

type Props = {
    detailData: DataObject;
}

const useStyles = makeStyles((theme: Theme) => ({
    textContainer: {
        [theme.breakpoints.down('sm')]: {
            paddingTop: '2px !important'
        },
        [theme.breakpoints.down('md')]: {
            paddingTop: '2px !important'
        },
    }

}))

const DetailLeft: FC<Props> = ({ detailData }) => {
    const classed = useStyles()

    return (
        <Card sx={{ boxShadow: MediaQueryScreen(useTheme()) ? 'none' : '0 5px 7px rgb(0,0,0,0.4)' ,borderRadius:'10px',marginBottom:'50px'}}>
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
                        <Grid item sm={12} md={4}  >
                            <Box>
                                <Typography sx={{
                                    fontSize: '1.1rem',
                                    fontWeight: '600',
                                }} component="div">
                                    Addredd :
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={8}  className={classed.textContainer}>
                            <Box> <Typography sx={{
                                // fontSize: '1.1rem',
                                fontWeight: 'bold'
                            }} component="div">
                                {detailData?.address}
                            </Typography></Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={2}>
                    <Grid container spacing={6} >
                        <Grid item sm={12} md={4} >
                            <Typography sx={{
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                            }} component="div">
                                Opening Hour :
                            </Typography>
                        </Grid>
                        <Grid item sm={12} md={8} xs={12}  className={classed.textContainer}>
                            {
                                detailData?.operation_time.map((item: OperationTime, index: number) => {
                                    return (
                                        <Typography key={index.toString()} sx={{fontWeight:'400'}} gutterBottom component="div">
                                            {item.day} : {item.time_open !== 'closed' && item.time_close !== 'close' ? `${item.time_close} AM - ${item.time_close } PM`:'Closed'} 
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