import "./App.css";

import Header from "./component/common/head/Header.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./component/home/Home.js";
import About from "./component/about/About.js";
import CoursesHome from "./component/allcourses/CoursesHome.js";
import Team from "./component/team/Team.js";
import Price from "./component/pricing/Price.js";
import Blog from "./component/blog/Blog.js";
import Contact from "./component/contact/Contact.js";
import Footer from "./component/common/footer/Footer.js";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses">
            <CoursesHome />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/pricing">
            <Price />
          </Route>
          <Route path="/journal">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
