import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth);
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        {user ? <>
            <li><p className='text-primary'>{user.displayName}</p></li>
            <li><button onClick={handleSignout} className="btn btn-active btn-ghost">Sign Out</button></li>
        </> : <li><Link to='/login'>Log in</Link></li>}
    </>
    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">Hand Tools</a>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //     <Container className='text-primary'>
        //         <Navbar.Brand href="home#home">Hand Tools</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link as={Link} to='/purchase'>Purchase</Nav.Link>
        //                 <Nav.Link href="#pricing">Pricing</Nav.Link>
        //             </Nav>
        //             <Nav>
        //                 <Nav.Link href="#deets">More deets</Nav.Link>
        //                 {
        //                     user
        //                         ?
        //                         <>
        //                             <p className='my-auto me-2'>{user.displayName}</p>
        //                             <button className='btn btn-danger' onClick={() => handleSignout()}>Sign Out</button>
        //                         </>
        //                         :
        //                         <Nav.Link as={Link} to='/login'>Login</Nav.Link>
        //                 }
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
};

export default Header;