import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
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
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            email={contact.email}
            phone={contact.phone}
          />
        ))}
      </div>
    );
  }
}
export default Contacts;
