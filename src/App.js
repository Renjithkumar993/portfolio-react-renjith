import "./App.css";
import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import $ from "jquery";
import Aboutme from "./components/aboutme/Aboutme";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact"
import Social from "./components/social/Social";




function App() {
  
  $(window).on("load", function () {
    if ($("#preloader").length) {
      $("#preloader")
        .delay(700)
        .fadeOut("slow", function () {
          $(this).remove();
        });
    }
  });

  return (
    <>
<div id="preloader" className="d-flex justify-content-center">
  <div className="col-12 text-center">
    <h2 className="name-load animate-character text-center">
      PORTFOLIO LOADING
    </h2>
  </div>
</div>

<Navbar/>
      <Hero />
      <Aboutme  />
      <Skills/>
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Social />

    </>
  );
}

export default App;
