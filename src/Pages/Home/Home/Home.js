import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BestDeal from '../BestDeal/BestDeal';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Reviews from '../Review/Reviews';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <BestDeal></BestDeal>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;