import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand-lg navbar-dark nav-bg-color">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class={`nav-item ${props.location.pathname === "/" ? "active" : ""}`}>
                            <Link to="/" class="nav-link">Home</Link>
                        </li>
                        <li class={`nav-item ${props.location.pathname === "/about" ? "active" : ""}`}>
                            <Link to="/about" class="nav-link">About</Link>
                        </li>
                        <li class={`nav-item ${props.location.pathname === "/skills" ? "active" : ""}`}>
                            <Link to="/skills" class='nav-link'>Skills</Link>
                        </li>
                        <li class={`nav-item ${props.location.pathname === "/projects" ? "active" : ""}`}>
                            <Link to="/projects" class='nav-link'>Projects</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>

    )
}

export default withRouter(Navigation);