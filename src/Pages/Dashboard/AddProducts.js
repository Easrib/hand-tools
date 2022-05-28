import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProducts = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = '29c463e9cd48c287cdd0fe303fb95c81';
    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const tools = {
                        name: data.itemName,
                        description: data.description,
                        image: img,
                        moq: data.moq,
                        stock: data.stock,
                        price: data.price
                    }
                    fetch('https://arcane-cove-12898.herokuapp.com/purchase', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(tools)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast('Product added successfully')
                                reset()
                            }
                            else {
                                toast.error('Failed to add Product')
                            }
                        })
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl text-primary text-center my-3'>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2 mt-2 justify-items-center'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Product name</span>
                    </label>
                    <input {...register("itemName")} type="text" placeholder='Write product name' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Product Description</span>
                    </label>
                    <input {...register("description")} type="text" placeholder='Write product description' name='description' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">MOQ</span>
                    </label>
                    <input {...register("moq")} type="number" name='town' placeholder='Write minimum order quantity' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Stock Quantity</span>
                    </label>
                    <input {...register("stock")} type="number" name='stock' placeholder='Write stock quantity' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Unit Price</span>
                    </label>
                    <input {...register("price")} type="number" name='price' placeholder='Write unit price' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Upload your Image</span>
                    </label>
                    <input {...register("image")} type="file" placeholder='Upload your image' class="input input-bordered w-full max-w-xs" />
                </div>
                <input className='btn w-full max-w-xs' value="Add Product" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;