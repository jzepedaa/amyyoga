import React from 'react'
import { NavigationBar } from '../components/NavigationBar';
import { Layout } from '../components/Layout';
import styled from 'styled-components';

const Styles = styled.div`
.heading{
  /* font-family:fantasy; */
  color: grey;
  text-align: center;
  text-decoration: underline;
}

.schedule{
  color: white;
  text-align: center;
  background: black;
}
h5{
  color: grey;
  text-align: center;
}

`



export const Classes = () => (

  <Styles>
    <div className="layout">
      <NavigationBar />
      <Layout>
        <h2 className="heading">Weekly Schedule</h2>
        <br></br>

        <div className="schedule">



          <p> Tuesdays:
   8 AM and 11 AM, Midtown Athletic Club,
   5:15 PM 333 South Wabash (LifeStart Wellness)
        </p>
          <p>
            Wednesdays:
                11 AM, 230 W Monroe (LifeStart Wellness)
                12:30 PM, 77 W Wacker (LifeStart Wellness)
       </p>
          <p>
            Thursdays:
            12:30 PM, National Association of Realtors (corporate class)
        </p>
        </div>
        <br></br>

        <h5>For private sessions please reach out to amyheiar@gmail.com for availability and more information. </h5>



      </Layout>
    </div>
  </Styles>

)
