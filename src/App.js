import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AddEventsPage } from "./pages/AddEventsPage";
import axios from "axios";
import { BuyTicketPage } from "./pages/BuyTicketPage";
import { Navbar } from "./components/Navbar";
import { BuyConfirmPage } from "./pages/BuyConfirmPage";
import { AddConfirmPage } from "./pages/AddConfirmPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/addEvent">
            <AddEventsPage />
          </Route>
          <Route path="/buyTicketConfirm">
            <BuyConfirmPage />
          </Route>
          <Route path="/addEventConfirm">
            <AddConfirmPage />
          </Route>
          <Route path="/api/v1/event/:id">
            <BuyTicketPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
