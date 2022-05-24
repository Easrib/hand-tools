import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();;



    if (loading || gloading) {
        return <Loading></Loading>;
    }

    let from = location.state?.from?.pathname || "/";
    if (guser || user) {
        navigate(from, { replace: true });
    }
    let signInError;

    if (error || gerror) {
        signInError = <p className='text-danger'><small>{error?.message || gerror?.message}</small></p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }
    return (
        <div className='d-flex h-100 my-4 justify-content-center align-items-center'>
            <div className="card w-50">
                <div className="card-body">
                    <h2 className="card-title text-center font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                        <input className='btn btn-primary d-block mx-auto w-50 my-2' value="Login" type="submit" />
                    </form>
                    <p className='text-center'><small>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create a new account.</Link></small></p>
                    <div className='d-flex align-items-center'>
                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                        <p className='p-2 mt-2 px-2 '>Or</p>
                        <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                    </div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-primary d-block mx-auto w-50 ">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;