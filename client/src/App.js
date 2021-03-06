import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Authorisation from "./components/Authorisation";
import RequireAuth from "./components/RequireAuthHOC";
import InvoiceList from "./components/InvoiceList";
import InvoicePage from "./components/InvoicePage";
import Billing from "./components/Billing";
import Settings from "./components/Settings";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/authorisation" component={Authorisation} />
          <Route path="/invoices" component={RequireAuth(InvoiceList)} />
          <Route path="/new" component={RequireAuth(InvoicePage)} />
          <Route path="/billing" component={Billing} />
          {/* <Route path="/billing" component={RequireAuth(Billing)} /> */}
          <Route path="/settings" component={RequireAuth(Settings)} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
