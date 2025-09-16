import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Courses />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
