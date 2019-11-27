import React from 'react';
import styled from 'styled-components';


const Styles = styled.div`
.background{
  padding-top:20px;
  padding-bottom: 20px;
  text-align: center;
  background-color:black;
  color: white;
}
`;


export const Footer = () => (

  <Styles>
    <div className="background">
      <p>© 2019 J.Zepeda LLC</p>
    </div>
  </Styles>

)