import React from 'react';
import { toast } from 'react-toastify';

const ConfirmDeleteModal = ({ deletingOrder, setDeletingOrder }) => {

    const { _id, item } = deletingOrder;

    const handleCancel = () => {
        fetch(`http://localhost:5000/order/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Item Deleted Succesfully')
                    setDeletingOrder(null);
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure you want to delete {item}</h3>
                    <div class="modal-action">
                        <button onClick={() => handleCancel()} class="btn btn-xs btn-error">Delete</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmDeleteModal;