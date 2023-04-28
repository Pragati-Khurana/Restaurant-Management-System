import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './DashCarousel.css';


const DashCarousel = () => {
  return (
    <Carousel fade interval={2000} className="carousel-container">
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://img.freepik.com/free-photo/restaurant-interior_1127-3392.jpg?size=626&ext=jpg&ga=GA1.2.1885982019.1676543664&semt=robertav1_2_sidr"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://img.freepik.com/free-photo/life-style_1122-1996.jpg?size=626&ext=jpg&ga=GA1.2.1885982019.1676543664&semt=robertav1_2_sidr"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-img"
          src="https://img.freepik.com/free-photo/cafe-terrace-with-turquoise-sofas-yellow-pillows_140725-2484.jpg?size=626&ext=jpg&ga=GA1.2.1885982019.1676543664&semt=robertav1_2_sidr"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default DashCarousel
