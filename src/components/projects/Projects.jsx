import React from "react";
import project1 from "../../assets/Capture.PNG";
import project2 from "../../assets/Capture1.PNG";
import project3 from "../../assets/Capture3.PNG";
import project4 from "../../assets/Capture4.PNG";
import "./project.css";
import projectImage from "../../assets/DALL.png";
import { Zoom } from "react-awesome-reveal";
import weatherProject from "../../assets/weather.jpg";
import snippetmanager from "../../assets/snippetmanager.PNG"

export default function Projects() {
  return (
    <section className="py-5">
      <div className="">
        <div className=" d-flex justify-content-center align-items-center">
          <img
            src={projectImage}
            alt="Profile Picture"
            className="img-fluid heroimage"
          />
        </div>
        <div className="d-flex justify-content-between">
          <div className=" container">
            <Zoom left cascade delay={0.2}>
              <h2
                className="text-center  mt-4 text-white mainheading"
                style={{ fontSize: "50px" }}
                id="project"
              >
                My Recent <strong className="heading ">Works</strong>
              </h2>
            </Zoom>

            <div className="row text-white">
            <div className="col-md-4 mt-4">
              <Zoom left cascade delay={0.4}>
                  <div className="card  projectcard">
                    <img
                      src={snippetmanager}
                      alt="Project 1"
                      className="card-img-top"
                    />
                    <div className="card-body ">
                      <h3 className="card-title">SnippetManager</h3>
                      <p className="card-text ">
                      SnippetManager is a web application built using the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to manage their code snippets. Users can log in using JWT (JSON Web Tokens), add code snippets, view, copy, edit, and delete them.
                      </p>
                      <div className="card-overlay justify-content-between d-flex">
                        <a
                          href="https://codemanagermedia.herokuapp.com/"
                          className="btn btn-light"
                        >
                          View Details
                        </a>
                        <a
                          href="https://github.com/Renjithkumar993/MERN-codemedia_graphQL"
                          className="btn btn-light"
                        >
                          
                         View Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>
</div>

            <div className="col-md-4 mt-4">
              <Zoom left cascade delay={0.4}>
                  <div className="card  projectcard">
                    <img
                      src={weatherProject}
                      alt="Project 1"
                      className="card-img-top"
                    />
                    <div className="card-body ">
                      <h3 className="card-title">WeatherAI</h3>
                      <p className="card-text ">
                        This is a weather application that provides users with a
                        5-day weather forecast, personalized recommendations
                        based on the weather, and displays events happening in
                        the city of your choice. The application utilizes the
                        OpenAI API to generate personalized recommendations.
                      </p>
                      <div className="card-overlay justify-content-between d-flex">
                        <a
                          href="https://weatherai.herokuapp.com/"
                          className="btn btn-light"
                        >
                          View Details
                        </a>
                        <a
                          href="https://github.com/Renjithkumar993/weather-app-openai-eventapi"
                          className="btn btn-light"
                        >
                          
                         View Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>
</div>
              <div className="col-md-4 mt-4 ">
                

                <Zoom left cascade delay={0.4}>
                  <div className="card  projectcard">
                    <img
                      src={project2}
                      alt="Project 1"
                      className="card-img-top"
                    />
                    <div className="card-body ">
                      <h3 className="card-title">Task-Bot</h3>
                      <p className="card-text ">
                        Chatbot-OpenAI is a versatile application that allows
                        users to get suggestions and assistance with their
                        tasks. It utilizes OpenAI's natural language processing
                        and intelligent suggestions to create engaging and
                        personalized conversational experiences.
                      </p>
                      <div className="card-overlay justify-content-between d-flex">
                        <a
                          href="https://taskbot-openai.herokuapp.com/"
                          className="btn btn-light"
                        >
                          
                          View Details
                        </a>
                        <a
                          href="https://github.com/Renjithkumar993/taskbot-openAI"
                          className="btn btn-light"
                        >
                          
                         View Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </div>
   
              <div className="col-md-4 mt-4">
                <Zoom left cascade delay={0.2}>
                  <div className="card  projectcard">
                    <img
                      src={project1}
                      alt="Project 2"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h3 className="card-title">Resume Rocket</h3>
                      <p className="card-text">
                        A Full Stack Resume generator that utilizes AI to
                        generate resumes that align with industry standards,
                        improving your chances of catching the eye of recruiters
                        and hiring managers.
                      </p>
                      <div className="card-overlay justify-content-between d-flex">
                        <a
                          href="https://airesume.herokuapp.com/"
                          className="btn btn-light"
                        >
                          View Details
                        </a>
                        <a
                          href="https://github.com/aturner1995/rocket-resumes/"
                          className="btn btn-light"
                        >
                          
                         View Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </div>

              <div className="col-md-4 mt-4">

                <Zoom left cascade delay={0.2}>
                  <div className="card  projectcard">
                    <img
                      src={project3}
                      alt="Project 3"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h3 className="card-title">Movie Buff</h3>
                      <p className="card-text">
                        Powered by the TMDB API, Watchmode API, News API, and
                        featuring styling from the Bulma CSS framework.
                      </p>
                      <div className="card-overlay justify-content-between d-flex">
                        <a
                          href="https://renjithkumar993.github.io/MovieBuff/"
                          className="btn btn-light"
                        >
                          View Details
                        </a>
                        <a
                          href="https://github.com/Renjithkumar993/MovieBuff"
                          className="btn btn-light"
                        >
                          
                         View Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </div>
              <div className="col-md-4 mt-4">
                <Zoom left cascade delay={0.2}>
                  <div className="card  projectcard">
                    <img
                      src={project4}
                      alt="Project 4"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h3 className="card-title">Tech-Blog</h3>
                      <p className="card-text">
                        This is a CMS-style blog site that allows users to
                        create, read, update, and delete blog posts. Users can
                        also leave comments on blog posts.
                      </p>
                      <div className="card-overlay justify-content-between d-flex">
                        <a
                          href="https://techblogclub.herokuapp.com/"
                          className="btn btn-light"
                        >
                          View Details
                        </a>
                        <a
                          href="https://github.com/Renjithkumar993/Tech-Blog-MVC"
                          className="btn btn-light"
                        >
                          
                         View Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
