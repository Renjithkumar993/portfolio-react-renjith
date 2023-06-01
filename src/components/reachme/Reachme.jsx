import React, { useState } from "react";
import Social from "../social/Social";
import Toast from "react-bootstrap/Toast";
import 'bootstrap/dist/css/bootstrap.min.css';

import { validateEmail } from "../../utils/helpers";

export default function Reachme() {
  const [email, setEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } 
  };
  console.log(email)

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("your email address is not correct. please enter valid email address");

      return;
    }



    setEmail("");
  };

  return (
    <div className="container reachme-container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <div className="reachme-title">
            <h2 className="mainheading myself">I Want To Hear From You</h2>
            <h3 style={{ color: "aqua" }}>Contact Me</h3>
          </div>
          <div className="contact-details">
            <div className="row align-items-center">
              <div className="col-2">
                <i className="fa fa-envelope"></i>
              </div>
              <div className="col-10">
                <div className="contact-mi">
                  <Social />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form action="" className="contact-form">
            <div className="row">
              <div className="col-md-12 mb-3">
                <h3 className="hire-me-title mainheading myself">
                  Get in Touch
                </h3>
              </div>
              {errorMessage && (
                <Toast>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Hi there</strong>
                    <small></small>
                  </Toast.Header>
                  <Toast.Body>{errorMessage}</Toast.Body>
                </Toast>
              )}
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
                  onChange={handleInputChange}
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
                  value={email}
                  id=""
                  cols="40"
                  rows="6"
                  className="form-control"
                  placeholder="Your Message"
                ></textarea>
                <button
                  className="btn btn-success hire-btn"
                  type="button"
                  onClick={handleFormSubmit}
                >
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
