import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Baner from '../Baner/Baner';
import LatestNews from '../LatestNews/LatestNews';
import MidleBaner from '../MidleBaner/MidleBaner';
import NewsLetter from '../NewsLetter/NewsLetter';
import ReviewSection from '../ReviewSection/ReviewSection';
import Services from '../Services/Services';
import Header from '../../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Baner></Baner>
            <Services></Services>
            <LatestNews></LatestNews>
            <ReviewSection></ReviewSection>
            <MidleBaner></MidleBaner>
            <NewsLetter></NewsLetter>
            <Footer></Footer>
        </div>
    );
};

export default Home;