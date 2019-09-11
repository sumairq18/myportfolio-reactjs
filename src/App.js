import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import { Container, Row, Col } from 'reactstrap';
import { Parallax } from "react-parallax";
import {
  MyNavBar,
  MyCarousel,
  MyCard,
  Timeline,
  Section,
  FooterPage
} from 'Components'

// const insideStyles = {
//   background: "white",
//   padding: 20,
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%,-50%)"
// };


const parallax1 = require("./img/parallax1.jpg");
const parallax2 = require("./img/parallax2.jpg");
const parallax3 = require("./img/parallax3.jpg");
const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

const items = [
  {
    cardImg: require('./img/school.jpg'),
    cardTitle: 'Alyabad Community School',
    cardSubtitle: 'Karachi, Pakistan',
    cardText: 'Completed Matriculation in 2012',
    webLink: '',
  },
  {
    cardImg: require('./img/college.jpg'),
    cardTitle: 'Aga Khan Higher Secondary School',
    cardSubtitle: 'Karachi, Pakistan',
    cardText: 'Completed Intermediate in 2014',
    webLink: 'https://www.agakhanschools.org/Pakistan/AKHSSKAR/Index',
  },
  {
    cardImg: require('./img/university.jpg'),
    cardTitle: 'National University of Computing and Emerging Sciences',
    cardSubtitle: 'Karachi, Pakistan',
    cardText: 'Completed Graduation in 2018',
    webLink: 'http://khi.nu.edu.pk/',
  }
];

function App() {
  return (
    <div className="App">
      <div>
        <MyNavBar />
      </div>
      <Parallax bgImage={parallax3} strength={500}>
        <div className='parallax'>
          <Container className='Home'>
            <Row id='Home' className='HomeRow'>
              <Col>
                <img src={require('./img/avatar.png')} className='avatar col-xs-6'></img>
              </Col>
              <Col>
                <h1 className='col-xs-6'>Hello There!!! My name is Sumair Qasim Ali and I'm a FullStack Software Developer</h1>
                <MyCarousel></MyCarousel>
              </Col>
            </Row>
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage={parallax1} strength={500}>
        <div className='parallax'>
          <div id='Education'>
            <h2 className='sectionHeading' center>Education</h2>
            <Container className='EducationContainer'>
              <MyCard item={items} >
              </MyCard>
            </Container>
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={parallax2} strength={500}>
        <div className=''>
          <Container id="WorkExperience" className='ExperienceContainer'>
            <h2 className='sectionHeading' center>Work Experience</h2>
            <Timeline></Timeline>
          </Container>
        </div>
      </Parallax>
      <Parallax bgImage={parallax3} strength={500}>
        <div className='' style = {{marginTop: '20px'}}>
          <Container id='Interests'>
            <Section></Section>
          </Container>
        </div>
      </Parallax>
      <FooterPage className='footerpage'></FooterPage>
    </div>
  );
}

export default App;
