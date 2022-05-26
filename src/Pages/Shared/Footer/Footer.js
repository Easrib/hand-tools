import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='p-4 mx-auto text-center mt-2 bg-slate-300'>
            <p> All rights reserved by &copy; Hand Tools || {year} </p>
            <p><small>Crafted with <span className='text-red-600 text-lg'>&hearts;</span> by Sharik</small></p>
        </div>
    );
};

export default Footer;