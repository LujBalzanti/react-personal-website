import React from "react";
import { Link } from "react-router-dom";
import './Components.css'

function Home() {
    return (
      <div className="home">
        <div class="in-middle">
            <h1 class="light-text-emphasis text-center">Welcome to my web development portfolio!</h1>
            <p class="light-text main-body text-center">  
              I'm Luj Balzanti. I decided to make this website to tell you <Link to="/about">who I am</Link>, 
              as well as to showcase my <Link to="/projects">projects</Link> and <Link to="/skills">skills</Link>.
            </p>
        </div>
      </div>
    );
  }
  export default Home;