import { Box, Card, CardContent, ImageList, ImageListItem, List, ListItem, Typography, useTheme } from '@mui/material'
import React from 'react'
import { MediaQueryScreen } from '../../constant/MediaQuery';
import { DataObject } from '../../model/place';
type Props = {
    detailData: DataObject;
}
const DetailRight: React.FC<Props> = ({ detailData}) => {
  return (
      <Card sx={{ boxShadow: MediaQueryScreen(useTheme()) ? 'none' : '0 5px 7px rgb(0,0,0,0.4) !important', marginBottom:'50px',borderRadius:'15px !important' }}>
          <CardContent>
              <Typography gutterBottom variant="h5" fontWeight={'600'} component="div">
                  Image
              </Typography>
              {detailData?.images.length ?
                  <ImageList sx={{ width: '100%', overflow: 'hidden', borderRadius: '10px' }} gap={0} cols={0} >
                  {detailData?.images.map((image:string) => (
                      <ImageListItem key={image}>
                          <img
                              style={{height:'350px'}}
                              src={`${image}&key=${process.env.REACT_APP_API_KEY}`}
                              srcSet={`${image}&key=${process.env.REACT_APP_API_KEY}`}
                              alt={image}
                              loading="lazy"
                          />
                      </ImageListItem>
                  ))}
                  </ImageList> : <Typography variant='h2' sx={{ height: '350',textAlign:'center' }}>No Image</Typography> }
              
              
          </CardContent>
      </Card>
  )
}

export default DetailRight