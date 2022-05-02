import React from 'react'
import banner from '../assets/images/cta-2-1.png'
import Image from 'next/image'
const customer = () => {
  return (
    <section className="section position-relativ light" id="customer">
    <div className='container d-flex justify-content-center'>
      <div className="row align-items-center">
        <div className='col-12 col-md-6 col-lg-6 ms-4'>
          <div className="pr-lg-5">
            <p className="text-bold blockquote-footer lead font-weight-bold f-10 mb-3">Customer Support</p>
            <h1 className="mb-4 font-weight-normal line-height-1_4">Free Customer Support to ensure what you like to expect</h1>
            <p className="text-start font-weight-normal mt-4 pb-2">We offer a risk-free trial period of up to two weeks. You will only have to pay if you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues on our dime period customers.</p>
            <p className="text-muted mt-2 pb-2">If you are happy with the developer and wish to continue. If you are unsatisfied, we’ll refund payment or fix issues</p>
            <a href="#service" className="btn btn-outline-dark">
              Find Out How <span className="ml-2 right-icon">&#8594;</span>
            </a>
          </div>
        </div>
        <div className='col'>
          <div className="mt-5 mt-lg-0">
            <Image src={banner} alt="banner" className="img-fluid mx-auto d-block"/>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default customer