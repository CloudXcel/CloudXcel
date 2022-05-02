import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import Customer from "../components/customer";
import Testimonials from "../components/testimonials";
import Team from '../components/team'
import Contact from "../components/Contact"



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
      <Contact/>
    </Layout>
  )
}