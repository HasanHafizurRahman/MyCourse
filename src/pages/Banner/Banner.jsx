import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
          style={{height: "500px"}}
            className="d-block w-100"
            src="https://i.ibb.co/pjBKZ0Y/jhanker.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Complete web development with jhanker mahbub</h3>
            <p>Purchase Our Course And B eready for the future.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          style={{height: "500px"}}
            className="d-block w-100"
            src="https://www.adelphi.edu/high-school-students/wp-content/uploads/sites/47/2020/06/precollege-video-game.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Mern Stack Web Development</h3>
            <p>Purchase Our Course And B eready for the future.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
          style={{height: "500px"}}
            className="d-block w-100"
            src="https://www.tckpublishing.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-17-at-6.50.40-PM-1080x582.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Think in a redux way</h3>
            <p>
              Purchase Our Course And B eready for the future.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;