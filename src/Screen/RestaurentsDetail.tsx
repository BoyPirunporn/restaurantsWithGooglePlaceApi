import { Box, Button, Grid, Card, CardMedia, CardContent, Typography, CardActions, ImageList, ImageListItem } from '@mui/material'
import React, { useState,useEffect } from 'react'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { makeStyles } from '@mui/styles';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../example_data.json';
import { DataObject, OperationTime } from '../model/place'



const useChipStyles = makeStyles({
  chip: {
    "&:hover": {
      backgroundColor: '#134B8A'
    },
  },
  Container: {
    marginTop: '25px !important',
    height: 'auto',
    backgroundColor: '#C4D3E9',
    borderRadius: '10px'
  },
  boxSt: {
    padding: '20px'
  },
  pText: {
    fontSize: '16px',
    fontWeight: '600'
  }
});

const RestaurentsDetail = () => {
  const style = useChipStyles()
  const navigation = useNavigate()
  const param = useParams()
  const detailData:any = data.find((item: DataObject) => item.id === Number(param.id))
  console.log(detailData)
  
  return (
    <Box >
      <Button onClick={() => navigation('/')} className={style.chip} variant="contained" startIcon={<ArrowBackIosRoundedIcon />} sx={{ borderRadius: 30, backgroundColor: '#134B8A', color: '#fff', fontWeight: 600 }} >
        Back
      </Button>

      <Box className={style.Container}>
        <Box className={style.boxSt}>
          <Grid container spacing={6} >
            <Grid item sm={6}  >
              <Card >
                <CardMedia
                  component="img"
                  height="350"
                  image={`${detailData?.profile_image_url}`}
                  alt="green iguana"
                />
                <CardContent>
                  <Box >
                    <Typography fontWeight={'600'} variant="h5" component="div">
                      {detailData?.name}
                    </Typography>
                  </Box>
                  <Box mt={2}>
                    <Grid container spacing={6} >
                      <Grid item sm={3}  >
                        <Typography className={style.pText} component="div">
                          Addredd :
                        </Typography>
                      </Grid>
                      <Grid item sm={9}  >
                        <Typography className={style.pText} component="div">
                          {detailData?.address}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box mt={2}>
                    <Grid container spacing={6} >
                      <Grid item sm={3}  >
                        <Typography className={style.pText} component="div">
                          Opening Hour :
                        </Typography>
                      </Grid>
                      <Grid item sm={9}  >
                        {
                          detailData?.operation_time.map((item: OperationTime, index: number) => {
                            return (
                              <Typography key={index.toString()} className={style.pText} gutterBottom component="div">
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
            </Grid>
            <Grid item sm={6}>
              <Card >
                <CardContent>
                  <Typography gutterBottom variant="h5" fontWeight={'600'} component="div">
                    Image
                  </Typography>
                  <div style={{ flexDirection: 'column', display: 'flex', borderRadius: 30}}>
                    {detailData?.images.map((image: string) => (
                      <Box sx={{height:500}}>
                        <img src={image} alt="" style={{
                          width: '100%',
                          height: 500,
                          objectFit: 'cover',
                        }}/>
                      </Box>
                    ))}
                   </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default RestaurentsDetail