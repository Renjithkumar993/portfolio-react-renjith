import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)


export default function Social() {
  return (
<section id="social" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h1 className="mb-4 myself mainheading">FIND ME ON</h1>
            <p className="text-white">Feel free to <span className="purple">connect</span> with me</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul className="list-unstyled d-flex justify-content-center home-about-social-links">
              <li className="social-icons mx-2">
                <a href="https://github.com/Renjithkumar993" target="_blank" rel="noreferrer" className="icon-colour home-social-icons rounded-circle" style={{ fontSize: '3rem' }}>
                <FontAwesomeIcon icon="fa-brands fa-github" beat style={{color: "#0b5fef",}} />
                </a>
           
              </li>
              <li className="social-icons mx-2">
                <a href="https://www.linkedin.com/in/renjith-rajakumar-109a4051/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons rounded-circle" style={{ fontSize: '3rem' }}>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" beat style={{color: "#045bf1",}} />
                </a>
              </li>
              <li className="social-icons mx-2">
                <a href="https://www.facebook.com/renjithkumar.cool" target="_blank" rel="noreferrer" className="icon-colour home-social-icons rounded-circle" style={{ fontSize: '3rem' }}>
                <FontAwesomeIcon icon="fa-brands fa-facebook" beat style={{color: "#075ef2",}} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
