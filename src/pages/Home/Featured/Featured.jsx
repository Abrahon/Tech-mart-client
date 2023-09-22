import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import  featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className='featured-item text-white pt-8 my-20'>
            <SectionTitle
            subHeading={"check it out"}
            heading={"Featured Item"}
            >

            </SectionTitle>

          <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-40  '>
          <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10'>
                <p>Aug 20, 2029</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut doloremque quam vel vero dolore qui delectus voluptatibus eum odit, similique nisi deleniti unde magnam eius corrupti voluptatem sequi illum dolorum!</p>
                <button className='btn btn-outline border-0 border-bottom-b-4'>Order Now</button>

            </div>
          </div>
        </div>
    );
};

export default Featured;