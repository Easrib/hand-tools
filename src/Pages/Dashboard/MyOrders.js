import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import ConfirmDeleteModal from './ConfirmDeleteModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [deletingOrder, setDeletingOrder] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        navigate('/home')
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                    }
                    return res.json()
                })
                .then(data => setOrders(data))
        }
    }, [user, deletingOrder])

    return (
        <div>
            <h2 className='text-2xl text-primary text-center my-3'>My Orders</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{user.displayName}</td>
                                    <td>{order.item}</td>
                                    <td>{order.quantity}</td>
                                    <td>{order.quantity * order.price}</td>
                                    <td>{(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>pay</button></Link>}
                                        {(order.price && order.paid) && <div>
                                            <p><span className='text-success'>Paid</span></p>
                                            <p>Transaction id: <span className='text-success'>{order.transactionId}</span></p>
                                        </div>}
                                    </td>
                                    <td>{(order.price && !order.paid) && <label for="delete-confirm-modal"
                                        className='btn btn-xs btn-success'
                                        onClick={() => setDeletingOrder(order)}>Cancel</label>
                                    }
                                        {(order.price && order.paid) && <div>
                                            <p><span className='text-success'>Cancel</span></p>
                                        </div>}
                                    </td>
                                    {deletingOrder && <ConfirmDeleteModal
                                        deletingOrder={deletingOrder}
                                        setDeletingOrder={setDeletingOrder}
                                        order={order}></ConfirmDeleteModal>}
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;