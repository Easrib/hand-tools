import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='bg-dark p-4 mx-auto text-white text-center mt-2'>
            <p> All rights reserved by &copy; Hand Tools || {year} </p>
            <p><small>Crafted with <span className='text-danger'>&hearts;</span> by Sharik</small></p>
        </div>

    );
};

export default Footer;