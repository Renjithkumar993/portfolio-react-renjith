import { motion, useScroll, useTransform } from "framer-motion";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon,faDatabase} from '@fortawesome/react-fontawesome'
import "./skills.css"
library.add(fab)




function Skills() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.2, 2]);
  return (
    <motion.div
    className="container"
    style={{
      scale
    }}
  >
    <section id="skills" className="py-5 scroll-link text-white">
      <div className="container">
        <h2 className="text-center  mainheading" style={{fontSize:"50px"}}>Areas of Expertise</h2>
        <div className="row mt-5">
          <div className="col-md-12 d-flex justify-content-between">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-4 skillcard">
                <div className="skill-item ">
                <FontAwesomeIcon icon="fa-brands fa-react" className='fontawsomeicon'/>
                  <h4>React</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>JavaScript</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>MVC Paradigm</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js"className='fontawsomeicon' />
                  <h4>MERN Stack</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-node" className='fontawsomeicon' />
                  <h4>Node.js</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>ES6</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-microsoft" className='fontawsomeicon'/>
                  <h4>.NET</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>Azure Devops</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-git" className='fontawsomeicon' />
                  <h4>Git</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item ">
                <FontAwesomeIcon icon="fa-brands fa-bootstrap" className='fontawsomeicon '/>
                  <h4>Bootstrap</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>APIs</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>JQuery</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>JSON</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>AJAX</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>Express</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>MySQL</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>Sequelize</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>Progressive Web Apps</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>NoSQL</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  skillcard">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-square-js" className='fontawsomeicon'/>
                  <h4>MongoDB</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4 ">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-html5" className='fontawsomeicon' />
                  <h4>HTML</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  ">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-css3-alt" className='fontawsomeicon'/>
                  <h4>CSS</h4>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-4  ">
                <div className="skill-item">
                <FontAwesomeIcon icon="fa-brands fa-vuejs" className='fontawsomeicon' />
                  <h4>Vue.js</h4>
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
  );
}

export default Skills;
