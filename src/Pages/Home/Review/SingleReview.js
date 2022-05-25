import React from 'react';

const SingleReview = ({ review }) => {

    const { feedback, img, ratings, town, name } = review;
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl">
            <div class="avatar mx-auto my-5">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt="people" />
                </div>
            </div>
            <div class="card-body items-center text-center">
                <p><small>{feedback}</small></p>
                <p><span className='text-lg'>Ratings</span>: {ratings}</p>
                <h2 class="card-title">{name}</h2>
                <p>{town}</p>
            </div>
        </div>
    );
};

export default SingleReview;