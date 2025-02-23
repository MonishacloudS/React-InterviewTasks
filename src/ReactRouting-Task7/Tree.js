import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import Team from './pages/Team';
// import Company from './pages/Company';



const Tree = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" exact component={<Home/>} />
                    <Route path="/about" component={<About/>} />
                    <Route path="/contact" component={<Contact/>} />
                </Routes>
            </div>
        </Router>
    )
}


export default Tree;