import React from 'react'
import Carousel from 'react-material-ui-carousel'

const ImageSlide: React.FC<{ image: string[] }> = ({ image }) => {
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
                    key={img + Math.random()}
                    style={{ height: '300px', width: '100%', borderRadius: '15px' }}
                    src={`${img}&key=${process.env.REACT_APP_API_KEY}`}
                    srcSet={`${img}&key=${process.env.REACT_APP_API_KEY}`}
                    alt={img}
                />
            )
            )
            }
        </Carousel>
    )
}

export default ImageSlide