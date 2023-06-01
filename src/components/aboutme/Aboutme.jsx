import React from 'react'
import "./skills.css"
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import meimage from "../../assets/aboutme.png"
import {Zoom } from "react-awesome-reveal";
import {Slide} from "react-awesome-reveal";


export default function Aboutme() {
  return (
  
    <div>
    <Container>
 
      <Row className='align-items-center'>
        
  
        <Col md={6} className=''>
        <Zoom left cascade delay={0.2}>
          <h2 className="text-white"id='aboutme'>
            LET ME INTRODUCE <span className='myself'>MYSELF</span> 
          </h2>
          <p className="text-white about-text">
            I am a Full Stack Developer with a passion for building dynamic and interactive websites and full stack applications. With experience in using cutting-edge technologies, I strive to create elegant and efficient solutions for web development challenges.
          </p>

          <div className="">
            <p className="text-white">
              My field of interests are building new&nbsp;
              <i>
                <b className="text-white">Web Technologies and Products</b> and also in areas related to&nbsp;
                <b className="text-white">Deep Learning and Natural Language Processing.</b>
              </i>
              <br /><br />
              Whenever possible, I also apply my passion for developing products with Node.js and
              <i>
                <b className="purple">Modern JavaScript Library and Frameworks</b>
              </i>
              &nbsp;like
              <i>
                <b className="myself"> React.js and Express.js</b>
              </i>
            </p>
          </div>
          </Zoom>
        </Col>
    
        <Col md={6} className='order-1 sm-order-1'>
        <Slide right>
          <img src={meimage} alt="" className="img-fluid" />
          </Slide>
        </Col>
     
      </Row>
     
    </Container>
  </div>

  )
}
