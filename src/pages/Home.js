import React from 'react'
import Slide from 'react-reveal/Slide';
import { Picture } from 'react-responsive-picture';
import intro from '../photos/Intro.JPG';
// import { Container } from 'react-bootstrap';
// import onelegup from '../photos/onelegup.jpg'
import styled from 'styled-components';
import { NavigationBar } from '../components/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap'
import ScrollUpButton from "react-scroll-up-button";
import { Layout } from '../components/Layout';
// import { BrowserRouter as Link } from 'react-router-dom';

// import darkflower from '../photos/darkflower.jpg'




const Styles = styled.div`
.intro{
  width: 100%;
}

h2 { 
  /* font-family:fantasy; */
  color:white;
  /* position: absolute;  */
  font-size: 75px;
text-align:center;
}


.introduction{
  text-align: center;
  /* background: black; */

}


@media only screen and (max-width: 768px) {
  h2 {
    font-size: 60px;
    /* padding-left: 150px; */
  }
}

@media only screen and (max-width: 600px) {

h2{
  font-size: 10px;
}
}


@media only screen and (max-width: 414px) {

h2{
  font-size: 35px;
}

}

@media only screen and (max-width: 411px) {

h2{
  font-size: 30px;
}

}
@media only screen and (max-width: 360px) {

h2{
  font-size: 30px;
}
h1{
  font-size: 30px;
}
@media only screen and (max-width: 375px) {

h2{
  font-size: 25px;
}
}
}



.text{
  color: white;
  text-align: center;
  padding:30px;
}

.introductiontext{
  color: white;
   text-align: center;
  padding:30px;
}


`




export const Home = () => (

  <Styles>
    <Layout>
      <NavigationBar />
      <Container className="layout">

        {/* <h2>About Page</h2> */}
        <h2>Strength in Softness</h2>
        <Slide top left>
          <div className="topPhoto layout">

            <Picture className="intro" src={intro} />
          </div>
        </Slide>
      </Container>


      {/* <div className="text">
        <h1>Amy Heiar</h1>
      </div> */}



      {/* <div className="introduction">

        <Picture className="onelegup" src={onelegup} />



      </div> */}
      <Container className="introductiontext mbsc-grid">
        <Row >

          <Col>
            <div className="text">
              <h1>Amy Heiar</h1>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo modi doloremque corrupti laboriosam facilis quam minima, rerum iste aperiam maiores at, mollitia vitae voluptate, pariatur rem dolores aliquid. Voluptates, harum!</p>

          </Col>




        </Row>


        {/* <a href="src/pages/Classes.js">Schedule</a> */}


      </Container>
      <ScrollUpButton />
    </Layout>
  </Styles>

)
