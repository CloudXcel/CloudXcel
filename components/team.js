// import React from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import avatar1 from '../assets/images/team/member1.png';
// import avatar2 from '../assets/images/team/member2.png';
// import avatar3 from '../assets/images/team/member3.png';
// import avatar4 from '../assets/images/team/member4.png';
// import Image from 'next/image'
// import arrowRight from '../assets/images/icons/arrow-right.png';
// const data = [
//     {
//       id: 1,
//       avatar: avatar1,
//       name: 'Sampath Maddula',
//       designation: 'Chief Executive Officer',
//       socialLinks: [
//         {
//           name: 'twitter',
//           link: 'http://twitter.com',
//         },
//         {
//           name: 'github',
//           link: 'http://github.com',
//         },
//         {
//           name: 'dribbble',
//           link: 'http://dribbble.com',
//         },
//       ],
//     },
//     {
//       id: 2,
//       avatar: avatar2,
//       name: 'Sarah Jhonson',
//       designation: 'Product Manager',
//       socialLinks: [
//         {
//           name: 'twitter',
//           link: 'http://twitter.com',
//         },
//         {
//           name: 'dribbble',
//           link: 'http://dribbble.com',
//         },
//       ],
//     },
//     {
//       id: 3,
//       avatar: avatar3,
//       name: 'Syam Maddula',
//       designation: 'Chief Technology Officer',
//       socialLinks: [
//         {
//           name: 'twitter',
//           link: 'http://twitter.com',
//         },
//         {
//           name: 'github',
//           link: 'http://github.com',
//         },
//       ],
//     },
//     {
//       id: 4,
//       avatar: avatar4,
//       name: 'Amanda Jepson',
//       designation: 'Accountant',
//       socialLinks: [
//         {
//           name: 'twitter',
//           link: 'http://twitter.com',
//         },
//         {
//           name: 'github',
//           link: 'http://github.com',
//         },
//         {
//           name: 'dribbble',
//           link: 'http://dribbble.com',
//         },
//       ],
//     },
//     {
//       id: 5,
//       avatar: avatar1,
//       name: 'Aman Singh',
//       designation: 'Developer',
//       socialLinks: [
//         {
//           name: 'twitter',
//           link: 'http://twitter.com',
//         },
//         {
//           name: 'github',
//           link: 'http://github.com',
//         },
//         {
//           name: 'dribbble',
//           link: 'https://www.linkedin.com/in/myaccountlink/',
//         },
//       ],
//     },
//     {
//       id: 6,
//       avatar: avatar2,
//       name: 'Daisy Morgan',
//       designation: 'Lead developer',
//       socialLinks: [
//         {
//           name: 'twitter',
//           link: 'http://twitter.com',
//         },
//         {
//           name: 'dribbble',
//           link: 'http://dribbble.com',
//         },
//       ],
//     },
//     {
//       id: 7,
//       avatar: avatar3,
//       name: 'Ariyanna Hicks',
//       designation: 'Experience Designer',
//       socialLinks: [
//         {
//           name: 'twitter',
//           link: 'http://twitter.com',
//         },
//         {
//           name: 'github',
//           link: 'http://github.com',
//         },
//       ],
//     },
//     {
//       id: 8,
//       avatar: avatar4,
//       name: 'Yamilet Hooker',
//       designation: 'User interface designer',
//       socialLinks: [
//         {
//           name: 'twitter',
//           link: 'http://twitter.com',
//         },
//         {
//           name: 'github',
//           link: 'http://github.com',
//         },
//         {
//           name: 'dribbble',
//           link: 'http://dribbble.com',
//         },
//       ],
//     },
//   ];
  
// const team = () => {
//   return (
//     <section id='team'>
//         <div className='container-fluid'>
//         <div className='row justify-content-center mt-5 mt-b'>
//         <Swiper className="mySwiper mt-6 mb-5">
//         <SwiperSlide>{data?.map((item) =>{
//             <p>{item.id}</p>
        

//         })}</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//       </div>
//       </div>
//     </section>
//   )
// }

// export default team