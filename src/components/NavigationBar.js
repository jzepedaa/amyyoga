import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    text-align: center;
    background-color: black;
    color: grey;
    padding: 30px;
    /* padding-bottom: 20px; */
    /* border-bottom: 10px solid #B5c2b7; */
    /* color: black; */
    /* background-color: #222;
    width: 100%; */
    /* border: 2px solid black; */
    
  }

  .navbar {
    text-align: left;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: White;

    &:hover {
      
      color: #62466B;
    }
  }

  .navbar-light .navbar-toggler {
    color: white;
    border-color: white;
}
.navbar-toggler-icon {
  /* color: white; */
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center white;
    background-size: 100% 100%;
}

`;

export const NavigationBar = () => (
  <Styles>
    <Navbar className="d-flex justify-content-center" color="faded" light expand="md">
      {/* <Navbar.Brand href="/">Amy Heiar</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/classes">Schedule</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/photos">Photos</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
