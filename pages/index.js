import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';

import Customer from "../components/contact";
import Testimonials from "../components/testimonials";
import Team from '../components/team'


export default function Home() {

  return (
    <Layout pageTitle="Cloudxcel">
      <Header />
      <Hero />
      <Feature/>
      <Testimonials />
      <Service />
      <Team />
      <Customer />
     
    </Layout>
  )
}