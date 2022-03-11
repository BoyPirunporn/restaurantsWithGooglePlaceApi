import React from 'react'
import Carousel from 'react-material-ui-carousel'

const ImageSlide:React.FC<{image:string[]}> = ({image}) => {
  return (
      <Carousel
          IndicatorIcon={image.length}
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          indicators={false}
          animation={'slide'}
          navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
              style: {
                  backgroundColor: '#fff',
                  color: '#9E9E9E'
              }
          }}
          indicatorIconButtonProps={{
              style: {
                  color: 'red' // 2
              }
          }}
          swipe={false}
      >
          {image.map(img => (
          <img
            key={img}
              style={{ height: '300px', width: '100%', borderRadius: '15px' }}
              src={`${img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={img}
          />
          )
          )
          }
      </Carousel>
  )
}

export default ImageSlide