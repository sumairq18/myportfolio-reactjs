import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Row, Col } from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { createRequireFromPath } from 'module';

const MyCard = (props) => {
    console.log(props);
  return (
    <div className='cards'>
      <Row>
      <Col sm="4">
      <Card>
        <CardBody className="CardBody">
          <CardTitle className="CardTitle">{props.item[0].cardTitle}</CardTitle>
          <CardSubtitle>{props.item[0].cardSubtitle}</CardSubtitle>
        </CardBody>
        <Image width="100%" src={props.item[0].cardImg} alt="Card image cap" thumbnail  />
        <CardBody>
          <CardText>{props.item[0].cardText}</CardText>
          <CardLink href={props.item[0].webLink}>Visit website</CardLink>
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
      <Card>
        <CardBody className="CardBody">
          <CardTitle className="CardTitle">{props.item[1].cardTitle}</CardTitle>
          <CardSubtitle>{props.item[1].cardSubtitle}</CardSubtitle>
        </CardBody>
        <Image width="100%" src={props.item[1].cardImg} alt="Card image cap" thumbnail />
        <CardBody>
          <CardText>{props.item[1].cardText}</CardText>
          <CardLink href={props.item[1].webLink}>Visit website</CardLink>
        </CardBody>
      </Card>
      </Col>
      <Col sm="4">
      <Card>
        <CardBody className="CardBody">
          <CardTitle className="CardTitle">{props.item[2].cardTitle}</CardTitle>
          <CardSubtitle>{props.item[2].cardSubtitle}</CardSubtitle>
        </CardBody>
        <Image width="100%" src={props.item[2].cardImg} alt="Card image cap" thumbnail />
        <CardBody>
          <CardText>{props.item[2].cardText}</CardText>
          <CardLink href={props.item[2].webLink}>Visit website</CardLink>
        </CardBody>
      </Card>
      </Col>
    </Row>
    </div>
  );
};

export default MyCard;