import { Home } from "../home/Home";
import About from "./About";
import { Project } from "./Project";
import Resume from "./Resume";
import Contact from "./Contact";

import Header from "../common/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/project" exact component={Project} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </Router>
    </>
  );
};
