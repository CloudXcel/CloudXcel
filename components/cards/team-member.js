
import React from 'react';
import Image from 'next/image'
import { FaTwitter, FaGithub, FaDribbble } from 'react-icons/fa';

const TeamMember = ({ member }) => {
  return (
    <div className='container' sx={styles.section}>
      <div className='d-flex p-2' as="figure" sx={styles.avatar}>
          
        <Image src={member?.avatar} alt={member?.name} />
      </div>
      <div className='container' sx={styles.about}>
        <h2 >{member?.name}</h2>
        <p className='text-bold'>{member?.designation}</p>
        <div className='container' sx={styles.socialLinks}>
          {member?.socialLinks?.map((social, index) => (
            <a href={social?.link} key={index}>
              {social?.name === 'twitter' && (
                <FaTwitter size="18px" color="#55ACEE" />
              )}
              {social?.name === 'github' && (
                <FaGithub size="18px" color="#161614" />
              )}
              {social?.name === 'dribbble' && (
                <FaDribbble
                  size="18px"
                  color="#B2215A"
                  style={{ backgroundColor: '#E74D89', borderRadius: 20 }}
                />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;

const styles = {
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  about: {
    mt: [4],
    textAlign: ['center', null, null, 'left'],
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: [3, null, 17, null, 4],
    },
    p: {
      color: '#7589A1',
      letterSpacing: '-0.2px',
      mt: [2],
    },
  },
  socialLinks: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'left'],
    mt: [3],
    a: {
      display: 'inline-flex',
      mr: [2],
    },
  },
};
