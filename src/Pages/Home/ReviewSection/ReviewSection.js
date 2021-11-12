import React,{useState,useEffect} from 'react';
import { Row,Container} from 'react-bootstrap';
import ShowReview from '../ShowReview/ShowReview';

const ReviewSection = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{

        fetch('http://localhost:5000/review')
        .then(res=>res.json())
        .then(result => setReviews(result))

    },[])
    return (
        <div className="text-center mt-5">
        
        
            <Container>
            <Row xs={1} md={3} className="g-4">
            {
             reviews.map(review=><ShowReview review={review} key={review._id}></ShowReview>)
         }

           </Row>
           </Container>

        </div>
    );
};

export default ReviewSection;