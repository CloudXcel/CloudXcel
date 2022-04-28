import React from 'react'
import Tabs, { TabPane } from 'rc-tabs';
import { rgba } from 'polished';
import quote from '../assets/images/icons/quote.png';
import uber from '../assets/images/logos/uber.png';
import google from '../assets/images/logos/google.png';
import paypal from '../assets/images/logos/paypal.png';
import microsoft from '../assets/images/logos/microsoft.png';
import dribbble from '../assets/images/logos/dribbble.png';
import Image from 'next/image'
const testimonials = () => {
    const data = [
        {
          id: 1,
          logo: uber,
          author: 'By Denny Albuz, Adviser of Paypal',
          quote: `“Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.”`,
        },
        {
          id: 2,
          logo: google,
          author: 'By Denny Albuz, Adviser of Paypal',
          quote: `“Qwilr Page we have made for them. Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a”`,
        },
        {
          id: 3,
          logo: paypal,
          author: 'By Denny Albuz, Adviser of Paypal',
          quote: `“Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.”`,
        },
        {
          id: 4,
          logo: microsoft,
          author: 'By Denny Albuz, Adviser of Paypal',
          quote: `“Qwilr Page we have made for them. Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a”`,
        },
        {
          id: 5,
          logo: dribbble,
          author: 'By Denny Albuz, Adviser of Paypal',
          quote: `“Whatever we create in Qwilr looks absolutely brilliant. It helps show our work in the best light, and is downright impressive when clients see a Qwilr Page we have made for them.”`,
        },
      ];
  return (
    <div className='section'>
        <div className='container'>
            <div className='row justify-content-center '>
               
                    <Tabs
                    animated={{ tabPane: true }}
                    tabPosition="bottom"
                    
                    >
                    
                        {data?.map((item) => (
                            <TabPane key={item.id} className='text-center' tab={<Image src={item.logo} alt="logo"  />}>
                                <div>
                                    
                                        <h5 className='card-title'>{item.quote}</h5>
                                        <p className='card-text'>{item.author}</p>
                                    </div>
                                    
                                
                            </TabPane>
                        ))}
                    
                    </Tabs>
                       
            </div>
        </div>
        </div>

  )
}

export default testimonials
// const styles = {
//     tabs: {
//       background: "#fff"
//     },
//     slide: {
//       padding: 15,
//       minHeight: 100,
//       color: "#fff"
//     },
//     slide1: {
//       backgroundColor: "#FEA900"
//     },
//     slide2: {
//       backgroundColor: "#B3DC4A"
//     },
//     slide3: {
//       backgroundColor: "#6AC0FF"
//     }
//   };