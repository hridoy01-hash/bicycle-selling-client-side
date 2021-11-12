import React from 'react';
import { Card,Button } from 'react-bootstrap';
import Rating from 'react-rating'




const ShowReview = (props) => {
    const {name,description,rating} = props.review

    
    return (
        <div>
           <Card className="text-center h-100">
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    <h5 className="text-center ">
        <Rating
            initialRating={rating}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-start"
            readonly>
        </Rating>
    </h5>
  </Card.Body>
</Card>

            
        </div>
    );
};

export default ShowReview;