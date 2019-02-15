import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
import Contact from "./components/contact/Contact";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contact/Contacts";
import { Provider } from "./Context";
import AddContact from "./components/contact/AddContact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
class App extends Component {
  render() {
    // const name = "Athiya";
    // const showHello = false;
    // const showMath = true;
    // let math;
    // if (showMath) {
    //   math = (
    //     <div>
    //       <h4>1+1 = {1 + 1}</h4>
    //     </div>
    //   );
    // } else {
    //   math = null;
    // }
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about/:id" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
