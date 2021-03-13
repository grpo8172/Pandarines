import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Component
import Footer from "./Component/Navbar/Footer";
import Home from "./Component/Homepages/Home";
import Blog from "./Component/BlogComponent/Blog";
import Topbar from "./Component/Navbar/Topbar";
import Admin from "./Component/Admin/Main.js";
import FullPost from "./Component/BlogComponent/fullPost";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Topbar />
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route path="/admin" component={Admin} />
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/fullPost" component={FullPost} />
          </Switch>
          <Footer />
        </Router>
        <h5
          style={{
            textAlign: "center",
            backgroundColor: "#383838",
            color: "#FFF",
            padding: 20,
          }}
        >
          Copyright © 2020 Mandarin Mates
        </h5>
      </div>
    );
  }
}

export default App;
