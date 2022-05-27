import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    }
    const menuItems = <>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        {user ? <>
            <li><p className='text-primary'>{user.displayName}</p></li>
            <li><button onClick={handleSignout} className="btn btn-active btn-ghost">Sign Out</button></li>
        </> : <li><Link to='/login'>Log in</Link></li>}
    </>
    return (
        <div className="navbar bg-slate-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/home' className="btn btn-ghost normal-case text-xl">Hand Tools</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div>
                <label for="myDashboard" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
        </div>
    );
};

export default Header;