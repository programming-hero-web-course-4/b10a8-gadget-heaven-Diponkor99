import React from 'react';
import { BsHeartFill } from "react-icons/bs";
import { NavLink, useLocation } from 'react-router-dom';
import Banner from '../Home/Banner';
import bannerImg from '../../assets/banner.jpg'
import '../Navbar/Navbar.css'
const Navbar = () => {
       
    const location=useLocation()
    const locationPath=location.pathname
    // console.log(locationPath)

    const pathlocation = locationPath === '/' ? 'bg-purple-500 text-white p-3 rounded-xl pb-20 md:pb-50' : '';
    return (
<section className=''>
<div  className={ pathlocation}>
            
            <div className="md:flex justify-around items-center p-2 text-center md:text-start">
  <div className=" flex-1/3">
    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
  </div>

<div className='flex flex-1/3 justify-between'>
<div className='gap-3 flex items-center'>
    <NavLink to='./'>Home</NavLink>
    <NavLink to='./statistics'>Statistics</NavLink>
    <NavLink to='./Dashboard'>Dashboard</NavLink>
  </div>
 
  <section className='flex gap-2 items-center'>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item">10</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
        <div className="card-body">
          <span className="text-lg font-bold">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
  
  </div>

  <div>
  <div className="indicator bg-img-">
  <span className="indicator-item badge ">12</span>
 <h1 className='text-2xl hover:bg-neutral-300 p-2 indicator rounded-full'> <BsHeartFill className='text-pink-400' /></h1>
</div>
  </div>
  </section>
</div>
</div>
       {
        locationPath==='/' ?  <Banner></Banner>:" "
       }
        </div>
       <div >
       {
             locationPath==='/' ? <div className='w-3/5 md:w-2/5 mx-auto p-3 md:p-5 border-2  border-amber-50 backdrop-blur-2xl rounded-xl  -mt-20 md:-mt-40'><img src={bannerImg} className='mx-auto  rounded-xl ' alt="bannerImg" /></div>:''
        }
       </div>

</section>
    );
};

export default Navbar;