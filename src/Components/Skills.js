import React from "react";
import './Components.css';

function Skills() {
    return (
      <div className="skills" class="container title">
          <div class="row">
            <div class="col">
              <div class="card nav-bg-color">
                <div class="card-body">
                  <h3 class="card-title light-text-emphasis">Programing Languagues</h3>
                </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item nav-bg-color light-text">Python</li>
                    <li class="list-group-item nav-bg-color light-text">Javascript</li>
                    <li class="list-group-item nav-bg-color light-text">Typescript</li>
                    <li class="list-group-item nav-bg-color light-text">SQL</li>
                    <li class="list-group-item nav-bg-color light-text">C</li>
                  </ul>
              </div>
            </div>
            <div class="col">
              <div class="card nav-bg-color">
                <div class="card-body">
                  <h3 class="card-title light-text-emphasis">Tools & Technologies</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item nav-bg-color light-text">Django</li>
                    <li class="list-group-item nav-bg-color light-text">React</li>
                    <li class="list-group-item nav-bg-color light-text">Html5</li>
                    <li class="list-group-item nav-bg-color light-text">CSS3</li>
                    <li class="list-group-item nav-bg-color light-text">Git</li>
                    <li class="list-group-item nav-bg-color light-text">Flask</li>
                    <li class="list-group-item nav-bg-color light-text">PostgreSQL</li>
                    <li class="list-group-item nav-bg-color light-text">SQLite3</li>
                  </ul>
              </div>
            </div>
          </div>
          <div class="row justify-content-center title">
            <div class="col-6">
              <div class="card nav-bg-color">
                <div class="card-body">
                  <h3 class="card-title light-text-emphasis">Skills</h3>
                </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item nav-bg-color light-text">Strong fundamentals of object-oriented design</li>
                    <li class="list-group-item nav-bg-color light-text">Clear and efficient communication</li>
                    <li class="list-group-item nav-bg-color light-text">Familiarity with Agile design principles</li>
                    <li class="list-group-item nav-bg-color light-text">Good under pressure - (Evidenced by experience in high stress competitive environments)</li>
                    <li class="list-group-item nav-bg-color light-text">Time management</li>
                    <li class="list-group-item nav-bg-color light-text">Comfortable in multidisciplinary and diverse environments</li>
                    <li class="list-group-item nav-bg-color light-text">Public speaking - (Awarded "Best Presentation" for <a href="https://lokar.fmf.uni-lj.si/www/rom_konferenca/konferenca_2017/orodja/LujRomanBalzanti.html"><i>Calculating the probabilty in Poker, Texas Hold'em</i></a>- University of Ljubljana, Faculty of Mathematics and Physics - 2017)</li>
                  </ul>
              </div>
            </div>
          </div>
      </div>
    );
  }
  export default Skills;