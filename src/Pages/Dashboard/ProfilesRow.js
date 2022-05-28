import React from 'react';
import { toast } from 'react-toastify';

const ProfilesRow = ({ profile, index, refetch }) => {
    const { email, profileName, role } = profile;
    const makeAdmin = () => {
        fetch(`https://arcane-cove-12898.herokuapp.com/profile/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`)
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{profileName}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default ProfilesRow;