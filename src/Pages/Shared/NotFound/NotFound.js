import React from 'react';
import error from '../../../images/error/error.webp'

const NotFound = () => {
    return (
        <div >
            <img className='max-h-screen min-w-[100%]' src={error} alt="" />
        </div>
    );
};

export default NotFound;