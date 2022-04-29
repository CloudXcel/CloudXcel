import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import TeamMember from './cards/team-member';
import  { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import avatar1 from '../assets/images/team/member1.png';
// @ts-ignore
import avatar2 from '../assets/images/team/member2.png';
// @ts-ignore
import avatar3 from '../assets/images/team/member3.png';
// @ts-ignore
import avatar4 from '../assets/images/team/member4.png';
import SectionHeading from './section-heading';
import React from 'react';

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Sampath Maddula',
    designation: 'Chief Executive Officer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 2,
    avatar: avatar2,
    name: 'Sarah Jhonson',
    designation: 'Product Manager',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 3,
    avatar: avatar3,
    name: 'Syam Maddula',
    designation: 'Chief Technology Officer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 4,
    avatar: avatar4,
    name: 'Amanda Jepson',
    designation: 'Accountant',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 5,
    avatar: avatar1,
    name: 'Aman Singh',
    designation: 'Developer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'https://www.linkedin.com/in/myaccountlink/',
      },
    ],
  },
  {
    id: 6,
    avatar: avatar2,
    name: 'Daisy Morgan',
    designation: 'Lead developer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
  {
    id: 7,
    avatar: avatar3,
    name: 'Ariyanna Hicks',
    designation: 'Experience Designer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 8,
    avatar: avatar4,
    name: 'Yamilet Hooker',
    designation: 'User interface designer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://dribbble.com',
      },
    ],
  },
];

const team = () => {

  

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };
  return (
    <section id='team' sx={styles.section} className='section bg-light' >
     <div className='container'>
        <div className='row justify-content-center'>
        <SectionHeading
          sx={styles.heading}
          title="Meet our superheros"
          description="Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents."
        />
        <div className='col'>
        
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        breakpoints={breakpoints}
        >
        {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <TeamMember member={item} />
            </SwiperSlide>   
          ))}
      </Swiper>
      </div>
      </div>
      </div>
    </section>

  )
}
export default team
const styles = {
  section: {
    pt: [11],
    pb: [11, null, null, 12, null, 14],
  },
  heading: {
    p: {
      maxWidth: 500,
      m: '10px auto 0',
    },
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
