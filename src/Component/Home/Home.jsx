import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import { NavLink } from 'react-router-dom';
import CardData from '../CardData/CardData';
import '../Home/Home.css'

const Home = () => {
    const [datas, setData]=useState([]);
    // console.log(datas)
    useEffect(()=>{
        fetch('../../../public/data.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])



    return (
        <div >
          <h1 className='text-center  font-bold text-3xl my-10'>Explore Cutting-Edge Gadgets</h1> 

          <section className='md:flex p-2 gap-5  '>
            <div className=' p-3  min-h-[400px]  my-5  text-center ' >
                <div className='rounded-2xl shadow-xl grid  p-10 md:w-[200px]'>
                <NavLink className='btn rounded-xl w-[130px] mx-auto bg-purple-200 my-1 py-2' to='/'>All Product</NavLink>
                <NavLink className='btn rounded-xl w-[130px] mx-auto bg-purple-200 my-1 py-2'  to='/Laptops'>Laptops</NavLink>
                <NavLink className='btn rounded-xl w-[130px] mx-auto bg-purple-200 my-1 py-2' to='/Phones'>Phones</NavLink>
                <NavLink className='btn rounded-xl w-[130px] mx-auto bg-purple-200 my-1 py-2' to='/Accessories'>Accessories</NavLink>
                <NavLink className='btn rounded-xl w-[130px] mx-auto bg-purple-200 my-1 py-2' to='/Smart Watches'>Smart Watches</NavLink>
                <NavLink className='btn rounded-xl w-[130px] mx-auto bg-purple-200 my-1 py-2' to='/MacBook'>MacBook</NavLink>
                <NavLink className='btn rounded-xl w-[130px] mx-auto bg-purple-200 my-1 py-2' to='/Iphone'>Iphone</NavLink>
             
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 flex-1 text-end gap-5 md:gap-10 '>
                {
                datas.map(data=><CardData key={data.product_id} data={data}></CardData>)
                }
            </div>
        </section> 
    
        </div>
    );
};

export default Home;<h1>Home</h1>