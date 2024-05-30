import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero'; 
import Carousel from '../components/Carousel'; 
import NewsSection from '../components/NewsSection';
import News from '../components/News';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Page: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.contentWrapper}>
        <Hero />
        <br />
        <br />
        <NewsSection />
        <br />
        <br />
        {/* <News /> */}
        <Carousel />
      </div>
      <Footer />
    </>
  );
};

export default Page;
