import React from 'react';
import bestDeal from '../../../images/Banner/great-deal.png'

const BestDeal = () => {
    return (
        <div className='row my-4 bg-secondary p-2 container mx-auto'>
            <div className="col-lg-8 col-md-6 col-sm-12">
                <h2 className='text-center'>Save Time! Get the Best Deal</h2>
                <form class="row g-3">
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
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Submit Requirements</button>
                    </div>
                </form>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
                <img className='img-fluid' src={bestDeal} alt="Best Deal" />
            </div>

        </div>
    );
};

export default BestDeal;