import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTools = ({ tool }) => {
    const { name, image, description, moq, stock, price, _id } = tool;
    const navigate = useNavigate();

    const handlePurchase = id => {
        navigate(`/purchase/${id}`)
    }
    return (
        <div class="col p-4">
            <div class="card h-100">
                <img src={image} className="card-img-top mt-2 mx-auto" style={{ width: '200px', height: '200px' }} alt="..." />
                <div class="card-body">
                    <h4 class="card-title">{name}</h4>
                    <p class="card-text"><small>{description}</small></p>
                    <p>MOQ: {moq}</p>
                    <p>Stock: {stock}</p>
                    <p>Price: {price}</p>
                </div>
                <div class="card-footer">
                    <button onClick={() => handlePurchase(_id)} className='btn btn-primary w-100'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleTools;