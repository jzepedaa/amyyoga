import React from 'react'
import { NavigationBar } from '../components/NavigationBar';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';




export const Photos = () => (

  <div className="layout">
    <NavigationBar />
    <AwesomeSlider>
      <div data-src="src/photos/pose2.jpg" />
      <div data-src="src/photos/pose1.jpg" />
      <div data-src="/path/to/image-2.jpg" />
    </AwesomeSlider>




  </div>

)
