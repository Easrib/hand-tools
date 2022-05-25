import React from 'react';
import { CashCoin, ChatHeartFill, FilePerson, Tools } from 'react-bootstrap-icons';

const BusinessSummery = () => {
    return (
        <>
            <div className='mt-6 text-center'>
                <h2 className='text-primary font-bold text-2xl '>Business Summery</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center my-4'>
                <div class="stats shadow">
                    <div class="stat text-center">
                        <div class="stat-title mx-auto text-7xl"><FilePerson /></div>
                        <div class="stat-value">250+</div>
                        <div class="stat-desc"><span className='text-blue-600 text-xl'>Customer believe on us</span></div>
                    </div>
                </div>
                <div class="stats shadow">
                    <div class="stat  text-center">
                        <div class="stat-title mx-auto text-7xl"><CashCoin /></div>
                        <div class="stat-value">175M+</div>
                        <div class="stat-desc"><span className='text-blue-600 text-xl'>Revenue we are generating</span></div>
                    </div>
                </div>
                <div class="stats shadow">
                    <div class="stat text-center">
                        <div class="stat-title mx-auto text-7xl"><ChatHeartFill /></div>
                        <div class="stat-value">46K+</div>
                        <div class="stat-desc"><span className='text-blue-600 text-xl'>Reviews from Customers</span></div>
                    </div>
                </div>
                <div class="stats shadow">
                    <div class="stat text-center">
                        <div class="stat-title mx-auto text-7xl"><Tools /></div>
                        <div class="stat-value">69+</div>
                        <div class="stat-desc"><span className='text-blue-600 text-xl'>Essential tools we produce</span></div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BusinessSummery;