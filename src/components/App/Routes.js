import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

export default function Routes({ modules }) {
  return (
    <div className="Routes">
      <Route exact path="/" render={() => <Redirect to="/Comments" />} />
      <Route path="/Homepage" component={() => <h1>LiveEO</h1>} />
      <Route path="/Account" component={() => <h2>Account</h2>} />
      {modules.map((module) => (
        <Route {...module.routeProps} key={module.name} />
      ))}
    </div>
  );
}
