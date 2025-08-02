import React from 'react';
import logoFooter from '../../assets/Image/logo-footer.png'
import Navbar from '../Header/Navbar';
import { Facebook, Youtube, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
const Footer = () => {

   const links = <>
   <Link to='/'> <li>Home</li></Link>
   <Link to='/mybookings'> <li className='mx-10'>My-Bookings</li></Link>
    <Link to='blogs'> <li className='mr-10'>Blogs</li></Link>
    
    
    <li>Contact Us</li>
    </>


  return (
    <footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10">

      <div className='flex gap-3'>
        <img src={logoFooter} alt="" />
        <h1 className='text-white'>Law.BD</h1>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          {links}
        </ul>
      </div>
      <div className="flex gap-4">
        <div className="bg-blue-600 p-2 rounded-full">
          <a href="https://web.facebook.com/atiq.asef.3"><Facebook color="white" size={32} /></a>
        </div>
        <div className="bg-red-600 p-2 rounded-full">
          <a href="https://web.facebook.com/atiq.asef.3"><Youtube color="white" size={32} /></a>
        </div>
        <div className="bg-blue-600 p-2 rounded-full">
          <a href="https://www.linkedin.com/feed/"><Linkedin color="white" size={32} /></a>
        </div>
      </div>


    </footer>
  );
};

export default Footer;