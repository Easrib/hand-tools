import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTools = ({ tool }) => {
    const { name, image, description, moq, stock, price, _id } = tool;
    const navigate = useNavigate();

    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="card max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="tools" class="rounded-xl" style={{ width: '200px', height: '200px' }} />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p><small>{description}</small></p>
                <p>MOQ: {moq}</p>
                <p>Stock: {stock}</p>
                <p>Price: {price}</p>
                <div class="card-actions">
                    <button onClick={() => handlePurchase(_id)} className='btn btn-primary w-100'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTools;