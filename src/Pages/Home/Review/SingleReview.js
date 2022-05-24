import React from 'react';

const SingleReview = ({ review }) => {

    const { feedback, img, ratings, town, name } = review;
    return (
        <div class="col p-4">
            <div class="card h-100">
                <img src={img} className="card-img-top mt-2 rounded-circle mx-auto" style={{ width: '200px', height: '200px' }} alt="..." />
                <div class="card-body">
                    <p class="card-text"><small>{feedback}</small></p>
                    <p>Ratings: {ratings}</p>
                    <h4 class="card-title">{name}</h4>
                    <h5>{town}</h5>

                </div>
            </div>
        </div>
    );
};

export default SingleReview;