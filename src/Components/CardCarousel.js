import React, { Component } from 'react';
import '../style/custom.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import MyCard from './MyCard';

const items = [
  {
    cardImg: require('../img/school.jpg'),
    cardTitle: 'Alyabad Community School',
    cardSubtitle: 'Karachi, Pakistan',
    cardText: 'Completed Matriculation in 2012',
  },
  {
    cardImg: require('../img/college.jpg'),
    cardTitle: 'Aga Khan Higher Secondary School',
    cardSubtitle: 'Karachi, Pakistan',
    cardText: 'Completed Intermediate in 2014',
  },
  {
    cardImg: require('../img/university.jpg'),
    cardTitle: 'National University of Computing and Emerging Sciences',
    cardSubtitle: 'Karachi, Pakistan',
    cardText: 'Completed Graduation in 2018',
  }
];

class CardCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          {/* <img src={item.src} alt={item.altText} className='carousel-image' /> */}
          {/* <h4 className='quoteCarousel'>{item.Text}</h4> */}
          <MyCard item = {item}></MyCard>
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CardCarousel;
