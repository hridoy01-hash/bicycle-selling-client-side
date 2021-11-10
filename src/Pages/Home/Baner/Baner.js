import React from 'react';
import { Carousel } from 'react-bootstrap';
import baner1 from '../../../images/main-banner1.jpg'
import baner2 from '../../../images/main-banner2.jpg'
import baner3 from '../../../images/main-banner3.jpg'

const Baner = () => {
    return (
        <div>
           <Carousel fade>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={baner1} style={{height:"540px"}}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={baner3} style={{height:"540px"}}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={baner2} style={{height:"540px"}}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Baner;