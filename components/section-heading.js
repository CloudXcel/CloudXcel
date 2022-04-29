
import React from "react";

const SectionHeading = ({ title, description, ...props }) => {
  return (
    <div className="container text-center mb-4" sx={styles.heading} {...props}>
      <h1 sx={styles.title}>{title}</h1>
      <p as="p" sx={styles.description}>
        {description}
      </p>
    </div >
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: 'center',
    maxWidth: 660,
    margin: ['0 auto 60px'],
  },
  title: {
    fontFamily: 'heading',
    fontWeight: 700,
    fontSize: [5, null, null, 26, null, 30, 9],
    lineHeight: [1.33, 1.33, 1.48],
    letterSpacing: ['-0.5px', null, null, null, null, null, '-1px'],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
    },
  },
  description: {
    color: 'heading',
    fontSize: [1, null, null, 2],
    lineHeight: [1.58, 1.58, 1.58, 2.2],
    maxWidth: ['none', 'none', 'none', 'none', 490],
    margin: '15px auto 0',
  },
};
