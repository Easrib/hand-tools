import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    const handleProfile = event => {
        event.preventDefault();
        const addProfile = {
            profileName: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
            education: event.target.education.value,
            location: event.target.location.value,
            linkedIn: event.target.linkedin.value
        }
        const url = `http://localhost:5000/profile/${user.email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProfile)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
            })
    }

    return (
        <div>
            <h2 className='text-2xl text-primary text-center my-3'>My Profile</h2>
            <form onSubmit={handleProfile} className='grid grid-cols-1 gap-2 mt-2 justify-items-center'>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Your name</span>
                    </label>
                    <input type="text" value={user.displayName} class="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Your Email</span>
                    </label>
                    <input type="email" value={user.email} class="input input-bordered w-full max-w-xs" disabled />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Your Education</span>
                    </label>
                    <input type="text" name='education' placeholder='Write your education' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Your Location</span>
                    </label>
                    <input type="text" name='location' placeholder='Write your location' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">Phone Number</span>
                    </label>
                    <input type="text" name='phone' placeholder='Write your phone number' class="input input-bordered w-full max-w-xs" />
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span className="label-text text-lg">LinkedIn</span>
                    </label>
                    <input type="text" name='linkedin' placeholder='Write your LinkedIn profile link' class="input input-bordered w-full max-w-xs" />
                </div>
                <input className='btn w-full max-w-xs' value="Submit" type="submit" />
            </form>
        </div>
    );
};

export default MyProfile;