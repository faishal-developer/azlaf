import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type Iprops={
    children:React.ReactElement[]
}
const MultiItemsCarousel = ({children}:Iprops) => {
    return (
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1680
              },
              items: 6,
              partialVisibilityGutter: 40
            },
            laptop: {
              breakpoint: {
                max: 1680,
                min: 1420
              },
              items: 5.5,
              partialVisibilityGutter: 30
            },
            min_laptop: {
              breakpoint: {
                max: 1420,
                min: 1180
              },
              items: 4.5,
              partialVisibilityGutter: 30
            },
            mobile: {
              breakpoint: {
                max: 500,
                min: 0
              },
              items: 1.5,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: {
                max: 1180,
                min: 900
              },
              items: 3.5,
              partialVisibilityGutter: 30
            },
            min_tablet: {
              breakpoint: {
                max: 900,
                min: 500
              },
              items: 2.5,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
            {children}
        </Carousel>
    );
};

export default MultiItemsCarousel;