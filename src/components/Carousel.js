import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import cheers from '../photos/cheers.JPG';
import classphoto from '../photos/class.JPG';
import handsup from '../photos/handsup.JPG';
import yoga from '../photos/yoga.JPG';
import teaching from '../photos/teaching.JPG';
// import posetwo from '../photos/pose2.jpg';
// import poseone from '../photos/pose1.jpg';
// import onelegup from '../photos/onelegup.jpg';
// import { Carousel } from "react-responsive-carousel";


// import Inside from '../pictures/Inside.jpg';

// const Styles = styled.div`
// .sizing{
//      width: 50px;
//      height: 500px;
//      background-position: 50% 50%;
//      background-repeat: no-repeat;
//      /* background-size: cover; */
// }

// `;

export const SlideShow = () => (




  <Container>
    <Row>
      <Col xs={3}></Col>
      <Col xs={6}>


        <Carousel>
          <Carousel.Item>
            <img
              className=" w-100 sizing"
              src={teaching} alt="teaching"

            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sizing"
              src={classphoto} alt="classphoto"

            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sizing"
              src={handsup} alt="handsup"

            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sizing"
              src={cheers} alt="cheers"

            />

            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sizing"
              src={yoga} alt="yoga"

            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item>
            <img
              className="d-block w-100 sizing"
              src={poseone} alt="poseone"

            />


          </Carousel.Item> */}
        </Carousel>
      </Col>
      <Col xs={3}></Col>
    </Row>
  </Container>

)