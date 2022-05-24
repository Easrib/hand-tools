import React from 'react';
import Banner from '../Banner/Banner';
import BestDeal from '../BestDeal/BestDeal';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Reviews from '../Review/Reviews';
import Subscribe from '../Subscribe/Subscribe';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <BestDeal></BestDeal>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;