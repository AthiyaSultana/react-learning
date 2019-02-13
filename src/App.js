import React, { Component } from "react";
import logo from "./logo.svg";
// import "./App.css";
import Contact from "./components/Contact";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/Contacts";
import { Provider } from "./Context";
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
        <div className="App">
          {/* { <h1>The App Component</h1> }
          { {showHello ? <h4>Hello {name.toUpperCase()}</h4> : null}
        {math} } */}
          <Header branding="Contact Manager" />
          <div className="container">
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
