import React, { Component } from "react";
const Context = React.createContext();

const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Athiya Sultana",
        email: "athiya@mailinator.com",
        phone: "222 - 222 - 2222"
      },
      {
        id: 2,
        name: "Anju",
        email: "anju@mailinator.com",
        phone: "333 - 333 - 3333"
      },
      {
        id: 3,
        name: "Sonu",
        email: "sonu@mailinator.com",
        phone: "444 - 444 - 4444"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
