import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import ScrollUpButton from "react-scroll-up-button";

const Styles = styled.div`
.background{
  /* text-align: center; */
  /* max-width: auto;
  margin: auto; */
  /* border: 5px solid #222; */
  /* background-color:wheat; */
  /* color: black; */
}

`;


export const Layout = (props) => (

  <Styles>
    <Container className="background">
      {props.children}
      <ScrollUpButton />
    </Container>
  </Styles>

)
