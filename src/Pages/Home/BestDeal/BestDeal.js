import React from 'react';
import bestDeal from '../../../images/Banner/great-deal.png'

const BestDeal = () => {
    return (
        <div class="hero min-h-[80%] bg-base-200 mb-3">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={bestDeal} class="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='lg:mr-11'>
                    <h2 className='text-3xl'>Save Time! Get the Best Deal</h2>
                    <form class="row g-3 mx-auto">
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder='Your Email' />
                        </div>
                        <div class="col-md-6">
                            <label for="inputName" class="form-label">Name</label>
                            <input type="text" class="form-control" id="inputName" placeholder='Your name' />
                        </div>
                        <div class="col-12">
                            <label for="inputRequirements" class="form-label">Requirements</label>
                            <input type="text" class="form-control" id="inputRequirements" placeholder="Enter your requirements" />
                        </div>
                        <div class="col-12 mt-3">
                            <button type="submit" class="btn btn-primary">Submit Requirements</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BestDeal;