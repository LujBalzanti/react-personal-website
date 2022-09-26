import React from "react";
import './Components.css';

function Projects() {
    return (
      <div className="projects">
          <h1 class="light-text-emphasis">Projects</h1>
          <div class="container">
            <div class="row justify-content-center justify-content-lg-between">
              <div class="card nav-bg-color col-8 col-md-4 col-lg-3 border border-2 project-card">
                <h5 class="card-title project-card-title light-text-emphasis">E-commerce Website</h5>
                <img src="images/projects/commerce/maincard.png" class="card-img-top rounded mx-auto d-block" alt="An e-commerce website"></img>
                <div class="card-body text-left">
                  <p class="card-text light-text">A website focused on auctioning and bidding on items.</p>
                    <ul class="project-card-ul">
                      <li class="light-text">Technologies:</li>
                      <li class="light-text"><svg viewBox="0 0 128 128" class="big-icon"><g fill="#ffffff"><path d="M90.9 61.6l.1-2v-.6h-.8c-1.2 0-2.5.3-3.4.9-1.4.8-2.2 2.3-2.2 4.4 0 3 1.5 4.7 4.1 4.7.8 0 1.3-.1 2.3-.4v-4.3l-.1-2.7zM16.3 64.2c0 3.2 1.6 4.9 4.7 4.9.7 0 1 0 2-.2v-9.5c-1-.2-1.2-.3-2-.3-3 0-4.7 1.9-4.7 5.1zM45.9 68.1c0 1.2.7 1.7 2.3 1.7.9 0 1.8-.1 2.8-.3v-4c-4 .4-5.1 1-5.1 2.6zM108.9 59c-2.3 0-3.7 1.9-3.7 5.2 0 3.3 1.3 5.2 3.7 5.2 2.3 0 3.6-1.9 3.6-5.2 0-3.2-1.3-5.2-3.6-5.2zM126 43.9c0-3.8-3.1-6.9-6.9-6.9h-111.2c-3.8 0-6.9 3.1-6.9 6.9v40.1c0 3.9 3.1 7 6.9 7h111.1c3.8 0 6.9-3.1 6.9-6.9v-40.2zm-115.7 20.4c0-6 4-10 10.2-10 1 0 1.6.1 2.6.3v-8.6h6v27c-3 .6-5.3.8-7.7.8-7.3 0-11.1-3.2-11.1-9.5zm27.7 4.2c0 4.7-.2 7-1.2 9-1 1.9-2.1 3.1-4.7 4.4l-5.5-2.6c2.6-1.2 3.7-2.3 4.5-4 .8-1.7.9-3.7.9-8.8v-11.5h6v13.5zm0-16.5h-6v-6h6v6zm18 21.3c-2 .4-5.8.7-8.3.7-5 0-7.1-1.7-7.1-5.6 0-4.2 3.3-6.1 10.3-6.7v-1.3c0-1.1-.5-1.5-2-1.5-2.2 0-5 .6-7 1.8v-4.6c3-1.2 5.1-1.8 7.8-1.8 3 0 4.8.8 5.7 2.4.5.9.5 2 .5 4.5v12.1zm21 .7h-6v-11.8c0-2.3-1-3.1-3.1-3.1-.8 0-1.9.1-2.9.4v14.5h-6v-18.3c4-.9 6.5-1.3 9.4-1.3 3 0 5.4.7 6.7 2 1.3 1.3 1.9 2.6 1.9 5.6v12zm19.3-11.6.7 5.6v1.7c0 5.1-.6 7.5-1.9 9.4-1.8 2.9-5.1 4.3-9.7 4.3-2.3 0-4.5-.3-6.5-1.2v-5.5c2 1.1 4.2 1.6 6.4 1.6 3.9 0 5.6-1.6 5.6-5.3v-.1c-1 .6-2.4.8-3.9.8-5.2 0-8.5-3.4-8.5-8.8 0-6.7 4.9-10.5 13.5-10.5 2.5 0 4.9.3 7.7.8l-2.3 4.3c-1.6-.3 1.3 0-.7-.2m12.1 14.8c-5.9 0-9.6-3.7-9.6-9.7 0-6.2 3.8-10.1 9.8-10.1 5.9 0 9.5 3.7 9.5 9.8.1 6.1-3.7 10-9.7 10z"></path></g></svg> Django</li>
                      <li class="light-text"> <i class="devicon-bootstrap-plain"></i> Bootstrap</li>
                    </ul>
                </div>
                  <a class="btn bright-bg-color gray-text project-button" href="https://github.com/LujBalzanti/django-auction-website">See full code</a>
              </div>
              <div class="card nav-bg-color col-8 col-md-4 col-lg-3 border border-2 project-card">
                <h5 class="card-title project-card-title light-text-emphasis">Hotel Reservations Website</h5>
                <a href="https://streamable.com/idhqno"><img src="images/projects/reservations/maincard.png" class="card-img-top rounded mx-auto d-block" alt="A hotel website"></img></a>
                <div class="card-body text-left">
                  <p class="card-text projects-text light-text">A hotel landing page with reservation functionality. Based on architecture Kata specifications with added <a href="https://streamable.com/idhqno">Front-end.</a></p>
                  <ul class="project-card-ul">
                      <li class="light-text">Technologies:</li>
                      <li class="light-text"><svg viewBox="0 0 128 128" class="big-icon"><g fill="#ffffff"><path d="M90.9 61.6l.1-2v-.6h-.8c-1.2 0-2.5.3-3.4.9-1.4.8-2.2 2.3-2.2 4.4 0 3 1.5 4.7 4.1 4.7.8 0 1.3-.1 2.3-.4v-4.3l-.1-2.7zM16.3 64.2c0 3.2 1.6 4.9 4.7 4.9.7 0 1 0 2-.2v-9.5c-1-.2-1.2-.3-2-.3-3 0-4.7 1.9-4.7 5.1zM45.9 68.1c0 1.2.7 1.7 2.3 1.7.9 0 1.8-.1 2.8-.3v-4c-4 .4-5.1 1-5.1 2.6zM108.9 59c-2.3 0-3.7 1.9-3.7 5.2 0 3.3 1.3 5.2 3.7 5.2 2.3 0 3.6-1.9 3.6-5.2 0-3.2-1.3-5.2-3.6-5.2zM126 43.9c0-3.8-3.1-6.9-6.9-6.9h-111.2c-3.8 0-6.9 3.1-6.9 6.9v40.1c0 3.9 3.1 7 6.9 7h111.1c3.8 0 6.9-3.1 6.9-6.9v-40.2zm-115.7 20.4c0-6 4-10 10.2-10 1 0 1.6.1 2.6.3v-8.6h6v27c-3 .6-5.3.8-7.7.8-7.3 0-11.1-3.2-11.1-9.5zm27.7 4.2c0 4.7-.2 7-1.2 9-1 1.9-2.1 3.1-4.7 4.4l-5.5-2.6c2.6-1.2 3.7-2.3 4.5-4 .8-1.7.9-3.7.9-8.8v-11.5h6v13.5zm0-16.5h-6v-6h6v6zm18 21.3c-2 .4-5.8.7-8.3.7-5 0-7.1-1.7-7.1-5.6 0-4.2 3.3-6.1 10.3-6.7v-1.3c0-1.1-.5-1.5-2-1.5-2.2 0-5 .6-7 1.8v-4.6c3-1.2 5.1-1.8 7.8-1.8 3 0 4.8.8 5.7 2.4.5.9.5 2 .5 4.5v12.1zm21 .7h-6v-11.8c0-2.3-1-3.1-3.1-3.1-.8 0-1.9.1-2.9.4v14.5h-6v-18.3c4-.9 6.5-1.3 9.4-1.3 3 0 5.4.7 6.7 2 1.3 1.3 1.9 2.6 1.9 5.6v12zm19.3-11.6.7 5.6v1.7c0 5.1-.6 7.5-1.9 9.4-1.8 2.9-5.1 4.3-9.7 4.3-2.3 0-4.5-.3-6.5-1.2v-5.5c2 1.1 4.2 1.6 6.4 1.6 3.9 0 5.6-1.6 5.6-5.3v-.1c-1 .6-2.4.8-3.9.8-5.2 0-8.5-3.4-8.5-8.8 0-6.7 4.9-10.5 13.5-10.5 2.5 0 4.9.3 7.7.8l-2.3 4.3c-1.6-.3 1.3 0-.7-.2m12.1 14.8c-5.9 0-9.6-3.7-9.6-9.7 0-6.2 3.8-10.1 9.8-10.1 5.9 0 9.5 3.7 9.5 9.8.1 6.1-3.7 10-9.7 10z"></path></g></svg> Django</li>
                      <li class="light-text"><i class="devicon-jquery-plain"></i> jQuery</li>
                      <li class="light-text"><i class="devicon-bootstrap-plain"></i> MD Bootstrap</li>
                    </ul>
                </div>
                  <a class="btn bright-bg-color gray-text project-button" href="https://github.com/LujBalzanti/django-hotel-reservations">See full code</a>
              </div>
              <div class="card nav-bg-color col-8 col-md-4 col-lg-3 border border-2 project-card">
                <h5 class="card-title project-card-title light-text-emphasis">Portfolio Website</h5>
                <img src="images/projects/portfolio/maincard.png" class="card-img-top rounded mx-auto d-block" alt="A portfolio website"></img>
                <div class="card-body text-left">
                  <p class="card-text projects-text light-text">The website you're currently visiting. It's fully responsive!</p>
                  <ul class="project-card-ul">
                      <li class="light-text">Technologies:</li>
                      <li class="light-text"><i class="devicon-react-original"></i> React</li>
                      <li class="light-text"><i class="devicon-bootstrap-plain"></i> Bootstrap</li>
                    </ul>
                </div>
                  <a class="btn bright-bg-color gray-text project-button" href="https://github.com/LujBalzanti/react-personal-website">See full code</a>
              </div>
              <div class="card nav-bg-color col-8 col-md-4 col-lg-3 border border-2 project-card">
                <h5 class="card-title project-card-title light-text-emphasis">ASP.NET Project</h5>
                <img src="images/projects/wip.svg" class="wip-size" alt="Work in progress"></img>
                <div class="card-body">
                  <p class="card-subtitle light-text">Coming soon</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
  export default Projects;