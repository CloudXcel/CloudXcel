import React from 'react';
import { Container, Row, Col } from "reactstrap";
import icon1 from '../assets/images/icons/service4.png';
import icon2 from '../assets/images/icons/service5.png';
import icon3 from '../assets/images/icons/service6.png';
import icon4 from '../assets/images/icons/service7.png';
import icon5 from '../assets/images/icons/service8.png';
import icon6 from '../assets/images/icons/service9.png';
import Image from 'next/image'

const Service = () => {
  const services = [
    { title : "Data Enginner", 
    desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: icon1, 
  },
    { title : "Data Analytics", 
    desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: icon2, 
  },
    { title : "Lorem Ipsum", 
    desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: icon3, 
  },
    { title : "Lorem Ipsum", 
    desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: icon4, 
  },
    { title : "Lorem Ipsum", 
    desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: icon5, 
  },
    { title : "Lorem Ipsum", 
    desc : "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: icon6, 
  },
  ]
  
  return (
    <section className="section" id="service" >
      <div className='container-fluid'>
        <div className=" row justify-content-center">
          <div className='col mb-10'>
            <div className="title text-center mb-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-2"><span className="text-info">Services</span></p>
              <h1 className="title text-center mb-3 font-weight-bold text-dark">Our Services</h1>
              <p className="text-dark-bold">Lorem Ipsum e the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center '>
        {
            services.map((service, key) =>
              <div className='col-12 col-md-6 col-lg-4  shadow-sm p-3 bg-body rounded' key={key}>
                <div className='text-center'>
                  <div className="mb-5">
                      <i className={service.ic}></i>
                  </div>
                  <Image src={service.icon} alt="service-image"/>
                  <h5 className="text-dark text-center font-weight-normal pt-1 mb-4">{service.title}</h5>
                  <p className="text-muted mb-4">{service.desc}</p>
                  <a className='btn btn-outline-info'>Explore</a>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Service;