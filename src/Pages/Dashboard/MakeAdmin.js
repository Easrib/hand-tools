import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';
import ProfilesRow from './ProfilesRow';

const MakeAdmin = () => {
    const { data: profiles, isLoading, refetch } = useQuery('allProfile', () => fetch('http://localhost:5000/profile', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl text-primary text-center my-3'>All Users</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            profiles.map((profile, index) => <ProfilesRow
                                key={profile._id}
                                profile={profile}
                                index={index}
                                refetch={refetch}
                            ></ProfilesRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;