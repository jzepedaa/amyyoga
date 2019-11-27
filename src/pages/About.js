import React from 'react'
import { NavigationBar } from '../components/NavigationBar';
import { Layout } from '../components/Layout';
import { Picture } from 'react-responsive-picture';
// import { car } from '../photos/car.JPG';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';
// import { Image } from 'react-native';

const Styles = styled.div`

.layout{
  /* background-color: black; */
}
.picture{
  text-align: center;
  /* width: 50%; */

}

.bio{
  /* background-color: black; */
  color: white;
}




`


export const About = () => (

  <Styles>

    <div className="layout">
      <NavigationBar />
      <Layout>

        <div className="introduction">
          <div className="picture">
            {/* <h2>About Page</h2> */}

            <Slide top>
              <img src={require('../photos/car.JPG')} alt="car" />
              {/* <Picture className="car" src={car} /> */}
            </Slide>
          </div>
          <hr style={{ borderTop: '3px solid white' }} />
          <div className="bio">

            <p>
              I think I took my first yoga class in 1994 when I was 16. It was at a local recreation center in Ohio (where I’m from), and I think I thought it was pretty fun. I didn’t take another yoga class until I was in college in 1999, when I went to a health resort in Austin, TX with my mom while she was on a writing assignment. I think I thought it was fun then too. After that, it wasn’t until 2003, when I returned broken hearted from a short lived move to New Orleans, that I started doing yoga in earnest. At that point, it wasn’t fun. However, for reasons that didn’t become clear to me until much later, I stuck with it. In time, the practice brought me to the realization that sometimes you have to work through your discomfort to get to the good stuff, and running away from things hadn’t served me very well thus far. Since then, I have been practicing yoga daily in some way or another for over 16 years, and it has served as a continual thread that weaves in and out of my life in strange and beautiful ways.
            </p>
            <p>The incredible (and incredibly frustrating) thing about the practice of yoga is that it is just that, a constant practice. You will never come to the end of yoga. Yoga and meditation have been integral in helping me find a more balanced approach to almost every aspect of my life, and it continues to serve as an anchor keeping me tethered to the earth as well as allowing me to float above it every once in awhile.
            </p><p>It wasn’t until about 5 years ago that I realized that it was my turn to formally share what I had learned thus far, and what I continue to learn from the practice. Sometimes the lessons are in the asanas on my mat or my deeper cycles of breath, but just as often the practice follows me off my mat and teaches me outside the delineation of those four corners. It is in those moments that I am most grateful and aware of what the practice of yoga has opened me up to. I strive to open students up to these moments as well, while helping them access their ability to accept and appreciate both the joys and sorrows that stem from their awareness to them.
            </p><p>Ultimately I believe that no matter what shape your body is or isn’t capable of making doesn’t matter. It’s the work you do that matters, and yoga can be a tool to help you deepen your understanding of not only yourself, but the world around you, and how you want to exist in it. There is a deep strength to be found in allowing a softness from within to manifest through this breath based movement, and in finding that softness, you build strength in a myriad of ways, not just physically but intrinsically.


            </p>
          </div>


        </div>

      </Layout>
    </div>

  </Styles>

)
