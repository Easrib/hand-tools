import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (loading || gloading || updating) {
        return <Loading></Loading>;
    }

    if (user || guser) {
        navigate('/appointment')
    }
    let signInError;

    if (error || gerror || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gerror?.message || updateError?.message}</small></p>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('user update');
    }
    return (
        <div className='d-flex h-100 my-4 justify-content-center align-items-center'>
            <div className="card w-50">
                <div className="card-body">
                    <h2 className="card-title text-center font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Please type your name"
                                className="form-control form-control-lg"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-400">{errors.name?.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Please type your email"
                                className="form-control form-control-lg"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Please add an valid email address'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-400">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-400">{errors.email?.message}</span>}

                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Please type your password"
                                className="form-control form-control-lg"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-400">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-400">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input className='btn btn-primary d-block mx-auto w-50 my-2' value="Sign Up" type="submit" />
                    </form>
                    <p className='text-center'><small>Already Have an Account? <Link className='text-primary' to='/login'>Please Login.</Link></small></p>
                    <div className='d-flex align-items-center'>
                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                        <p className='p-2 mt-2 px-2 '>Or</p>
                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                    </div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-primary d-block mx-auto w-50">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;