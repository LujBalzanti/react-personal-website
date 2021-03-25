import React from "react";
import { HashRouter, HashRouter as Router, Route, Switch} from 'react-router-dom';
import { Navigation, Home, About, Skills, Projects, Footer} from "./Components"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <HashRouter basename={process.env.PUBLIC_URL || ''}>
          <div class="app-content">
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/skills" exact component={() => <Skills />} />
            <Route path="/projects" exact component={() => <Projects />} />
          </Switch>
          </div>
        </HashRouter>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
