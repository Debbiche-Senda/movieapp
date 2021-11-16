import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";

const MovieCard = ({
  movie: {id, posterUrl, title, description, rating },
  sayHi,
}) => {
  const [showit, setShowit] = useState(false);
  const showitfun = () => setShowit(!showit);

  return (
    <div onMouseOver={showitfun} onMouseOut={showitfun}>
      <Link to={`/moviedetails/${id}`}>
        <Card style={{ width: "18rem", margin: "40px" }}>
          <Card.Img variant="top" src={posterUrl} />
          {showit && (
            <Card.Body>
              <Card.Title style={{ color: "#8E1E19" }}>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
              <Button variant="primary" onClick={() => sayHi(title)}>
                View More
              </Button>
            </Card.Body>
          )}
          <ReactStars
            count={5}
            value={rating}
            edit={false}
            size={24}
            activeColor="#ffd700"
          />
          ,
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;

MovieCard.defaultProps = {
  desc: "No Description",
};

MovieCard.propTypes = {
  sayHi: PropTypes.func,
};
