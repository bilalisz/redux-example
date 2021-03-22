import React, { Component } from "react";
import Contacts from "./contact/Contacts";
import Navbar from "./elements/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useContact } from "./contact";

const Home = () => {
  const contact = useContact();
  const { EditContact, AddContact } = contact;
  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="py-3">
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contact/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default Home;
