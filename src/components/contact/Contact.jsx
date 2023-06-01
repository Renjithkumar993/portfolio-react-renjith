import React from 'react'
import "./contact.css"
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Container className='newletter'>
      <section id="contact" className="d-flex">
        <div className="contact-me2 ms-5 mt-5" >
          <div className="">
            <h2>Newsletter</h2>
          </div>
          <div className="contact-me2-dec"></div>
          <Row className="align-items-center mb-5">
            <Col lg={5} md={12}>
              <div className="work-togather-text">
                <h2 className="h2-title text-white">Let's Work Together</h2>
                <p>
                  Are you impressed and want a project done? Give me a call or
                  email me anytime.
                </p>
              </div>
            </Col>
            <Col lg={4} md={7}>
              <div className="work-togather-form">
                <input
                  type="email"
                  name="Email"
                  className="form-input-one subscribe-input"
                  placeholder="Email Address"
                  required=""
                />
              </div>
            </Col>
            <Col lg={3} md={4}>
              <div className="work-togather-form-btn">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <button type="submit" className="sec-btn bg-success text-white p-3">
                  Subscribe Now
                </button>
                </motion.div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Container>
  )
}
