import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Main from "../components/Home/Main/Main";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
