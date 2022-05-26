import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';

const AddReview = () => {
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
                    const review = {
                        name: data.name,
                        feedback: data.feedback,
                        img: img,
                        ratings: data.ratings,
                        town: data.town
                    }
                }
            })
    }

    return (
        <div>
            <h2 className='text-2xl text-primary text-center my-3'>Add Review</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 gap-2 mt-2 justify-items-center'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Your name</span>
                    </label>
                    <input {...register("name")} type="text" value={user.displayName} class="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Your Review</span>
                    </label>
                    <input {...register("feedback")} type="text" placeholder='Write your review' name='feedback' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Pick your ratings</span>
                    </label>
                    <select {...register("ratings")} class="select select-bordered">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Your Location</span>
                    </label>
                    <input {...register("town")} type="text" name='town' placeholder='Write your location' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Upload your Image</span>
                    </label>
                    <input {...register("image")} type="file" placeholder='Write your phone number' class="input input-bordered w-full max-w-xs" />
                </div>
                <input className='btn w-full max-w-xs' value="Submit" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;