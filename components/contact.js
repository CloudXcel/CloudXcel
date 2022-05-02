import React, { useState } from 'react'
import SectionHeading from './section-heading'
const Contact = () => {
  
  const [email, setEmail] = useState("");
  const handleContactFormSubmit = async(e) => {
    e.preventDefault()
    // console.log(email)
   
  }
            
  return (
    <div  className='section bg-dark'id='contact' >
        <div className='container'>
            <div className='row justify-content-center text-center'>
                <SectionHeading 
                 title="Get Connected"
                 description="Build an incredible workplace and grow your business with Gustos all-in-one platform with amazing contents."
                 className="text-white"
                 />
                <form onSubmit={handleContactFormSubmit}>
                    <div className="text-white mb-3">
                        
                        <input
                          type="email"
                          placeholder='Email'
                          name="email"
                          value={email}
                          className="rounded"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          aria-describedby="emailHelp"/>
                   </div>
                    <button type="submit" className="btn btn-outline-light mb-3">Submit</button>
                    
                </form>
            </div>
            </div>
        
    </div>
  )
}

export default Contact