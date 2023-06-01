import React from 'react';
import Social from '../social/Social';
export default function Reachme() {
  return (
    <div className="container reachme-container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="reachme-title">
            <h2 className='mainheading myself'>I Want To Hear From You</h2>
            <h3 style={{color:"aqua"}}>Contact Me</h3>
          </div>
          <div className="contact-details">
            <div className="row align-items-center">
              <div className="col-2">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="col-10">
                <div className="contact-mi">
                  <Social/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form action="" className="contact-form">
            <div className="row">
              <div className="col-md-12 mb-3">
                <h3 className="hire-me-title mainheading myself">Get in Touch</h3>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  name="user_name"
                  id=""
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="user_email"
                  id=""
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="subject"
                  id=""
                  className="form-control"
                  placeholder="Enter Subject"
                />
              </div>
              <div className="col-md-12 mb-2">
                <textarea
                  name="message"
                  id=""
                  cols="60"
                  rows="8"
                  className="form-control"
                  placeholder="Your Message"
                ></textarea>
                <button className="btn btn-success hire-btn" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
