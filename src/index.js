import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import TermsConditions from "./components/TermsConditions";
import PurchaseRefund from "./components/PurchaseRefund";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/purchaserefund" component={PurchaseRefund} />
      <Route path="/termsconditions" component={TermsConditions} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
