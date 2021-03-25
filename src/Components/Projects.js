import React from "react";
import './Components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';


function Projects() {
    return (
      <div className="projects">
          <h1 class="light-text">Projects</h1>
          <div class="container">
            <div class="row justify-content-center justify-content-lg-between">
              <div class="card nav-bg-color col-8 col-md-4 col-lg-3 border border-2 project-card">
                <img src="images/projects/commerce/maincard.png" class="card-img-top rounded mx-auto d-block" alt="An e-commerce website"></img>
                <div class="card-body light-text">
                  <h5 class="card-title">E-commerce Website</h5>
                  <p class="card-text">A website focused on auctioning and bidding on items.</p>
                  <p class="card-text">Built in Django with Bootstrap for styling.</p>
                  <a class="btn btn-primary">Read more</a>
                </div>
              </div>
              <div class="card nav-bg-color col-8 col-md-4 col-lg-3 border border-2 project-card">
                <img src="images/projects/example/Maincard.png" class="card-img-top rounded mx-auto d-block" alt="An example website"></img>
                <div class="card-body light-text">
                  <h5 class="card-title">E-commerce (Auction) Website</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card nav-bg-color col-8 col-md-4 col-lg-3 border border-2 project-card">
                <img src="images/projects/wip.png" class="card-img-top" alt="A work in progress website"></img>
                <div class="card-body light-text">
                  <h5 class="card-title">E-commerce (Auction) Website</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
              <div class="card nav-bg-color col-8 col-md-4 col-lg-3 border border-2 project-card">
                <div class="card-body light-text">
                  <FontAwesomeIcon icon={faTools} size="6x" />
                  <h5 class="card-title wip-title">E-commerce (Auction) Website</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
  export default Projects;