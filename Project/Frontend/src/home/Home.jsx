import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";
import Notes from "../components/Notes";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Notes/>
      <Footer />
    </>
  );
}

export default Home;
