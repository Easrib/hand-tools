import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BestDeal from '../BestDeal/BestDeal';
import BusinessSummery from '../BusinessSummery/BusinessSummery';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <BestDeal></BestDeal>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;