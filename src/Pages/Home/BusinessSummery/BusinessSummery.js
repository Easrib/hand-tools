import React from 'react';
import { CashCoin, ChatHeartFill, FilePerson, Tools } from 'react-bootstrap-icons';

const BusinessSummery = () => {
    return (
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-2 text-center">
            <div class="col">
                <div class="card">
                    <span className='fs-1'><FilePerson /></span>
                    <div class="card-body">
                        <h2 class="card-title">250+</h2>
                        <p class="card-text"><small>Customer believe on us</small></p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <span className='fs-1'><CashCoin /></span>
                    <div class="card-body">
                        <h2 class="card-title">175M+</h2>
                        <p class="card-text"><small>Revenue we are generating</small></p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <span className='fs-1'><ChatHeartFill /></span>
                    <div class="card-body">
                        <h2 class="card-title">46K+</h2>
                        <p class="card-text"><small>Reviews from Customers</small></p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <span className='fs-1'><Tools /></span>
                    <div class="card-body">
                        <h2 class="card-title">69+</h2>
                        <p class="card-text"><small>Essential tools we are producing</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;