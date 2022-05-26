import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const imageStorageKey = '49c7b2acd53a2afd47bb3d25eda3f33f';

    const handleReview = async data => {
        const image = data.image[0];
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=YOUR_CLIENT_API_KEY`

    }

    const handleRefresh = event => {
        event.preventDefault();
    }
    return (
        <div>
            <h2 className='text-2xl text-primary text-center my-3'>Add Review</h2>
            <form onSubmit={handleReview} onChange={handleRefresh} className='grid grid-cols-1 gap-2 mt-2 justify-items-center'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Your name</span>
                    </label>
                    <input type="text" value={user.displayName} class="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Your Review</span>
                    </label>
                    <input type="text" placeholder='Write your review' name='feedback' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Pick your ratings</span>
                    </label>
                    <select class="select select-bordered">
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
                    <input type="text" name='town' placeholder='Write your location' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Upload your Image</span>
                    </label>
                    <input type="file" name='phone' placeholder='Write your phone number' class="input input-bordered w-full max-w-xs" />
                </div>
                <input className='btn w-full max-w-xs' value="Submit" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;