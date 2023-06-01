import "./App.css";
import React, { useState, useEffect } from "react";
import { Spinner, Container, Row, Col } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import $ from "jquery";
import Aboutme from "./components/aboutme/Aboutme";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Social from "./components/social/Social";
import Reachme from "./components/reachme/Reachme";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 2000;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading ? (
        <Container className="d-flex justify-content-center align-items-center vh-100">
          <Row>
            {" "}
            <div className="justify-content-center text-white text-center">
              {" "}
              <h1>Renjith Portfolio Loading</h1>
            </div>
            <Col className="justify-content-center text-center">
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
              <Spinner animation="grow" variant="dark" />
            </Col>
          </Row>
        </Container>
      ) : (
        <>

          <Navbar />
          <Hero />
          <Aboutme />
          <Skills />
          <Education />
          <Projects />
          <Experience />
          <Contact/>
          <Reachme />
        </>
      )}
    </>
  );
}

export default App;
