import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../Context";

class Contacts extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     contacts: [
  //       {
  //         id: 1,
  //         name: "Athiya Sultana",
  //         email: "athiya@mailinator.com",
  //         phone: "222 - 222 - 2222"
  //       },
  //       {
  //         id: 2,
  //         name: "Anju",
  //         email: "anju@mailinator.com",
  //         phone: "333 - 333 - 3333"
  //       },
  //       {
  //         id: 3,
  //         name: "Sonu",
  //         email: "sonu@mailinator.com",
  //         phone: "444 - 444 - 4444"
  //       }
  //     ]
  //   };
  // }
  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       name: "Athiya Sultana",
  //       email: "athiya@mailinator.com",
  //       phone: "222 - 222 - 2222"
  //     },
  //     {
  //       id: 2,
  //       name: "Anju",
  //       email: "anju@mailinator.com",
  //       phone: "333 - 333 - 3333"
  //     },
  //     {
  //       id: 3,
  //       name: "Sonu",
  //       email: "sonu@mailinator.com",
  //       phone: "444 - 444 - 4444"
  //     }
  //   ]
  // };
  // deleteContact = id => {
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter(contact => contact.id !== id);
  //   this.setState({ contacts: newContacts });
  // };
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span>
                List
              </h1>
              {contacts.map(contact => (
                <Contact key={contact.id} id={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>

      // <div>
      //   {contacts.map(contact => (
      //     <Contact
      //       key={contact.id}
      //       // id={contact.id}
      //       contact={contact}
      //       // name={contact.name}
      //       // email={contact.email}
      //       // phone={contact.phone}
      //       deleteContactHandler={this.deleteContact.bind(this, contact.id)}
      //     />
      //   ))}
      // </div>
    );
  }
}
export default Contacts;
