import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="container text-center m-auto">
        <h1 class="text-5xl font-bold p-5">About this App</h1>
        <h2 className="text-4xl font-semibold p-5">Random Quote Generator</h2>
        <p className="p-5 font-medium text-3xl">
          Version 1.0.0 The Random Quote Generator is used to generate random
          quotations from famous authors.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
