import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import bolg1 from '../../../images/blog1.jpg'
import bolg5 from '../../../images/blog6.jpg'
import bolg3 from '../../../images/blog3.jpg'

const LatestNews = () => {
    return (
        <div>
             <Container>
            <p className="text-center text-success mt-5 "><hr /></p>
           <h3 className="text-center text-muted mb-5"> <span className="fw-bold text-success" style={{fontSize:"30px",fontFamily:'cursive'}}><i className="fas fa-biking"></i> Latest News </span></h3>
           <div className="row row-cols-1 row-cols-md-3 g-4">
              
 <Fade left>
 <div className="col">
    <div className="card h-100">
    <img src={bolg1} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title fw-bold text-success">7 August 2021</p>
        <h5 className="text-dark">This is Fourth Post For XipBlog</h5>
        <p className="card-text text-muted">Africa interdum nunc massa. Velit. Nonummy penatibus luctus. Aliquam. Massa aptent senectus elementum taciti.</p>
        <button className="btn btn-success">READ MORE</button>
      </div>
    </div>
  </div>
   </Fade>
  <div className="col">
    <div className="card h-100">
    <img src={bolg5} style={{height:'238px'}} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title fw-bold text-success">27 November 2021</p>
        <h5 className="text-dark">This is Fourth Post For XipBlog</h5>
        <p className="card-text text-muted">Swizerland  interdum nunc massa. Velit. Nonummy penatibus luctus. Aliquam. Massa aptent senectus elementum taciti.</p>
        <button className="btn btn-success">READ MORE</button>
      </div>
    </div>
  </div>
  
  
  <Fade right>
  <div className="col">
    <div className="card h-100">
      <img src={bolg3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <p className="card-title fw-bold text-success">18 August 2021</p>
        <h5 className="text-dark">Etiam Processus Dynamicus</h5>
        <p className="card-text text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.</p>
        <button className="btn btn-success">READ MORE</button>
      </div>
    </div>
  </div>
  </Fade>
</div>
      
        </Container> 
        </div>
    );
};

export default LatestNews;