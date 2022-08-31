import React, { useEffect } from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Services from "../components/services";
import Started from "../components/started";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Hero />
      <Services />
      <Started />
      <Footer />
    </>
  );
};

export default Home;
