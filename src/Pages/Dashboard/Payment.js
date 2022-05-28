import React from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L2FEbEmXyAwXFkUDphgahJPMS8vUiO1Gq29QLFXSMv7QntEb5lWmHDh07VkVQeaYQZwl7wHopWfithzlVyeJU6i002PDRct3i');

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;

    const { data: orderPayment, isLoading } = useQuery(['orderPayment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {orderPayment?.user}</p>
                    <h2 class="card-title">Please Pay for {orderPayment?.item}</h2>

                    <p>Please pay: ${orderPayment?.price * parseInt(orderPayment?.quantity)}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orderPayment={orderPayment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;