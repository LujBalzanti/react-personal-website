import React from "react";
import { HashRouter, HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Navigation, Home, Skills, Projects, Footer} from "./Components"
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <HashRouter basename="/react-personal-website">
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/skills" exact component={() => <Skills />} />
            <Route path="/projects" exact component={() => <Projects />} />
          </Switch>
        </HashRouter>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
