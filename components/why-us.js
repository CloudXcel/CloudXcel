import React from 'react'
import Tabs, { TabPane } from 'rc-tabs';
import { rgba } from 'polished';
import {Box, Typography} from '@mui/material';
// @ts-ignore
import tabImage1 from '../assets/images/tab-illustration-1.png';
// @ts-ignore
import tabImage2 from '../assets/images/tab-illustration-2.png';
// @ts-ignore
import tabImage3 from '../assets/images/tab-illustration-3.png';
const data = [
    {
      id: 1,
      tabTitle: 'Why you choose our service?',
      title: `We will turn your idea in the successful business model framework`,
      description: `Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.`,
      moreLink: '#explore-more',
      image: tabImage1,
      list: [
        'Medical and vision',
        'Life insurance',
        'HSAs and FSAs',
        'Commuter benefits',
      ],
    },
    {
      id: 2,
      tabTitle: 'What’s our business promise?',
      title: `We will turn your idea in the successful business model framework`,
      description: `CloudXcel has enabled us to successfully scale our development department to five times its original size while also keeping everyone aligned on the product roadmap and company strategy.`,
      moreLink: '#explore-more',
      image: tabImage2,
      list: [
        'Medical and vision',
        'Life insurance',
        'HSAs and FSAs',
        'Commuter benefits',
      ],
    },
    {
      id: 3,
      tabTitle: 'What’s our role model plan?',
      title: `We will turn your idea in the successful business model framework`,
      description: `Plan and manage your product roadmaps and launches (and all the work it takes to bring them to life) in Asana, so you can ship on time, every time.`,
      moreLink: '#explore-more',
      image: tabImage3,
      list: [
        'Medical and vision',
        'Life insurance',
        'HSAs and FSAs',
        'Commuter benefits',
      ],
    },
  ];
const whyUs = () => {
  return (
    <section>
        <div className='container-fluid'>
            <Tabs >
                {data?.map((item) => (
                    <TabPane key={item.id} tab={<Typography variant="h1" component="div" gutterBottom>{item.tabTitle}</Typography>}>
                        
                    </TabPane>
                ))}
            </Tabs>
        </div>
    </section>
  )
}

export default whyUs
