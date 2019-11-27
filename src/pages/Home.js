import React from 'react'
import Slide from 'react-reveal/Slide';
import { Picture } from 'react-responsive-picture';
import intro from '../photos/Intro.JPG';
// import onelegup from '../photos/onelegup.jpg'
import styled from 'styled-components';
import { NavigationBar } from '../components/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap'
import ScrollUpButton from "react-scroll-up-button";
import { Layout } from '../components/Layout';

// import darkflower from '../photos/darkflower.jpg'




const Styles = styled.div`
.intro{
  width: 100%;
}

h2 { 
  text-align: center;
  position: absolute; 
  /* background: black;
  opacity: .7; */
  top: 125px; 
  left: 0px; 
  width: 100%; 
  font-size: 75px;
}

h2 span { 
   color: white; 
   font-weight: bold 24px/45px Helvetica, Sans-Serif; 
   letter-spacing: -1px;  
   background: rgb(0, 0, 0); 
    background: rgba(0, 0, 0, 0.4); 
   padding: 10px;  
} 
.introduction{

  text-align: center;
  /* background: black; */

}




@media only screen and (max-width: 768px) {
  /* For mobile phones: */
   h2 { 
  text-align: center;
  position: absolute;
  font-size: 60px; 
  top:100px; 
  left: 0px; 
  width: 100%; 
}

h2 span { 
   color: white; 
   font-weight: bold 24px/45px Helvetica, Sans-Serif; 
   letter-spacing: -1px;  
   background: rgb(0, 0, 0); 
    background: rgba(0, 0, 0, 0.4); 
   padding: 10px;  
} 
}

@media only screen and (max-width: 600px) {
  h2 { 
  text-align: center;
  position: absolute; 
  top: 55px; 
  left: 0px; 
  width: 100%; 
}

h2 span { 
   color: white; 
   font-weight: bold 24px/45px Helvetica, Sans-Serif; 
   letter-spacing: -1px;  
   background: rgb(0, 0, 0); 
    background: rgba(0, 0, 0, 0.4); 
   padding: 10px;  
} 
}

@media only screen and (max-width: 375px) {
  /* For mobile phones: */
   h2 { 
  text-align: center;
  position: absolute; 
  top: 55px; 
  left: 0px; 
  width: 100%; 
}

h2 span { 
   color: white; 
   font-weight: bold 24px/45px Helvetica, Sans-Serif; 
   letter-spacing: -1px;  
   background: rgb(0, 0, 0); 
    background: rgba(0, 0, 0, 0.4); 
   padding: 10px;  
} 
}

@media only screen and (max-width: 414px) {
  h2 { 
  text-align: center;
  position: absolute; 
font-size: 30px;
  top: 100px; 
  left: 0px; 
  width: 100%; 
}

h2 span { 
   color: white; 
   font-weight: bold 24px/45px Helvetica, Sans-Serif; 
   letter-spacing: -1px;  
   background: rgb(0, 0, 0); 
    background: rgba(0, 0, 0, 0.4); 
   padding: 10px;  
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
      <div className="layout">

        {/* <h2>About Page</h2> */}
        <NavigationBar />
        <Slide top left>
          <div className="topPhoto">

            <Picture className="intro" src={intro} />
          </div>
          <h2>Strength in Softness</h2>
        </Slide>
      </div>


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
      </Container>
      <ScrollUpButton />
    </Layout>
  </Styles>

)
