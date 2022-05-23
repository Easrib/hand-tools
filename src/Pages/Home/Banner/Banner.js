import React from 'react';
import banner1 from '../../../images/Banner/banner1.png'

const Banner = () => {
    return (
        <div>
            <img style={{height: '80vh'}} className='w-100' src={banner1} alt="home banner" />
        </div>
    );
};

export default Banner;