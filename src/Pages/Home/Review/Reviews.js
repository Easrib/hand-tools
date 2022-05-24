import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading';
import SingleReview from './SingleReview';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch("reviews.json").then(res => res.json()))
    console.log("jquery", reviews);

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mb-4'>
            <div className='mt-6 text-center'>
                <h3 className='text-primary font-bold '>Reviews</h3>
                <h2 >What Our Customer Says</h2>
            </div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;