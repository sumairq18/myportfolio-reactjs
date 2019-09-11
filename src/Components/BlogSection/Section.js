import React from 'react';
import SectionItem from './SectionItem';
import { MDBCard, MDBRow, MDBCardBody } from "mdbreact";

const test1 = () => {
  console.log("test1");
}
const test2 = () => {
  console.log("test2");
}
const test3 = () => {
  console.log("test3");
}

const sectionsData = [
  {
    tag: 'Reading',
    title: 'Reading',
    text: 'At first I wasn\'t a reader kind of person but now I have a great interest in reading books in non-fiction generes ',
    img:  require('../../img/reading.jpg'),
    buttonAction: test1,
  },
  {
    tag: 'Travel',
    title: 'Travel',
    text: 'Traveling fascinates everyone so it does to me, Goal is to visit atleast one new country every year!!',
    img:  require('../../img/travel.jpg'),
    buttonAction: test2,
  },
  {
    tag: 'TV Shows',
    title: 'TV Shows',
    text: 'I believe Movies & TV Shows provides you more than just entertaintment, they let you learn about all the different type of people',
    img:  require('../../img/tvshows.jpg'),
    buttonAction: test3,
  }
];

const Section = () => {

  if (sectionsData.length === 0) {
    return null;
  }

  return (
    <div>
      <MDBCard className="my-5 px-5 pb-5">
        <MDBCardBody className="text-center">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Interests</h2>
          <MDBRow>
            {sectionsData.map((data, idx) => (
              <SectionItem data={data} key={idx} />
            ))}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div >
  );
}

export default Section;
