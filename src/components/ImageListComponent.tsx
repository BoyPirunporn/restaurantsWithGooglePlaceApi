import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const ImageListComponent:React.FC<{image:string[]}> = ({image}) => {
  return (
      <ImageList cols={3} gap={0} sx={{ borderRadius: '10px;', }}>
          {image?.map((img: string) => (
              <ImageListItem key={img}>
                  <img
                      style={{ height: '150px' }}
                      src={`${img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={img}
                  />
              </ImageListItem>
          ))}
      </ImageList>
  )
}

export default ImageListComponent