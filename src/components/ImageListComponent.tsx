import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const ImageListComponent:React.FC<{image:string[]}> = ({image}) => {
  return (
      <ImageList cols={3} gap={0} sx={{ borderRadius: '10px;', }}>
          {image?.map((img: string,i:number) => (
              <ImageListItem key={img + Math.random()}>
                  <img
                      style={{ height: '150px' }}
                      src={`${img}&key=${process.env.REACT_APP_API_KEY}`}
                      srcSet={`${img}&key=${process.env.REACT_APP_API_KEY}`}
                      alt={img}
                  />
              </ImageListItem>
          ))}
      </ImageList>
  )
}

export default ImageListComponent