import React from "react";

import Header from "../../components/Header";
import History from "../../components/History"
import Me from "../../components/Me";
import Skill from "../../components/Skill"
import Social from "../../components/Social"
import Footer from "../../components/Footer"
import Contact from "../../components/Contact"
import Blog from "../../components/Blog"
import Projects from "../../components/Projects"

import "../../styles/index.css"

const Main = () => {
  return (
    <>  
      <Header/>
      <Me/>
      <Skill/>
      <Projects/>
      <Blog/>
      <History/>
      <Contact/>
      <Social/>
      <Footer/>
    </>
  );
};
export default Main;