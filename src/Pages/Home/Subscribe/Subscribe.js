import React from 'react';
// import { Form } from 'react-bootstrap';
import subscribe from '../../../images/Banner/subscribe.png'

const Subscribe = () => {
    return (
        <div class="hero min-h-[80%] bg-slate-100">
            <div class="hero-content flex-col lg:flex-row">
                <div class="text-center lg:text-left lg:mr-[80px]">
                    <img src={subscribe} alt="" />
                    <p class="py-6">Want to get the latest products catalog and Price? Please subscribe</p>
                    <h1 class="text-5xl font-bold">Subscribe now!</h1>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div id='subscribe' className='row my-2 '>
        //     <div className="col-lg-6 img-fluid">
        //         <img src={subscribe} alt="" />
        //     </div>
        //     <div className="col-lg-6 text-center my-auto">
        //         <h2></h2>
        //         {/* <Form>
        //             <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
        //                 <Form.Control type="email" placeholder="Enter email" />
        //             </Form.Group>
        //             <button className='btn btn-primary'> Submit</button>

        //         </Form> */}
        //     </div>
        // </div>
    );
};

export default Subscribe;