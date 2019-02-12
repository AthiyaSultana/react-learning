import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    console.log("this.props", this.props);
    const { id, name, email, phone } = this.props;
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">id: {id}</li>
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item"> Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};
export default Contact;
