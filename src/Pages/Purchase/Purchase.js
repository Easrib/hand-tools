import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init'
import { toast } from 'react-toastify';


const Purchase = () => {
    const [disable, setDisable] = useState(false)
    const { id } = useParams();
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm({ mode: "onChange" });

    const { data: purchase, isLoading } = useQuery('tools', () => fetch(`http://localhost:5000/purchase/${id}`).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        const order = {
            item: purchase.name,
            user: user.displayName,
            email: user.email,
            phone: data.phone,
            quantity: data.quantity,
            address: data.address,
            price: purchase.price
        }
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success('Order added successfully')
                    reset()
                }
                else {
                    toast.error('Failed to added order')
                }
            })
    }
    const handleRefresh = event => {
        event.preventDefault()
        const qty = event.target.value
        if (qty < purchase.moq || qty > purchase.stock) {
            setDisable(true)
        }
        else {
            setDisable(false)
        }
    }



    return (
        <div className='my-4'>
            <form onSubmit={handleSubmit(onSubmit)} onChange={handleRefresh} className='grid grid-cols-1 gap-2 mt-2 justify-items-center'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Item Name</span>
                    </label>
                    <input type="text" value={purchase.name} className="input input-bordered w-full max-w-xs" disabled />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">User Name</span>
                    </label>
                    <input type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs" disabled />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">User Email</span>
                    </label>
                    <input type="email" value={user?.email} className="input input-bordered w-full max-w-xs" disabled />

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Address</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("address")}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Phone Number</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full max-w-xs"
                        {...register("phone")}
                    />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Stock</span>
                    </label>
                    <input type="number" value={purchase?.stock} className="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">MOQ</span>
                    </label>
                    <input type="number" value={purchase?.moq} className="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Unit Price</span>
                    </label>
                    <input
                        type="number"
                        value={purchase?.price}
                        className="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text text-lg">Order Quantity</span>
                    </label>
                    <input
                        type="number"
                        defaultValue={purchase.moq}
                        className="input input-bordered w-full max-w-xs"
                        id='qty'
                        {...register("quantity", {
                            required: {
                                value: true,
                                message: 'Order quantity is required'
                            },
                            max: {
                                value: `${purchase.stock}`,
                                message: 'You Can not order more than stock quantity'
                            },
                            min: {
                                value: `${purchase.moq}`,
                                message: 'You Can not order less than MOQ'
                            }
                        })} />
                    <label className="label">
                        {errors.quantity?.type === 'required' && <>
                            <span className="label-text-alt text-red-400">{errors.quantity?.message}</span>
                        </>}
                        {errors.quantity?.type === 'max' && <span className="label-text-alt text-red-400">{errors.quantity?.message}</span>}
                        {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-400">{errors.quantity?.message}</span>}

                    </label>
                </div>
                {/* <div className="row mb-3">
                    <label for="total" className="col-sm-2 col-form-label">Total Amount</label>
                    <div className="col-sm-10">
                        <input type="number" name='total' className="form-control" id="total" />
                    </div>
                </div> */}
                <input className='btn w-full max-w-xs' value="Buy" type="submit" disabled={disable} />
            </form >
        </div >
    );
};

export default Purchase;