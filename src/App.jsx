import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GetData from "./components/GetData";
import Home from "./components/Home";
import Photo from "./components/Photo";
import Download from "./components/Download";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <div>
          <nav className="nav">
            <a className="logo" href="/">
              Dot Simplify Images
            </a>
            <ul className="nav-ul">
              <li className="nav-li">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-li">
                <Link className="nav-link" to="/photos">
                  Search
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/photos" component={GetData} />
            <Route exact path="/" component={Home} />
            <Route exact path="/photos/:id" component={Photo} />
            <Route exact path="/photos/:id/download" component={Download} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
