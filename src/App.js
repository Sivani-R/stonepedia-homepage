import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
