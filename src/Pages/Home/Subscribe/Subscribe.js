import React from 'react';
import { Form } from 'react-bootstrap';
import subscribe from '../../../images/Banner/subscribe.png'

const Subscribe = () => {
    return (
        <div id='subscribe' className='row my-2 '>
            <div className="col-lg-6 img-fluid">
                <img src={subscribe} alt="" />
            </div>
            <div className="col-lg-6 text-center my-auto">
                <h2>Want to get the latest products catalog and Price? Please subscribe</h2>
                <Form>
                    <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <button className='btn btn-primary'> Submit</button>

                </Form>
            </div>
        </div>
    );
};

export default Subscribe;