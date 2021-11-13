import React,{useState,useEffect} from 'react';
import { Row,Container} from 'react-bootstrap';
import ShowReview from '../ShowReview/ShowReview';
import Fade from 'react-reveal/Fade';

const ReviewSection = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{

        fetch('https://peaceful-reef-33113.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(result => setReviews(result))

    },[])
    return (
        <div className="text-center mb-5">
        
        
            <Container>
            <p className="text-center text-success mt-5 "> <hr /></p>
            <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}>
               Our Client Says About Us</span></h3>
               <Fade bottom>
               <Row xs={1} md={3} className="g-4">
           
           {
            reviews.map(review=><ShowReview review={review} key={review._id}></ShowReview>)
          }
          </Row>
             </Fade>

           

           </Container>

        </div>
    );
};

export default ReviewSection;