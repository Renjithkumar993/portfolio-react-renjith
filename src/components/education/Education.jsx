import React from 'react'
import educationImage  from "../../assets/student-studying-at-home-free-vector-removebg-preview.png"

import { motion, useScroll, useTransform } from "framer-motion";



export default function Education() {
  
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (

    <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <section id="education-certifications" className="py-5 scroll-link"  style={{ overflowX: 'hidden' }}>
              <div className="wrapper">

    <div className="container text-white">


      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={educationImage} alt="Profile Picture" className="img-fluid heroimage" />
        </div>
    
        <div className="col-md-6">
       
          <h2 className="text-center mt-4 mainheading" style={{fontSize:"50px"}}> Education &amp; Certifications</h2>
       
          <div className="row mt-5 container">

            <div className="col-md-4 item1">
              <div className="education-item">
                <i className="fas fa-laptop-code education-icon"></i>
                <h4>Bachelor of Computer Application</h4>
                <p>Computer Programming, Specific Applications</p>
                <p>Bharathiar University</p>
              </div>
            </div>

            <div className="col-md-4 item2">
              <div className="education-item">
                <i className="fas fa-network-wired education-icon"></i>
                <h4>PG Diploma in Information Technology Professional</h4>
                <p>Network and System Administration/Administrator</p>
                <p>Lambton College</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="education-item">
                <i className="fas fa-code education-icon"></i>
                <h4>UNB Coding Bootcamp</h4>
                <p>University of New Brunswick</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="certification-item">
                <i className="fas fa-shield-alt certification-icon"></i>
                <h4>CompTIA Project+ Certification</h4>
                <p>CompTIA</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="certification-item">
                <i className="fab fa-microsoft certification-icon"></i>
                <h4>Microsoft Certified: Azure Security Engineer Associate</h4>
                <p>Microsoft</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="certification-item">
                <i className="fas fa-user-secret certification-icon"></i>
                <h4>Certified Ethical Hacker (CEH)</h4>
                <p>EC-Council</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="certification-item">
                <i className="fas fa-search-plus certification-icon"></i>
                <h4>Computer Hacking Forensic Investigator (CHFI)</h4>
                <p>EC-Council</p>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="education-item">
                <i className="fas fa-code education-icon"></i>
                <h4>.Net Programming certificate</h4>
                <p>Bharathiar University</p>
              </div>
            </div>
            

          </div>
        </div>
        
      </div>

    </div>
   
    </div>

    
  </section>
  <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
    


  )
}
