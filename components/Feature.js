import React from 'react';
import icon1 from '../assets/images/icons/service1.png'
import icon2 from '../assets/images/icons/service2.png'
import icon3 from '../assets/images/icons/service3.png'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from 'next/image'

const Feature = () => {

    const services = [
        { title : "Lorem Ipsum", 
          desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          icon:icon1, 
        },
        { title : "Lorem Ipsum", 
          desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          icon:icon2, 
        },
        { title : "Lorem Ipsum", 
          desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
          icon:icon3,
        },
    
      ]

  return (
    <section className="section" id="feature">
      <div className='container-fluid'>
        <div className="row justify-content-center">
          <div className='col'>
            <div className="title text-center mb-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-2">Ideal solutions for you</p>
              <h1 className="title text-center mb-3 font-weight-bold text-dark">Go beyond ultimate features</h1>
              <p className="text-muted">Lorem Ipsum has been the industry's standard  scrambled it to make a type specimen book</p>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='row justify-content-center'>
          {
            services.map((service, key) =>
              <div className='col-12 col-md-3 col-lg-3' key={key}>
                <div className='text-center'>
                  <div className="mb-5">
                      <i className={service.ic}></i>
                  </div>
                  <Image src={service.icon} alt="service-image"/>
                  <h5 className="text-dark text-center font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                </div>
              </div>
            )
          }
         </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;