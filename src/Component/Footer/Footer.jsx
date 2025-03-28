import React from 'react';

const Footer = () => {
    return (
        <div>
           <footer className=" bg-base-300 text-base-content p-10 mt-5">
            <div className='text-center'>
                <h1 className='text-3xl font-bold my-4'>Gadget Heaven</h1>
                <p className='font-medium'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='divider'></div>
    <section className='footer sm:footer-horizontal justify-around'>
          
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Cookie Policy</a>
  </nav>
    </section>
</footer>
        </div>
    );
};

export default Footer;<h1>footer</h1>