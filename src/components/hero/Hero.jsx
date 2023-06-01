import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./hero.css";
import heroImage from "../../assets/frontpagehero.png";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import myImage from "../../assets/profilepic.png";
import Social from "../social/Social";

export default function Hero() {
  return (
    <Container className="d-flex mt-5 hero-container justify-content-center" id="mainpage">
      <Row className="align-items-center">
        <Col
          sm={12}
          md={4}
          className="text-center hero-left flex-grow-1 align-items-center"
        >
          <img src={myImage} alt="" className="img-fluid align-items-center" />
        </Col>

        <Col
          sm={12}
          md={4}
          className="text-center align-items-center flex-grow-1 "
        >
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.25,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 3,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <div className="left-content text-white">
              <h2>
                HI there! <span className="wave-emoji wave">👋</span>
              </h2>

              <motion.div
                className="box"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <h1 className="headingcolor">
                  I am <span className="name">Renjith Rajakumar</span> 
                </h1>
              </motion.div>
              <p className="typewriter">
                Experienced Full Stack Developer and Passionate Learner
              </p>
              <p className="lead">
                Unlock the Power of Innovation and Efficiency with a Skilled
                Full Stack Developer
              </p>
            </div>
          </motion.div>
          <Social />
        </Col>

        <Col sm={12} md={4} className="text-center hero-right flex-grow-1">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.25,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 3,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Tilt>
              <img src={heroImage} alt="" className="img-fluid" />
            </Tilt>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}
