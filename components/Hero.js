import React from 'react';
import banner from '../assets/images/banner.png'
import Image from 'next/image'
const Hero = () => {
  return (
    <section className="section position-relative">
      <div className='container'>
        <div className="row align-items-center">
          <div className='col' lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">Lorem Ipsum</p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Simply dummy text of the printing <span className="text-primary font-weight-medium">Name</span></h1>
              <p className="text-muted mb-4 pb-2">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <a href="#service" className="btn btn-outline-dark">
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </a>
            </div>
          </div>
          <div className='col' lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image src={banner} alt="banner" className="img-fluid mx-auto d-block"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;