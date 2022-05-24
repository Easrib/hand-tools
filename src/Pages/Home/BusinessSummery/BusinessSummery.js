import React from 'react';
import { CashCoin, ChatHeartFill, FilePerson, Tools } from 'react-bootstrap-icons';

const BusinessSummery = () => {
    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-2 text-center">
            <div className="col">
                <div className="card">
                    <span className='fs-1'><FilePerson /></span>
                    <div className="card-body">
                        <h2 className="card-title">250+</h2>
                        <p className="card-text"><small>Customer believe on us</small></p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <span className='fs-1'><CashCoin /></span>
                    <div className="card-body">
                        <h2 className="card-title">175M+</h2>
                        <p className="card-text"><small>Revenue we are generating</small></p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <span className='fs-1'><ChatHeartFill /></span>
                    <div className="card-body">
                        <h2 className="card-title">46K+</h2>
                        <p className="card-text"><small>Reviews from Customers</small></p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <span className='fs-1'><Tools /></span>
                    <div className="card-body">
                        <h2 className="card-title">69+</h2>
                        <p className="card-text"><small>Essential tools we are producing</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessSummery;