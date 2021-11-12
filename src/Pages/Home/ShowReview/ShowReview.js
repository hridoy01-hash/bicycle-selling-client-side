import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating'




const ShowReview = (props) => {
    const {name,description,rating} = props.review

    
    return (
        <div>
           <Card style={{backgroundColor:'#A0C3C3'}} className="text-center  h-100">
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
    
       <p style={{color:'green',fontSize:'10px'}}>
       <Rating
        
        initialRating={rating}
        emptySymbol="fa fa-star-o fa-2x"
        fullSymbol="fa fa-star fa-2x"
       readonly
           >
        </Rating>
       </p>
        
    
  </Card.Body>
</Card>

            
        </div>
    );
};

export default ShowReview;