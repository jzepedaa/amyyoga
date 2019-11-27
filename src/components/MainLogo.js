import React from 'react';
// import Image from 'react-bootstrap/Image';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Picture } from 'react-responsive-picture';
import logo from '../photos/lotusFlower.jpg';
import styled from 'styled-components';


const Styles = styled.div`

.logo{
text-align: center;

/* margin-top: 20px; */

}

`



export const MainLogo = () => (

  <Styles>
    <Container className="logo">

      <Link to="/">
        <Picture src={logo} />
      </Link>

    </Container>
  </Styles>

)
