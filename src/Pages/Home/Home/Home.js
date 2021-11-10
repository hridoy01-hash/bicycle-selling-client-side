import React from 'react';
import Baner from '../Baner/Baner';
import LatestNews from '../LatestNews/LatestNews';
import MidleBaner from '../MidleBaner/MidleBaner';
import NewsLetter from '../NewsLetter/NewsLetter';
import ReviewSection from '../ReviewSection/ReviewSection';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            
            <Baner></Baner>
            <Services></Services>
            <LatestNews></LatestNews>
            <ReviewSection></ReviewSection>
            <MidleBaner></MidleBaner>
            <NewsLetter></NewsLetter>
            
        </div>
    );
};

export default Home;