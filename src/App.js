import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import GridPhoto from "./components/GridPhoto";
import Header from "./components/common/Header";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Header />
      {/*  Rout between pages and redirection */}
      <Switch>
        <Route path="/" exact component={GridPhoto} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Redirect from="/home" to="/" />
      </Switch>
    </div>
  );
}

export default App;
