import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import FAQ from './FAQ';
import About from './About';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Nav />
      <Hero />
      <FAQ />
      <About />
      <Footer />
    </>
  );
};

export default HomePage;
