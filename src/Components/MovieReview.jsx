import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Card, Button } from "react-bootstrap";
const MovieReview = (props) => {
  return (
      <Col md= "3" className="mb-3">
        <Card style={{ width: "18rem", height: '30rem'}}>
          <Card.Img variant="top" src={props.review.multimedia.src} />
          <Card.Body>
            <Card.Title>{props.review.display_title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.review.byline}</Card.Subtitle>
            <Card.Text>
                {props.review.headline} <br />
                Critics Pick: {props.review.critics_pick}
            </Card.Text>
            <Button variant="primary">Read Review</Button>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default MovieReview;
