import React from 'react';
import logo from '../../assets/Image/logo.png'
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
   <Link to='/'> <li>Home</li></Link>
   <Link to='/mybookings'> <li className='mx-10'>My-Bookings</li></Link>
    <Link to='blogs'> <li className='mr-10'>Blogs</li></Link>
    
    
    <li>Contact Us</li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
   <div className='flex gap-3 justify-center items-center'>
    <a href=""> <img src={logo} alt="" /></a>
    <a className='text-3xl' href="">Law.BD</a>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn py-6 px-10 bg-green-600 text-white rounded-xl text-lg">Contact Now</a>
  </div>
</div>
    );
};

export default Navbar;