import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation, Home, Skills, Projects, Footer} from "./Components"
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/skills" exact component={() => <Skills />} />
          <Route path="/projects" exact component={() => <Projects />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
