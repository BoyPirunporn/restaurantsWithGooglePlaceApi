import { Card, CardContent, Grid, Typography, Box, CardMedia, CircularProgress, Theme } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React, { FC } from 'react'
import { DataObject, OperationTime } from '../model/place'
import CircleIcon from '@mui/icons-material/Circle';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';
import ImageListComponent from './ImageListComponent';
import ImageSlide from './ImageSlide';
import { useNavigate } from "react-router-dom";
import { makeStyles, styled } from '@mui/styles';

type Props = {
    resturent: DataObject[] | undefined;
    loading: boolean
}
const useStyles = makeStyles((theme: Theme) => ({
    hText: {
        fontSize: '32px',
        [theme.breakpoints.down('sm')]: { // eslint-disable-line no-useless-computed-key
            fontSize: '24px'
        }
    },
    ratting: {
        display: 'flex', justifyContent: 'space-around', alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            position: "absolute",
            top: '130px',
            left: "80%",
            borderRadius: '30px',
            background: '#134B8A',
            width: '70px',
            boxShadow: '0 3px 5px rgb(0 0 0 / 43%)'
        }
    },
    rattingText: {
        fontWeight: '500',
        [theme.breakpoints.down('sm')]: {
            color: '#fff'
        }
    },
    card: {
        background: '#FFFFFF',
        boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px',
        cursor: 'pointer',
        position: 'relative'
    }

}))


const CardComponent: FC<Props> = ({ resturent, loading }) => {

    const navigation = useNavigate()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
    const [openTime,setOpenTime] = React.useState<OperationTime|null>(null)
    const style = useStyles()
    const changeName = (num: number) => {
        switch (num) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
            default:
                return '-';
        }
    }
    const opening = (item: OperationTime[]) => {
        let open = item.find((e: any) => e.day === changeName(new Date().getDay()))
        
        return open?.time_open !== 'closed'
            && open?.time_close !== 'closed'
            ? `${open?.time_open
    } AM - ${open?.time_close} PM` : 'closed'
    }
    if (!resturent?.length) {
        return (
            <Box>
                <Typography variant="h6" component="div" className={style.hText} sx={{ fontWeight: '600', fontSize: '32px' }}>
                    The store name you searched for was not found.
                </Typography>
            </Box>
        )
    }
    return (
        <>
            {loading ? <Box sx={{ display: 'flex', justifyContent: 'center' }}> <CircularProgress /></Box> :
                <Grid container justifyContent="start" spacing={6} >
                    {resturent?.map((item) =>
                    (
                        <Grid key={item.id} item xs={12} md={6} sm={12} xl={4} >
                            <Card className={style.card}
                                onClick={() => navigation('/detail/' + item.id)}
                            >
                                {!matches ? <CardMedia component="img"
                                    height='150px'
                                    width='100%'
                                    image={`${item.profile_image_url}`}
                                    alt="green iguana"
                                /> : <></>}
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={2}>
                                            {
                                                matches ?
                                                    <CardMedia component="img"
                                                        height='80'
                                                        width='70'
                                                        image={`${item.profile_image_url}`}
                                                        alt="green iguana"
                                                        style={{ borderRadius: '10px', }} /> :
                                                    <></>}
                                        </Grid>
                                        <Grid item xs={12} sm={10} paddingTop={'-3px'} >
                                            <Box >
                                                <Typography
                                                    variant="h6"
                                                    component="div"
                                                    className={style.hText}
                                                    sx={{ fontWeight: '600', fontSize: '32px' }}>
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                            <Box sx={
                                                {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    marginTop: 2
                                                }
                                            }>
                                                <Box
                                                    display={'flex'}
                                                    flexDirection={'row'}
                                                    alignItems={'center'}>
                                                    <DateRangeRoundedIcon />
                                                    <Typography
                                                        sx={
                                                            {
                                                                fontWeight: '500',
                                                                fontSize: '16px'
                                                            }
                                                        }
                                                        component='div'
                                                    >
                                                        {opening(item.operation_time)}
                                                    </Typography>
                                                </Box>
                                                <Box >
                                                    <Box className={style.ratting} >
                                                        <CircleIcon fontSize="small" sx={{ color: '#134B8A', mx: 1, display: matches ? 'block' : 'none' }} />
                                                        <Typography variant="h6" component="div" className={style.rattingText} >
                                                            {item.rating}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Box mt={2}>
                                        {matches ?
                                            ( //Device Desktop
                                                item.images.length ? <ImageListComponent image={item.images} /> : <Typography sx={{ textAlign: 'center' }} variant="h2">No image</Typography>
                                            ) :
                                            //Device Mobile
                                            (item.images.length ? <ImageSlide image={item.images} /> : <Typography sx={{ textAlign: 'center' }} variant="h2">No image</Typography>)
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