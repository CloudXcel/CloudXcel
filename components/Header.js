import React from 'react';
import logo from '../assets/images/logo/logo.svg'
import Image from 'next/image'
const Header = () => {
  

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light navbar-sticky bg-light">
      <div className="container">
        <div className='col'>
        <a class="navbar-brand" href="/">
          <Image src={logo} alt="logo" width="197" height="75" class="d-inline-block align-text-top"/>
        </a>
        </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse " id="navbarScroll">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#hero">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#feature">Feature</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#service">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                  </li>
                </ul>
          </div>
        
      </div>
    </nav>

  )
}

export default Header;
