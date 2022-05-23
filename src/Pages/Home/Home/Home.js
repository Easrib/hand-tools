import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummery from '../BusinessSummery/BusinessSummery';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Footer></Footer>
        </div>
    );
};

export default Home;