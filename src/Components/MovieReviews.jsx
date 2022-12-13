import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import MovieReview from "./MovieReview";
import Carousell from "./Carousell";
import Navbarr from "./Navbarr";

const MovieReviews = () => {
  const [appData, setData] = useState([]);
  useEffect(() => {
    const pullData = async () => {
      await axios
        .get(
          "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=big&api-key=xdiWs5MyoiSDJhOsdW7EI6SpJROiG1XO"
        )
        .then((response) => {
          setData([...response.data.results]);
          console.log(appData);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    pullData();
  }, []);

  return (
    <>
      <Container fluid>
        <Row>
          <Navbarr />
        </Row>
        <Row>
          <Carousell />
        </Row>
        <Row className="heroSection">
          <h1 className="reviewHeader my-4">Reviews:Editors Choice</h1>
          {appData.map((item, index) => (<MovieReview review={item} key={index}/>))}  
        </Row>
      </Container>

      <>
        {/* {appData.map((item, index) => (
          <div key={index}>
            <img src={item.multimedia.src} alt="" />
            {item.display_title}
            {item.byline}
            {item.critics_pick}
            {item.headline}
          </div>
        ))} */}
      </>
    </>
  );
};

export default MovieReviews;

// let newData = appData
// console.log('Appdata:', newData)
// let multimediaData = newData.map(item => item.multimedia)
// console.log(multimediaData);
// let appImage = multimediaData.map((item, index) => {<div key={index}><img src={item.src} /></div>})
