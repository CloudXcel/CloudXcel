import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import Testimonials from "../components/testimonials";


export default function Home() {

  return (
    <Layout pageTitle="Cloudxcel">
      <Header />
      <Hero />
      <Feature/>
      <Testimonials />
      <Service />
      
      <About />
      <Footer />
    </Layout>
  )
}