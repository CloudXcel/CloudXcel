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
            <div className="mt-5 mt-lg-0">
              <Image src={boost} alt="banner" />
            </div>
          </div>
          <div className='col' >
            <div className='row justify-content-center'>
            <div className="pr-lg-5 ">
              <h4 className="mb-4 font-weight-bold line-height-4">Boost your agencies by choosing Ninja Developers</h4>
              <p className="text-muted mb-4 pb-2"> unknown printer took a galley It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              
              <div>
              <ol className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Cras justo odio
                  </div>
                  <span className="badge bg-primary rounded-pill">14</span>
                </li>
              </ol>
              </div>
            </div>
            </div>
          </div>
        
      </div>
      </div>
    </section>
  )
}

export default testimonials