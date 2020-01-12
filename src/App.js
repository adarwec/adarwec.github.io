import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import TermsConditions from "./components/TermsConditions";
import PurchaseRefund from "./components/PurchaseRefund";
import Services from "./components/Services";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <Navigator />
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="works">
            <Works />
          </section>

          <section id="plans">
            <Plans />
          </section>
          <section id="faq">
            <FAQ />
          </section>
          <section id="footer">
            <Footer />
          </section>

          {/* <Route path="/purchaserefund" component={PurchaseRefund} /> */}
        </div>
        {/* <Switch>
          <Route path="/purchaserefund" component={PurchaseRefund} />
          <Route path="/termsconditions" component={TermsConditions} />
          <Route path="/termsconditions" component={TermsConditions} />
        </Switch> */}
        {/* <Route path="/termsconditions" component={TermsConditions} /> */}
      </React.Fragment>
    );
  }
}

export default App;
