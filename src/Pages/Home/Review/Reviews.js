import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../../Shared/Loading/Loading';
import SingleReview from './SingleReview';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => fetch("http://localhost:5000/review").then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='mb-4'>
            <div className='mt-6 text-center'>
                <h3 className='text-primary font-bold text-xl'>Reviews</h3>
                <h2 className='text-2xl'>What Our Customer Says</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center'>
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