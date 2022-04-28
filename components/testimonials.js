import React from 'react'
import boost from '../assets/images/boost-1-1.png'
import Image from 'next/image'
import { IoIosCheckmarkCircle } from 'react-icons/io';
const testimonials = () => {
  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col col-lg-6' >
            <div className="mt-5">
              <Image src={boost} alt="banner" />
            </div>
          </div>
          <div className='col  mt-5 mt-lg-10' >
            <div className="mt-5 ">
              <h4 className="mb-4 font-weight-bold line-height-4">Boost your agencies by choosing Ninja Developers</h4>
              <p className="text-muted mb-4 pb-2"> lectronic typesetting, remaining essentially unchanged.</p>
              <ol className="list-group list-group-flush">
                <li className="list-group-item d-flex  align-items-start">
                <i className="bi bi-arrow-return-right" ></i>
                  <samp className='ms-4'>Unlimited design possibility</samp>
                </li>
                <li className="list-group-item d-flex  align-items-start">
                <i className="bi bi-arrow-return-right" ></i>
                  <samp className='ms-4'>Unlimited design possibility</samp>
                </li>
                <li className="list-group-item d-flex  align-items-start">
                <i className="bi bi-arrow-return-right" ></i>
                  <samp className='ms-4'>Unlimited design possibility</samp>
                </li>
                
                
              </ol>
              <div>
              
              </div>
            </div>
           
          </div>
      </div>
      </div>
    </section>
  )
}

export default testimonials