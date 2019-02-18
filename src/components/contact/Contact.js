import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";
class Contact extends Component {
  state = {
    showContactInfo: true
  };

  // constructor() {
  //   super();
  //   this.state = {};
  //   this.showClick = this.showClick.bind(this);
  // }
  showClick = () => {
    // console.log("name", name);
    // console.log("e", e);
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  onDeleteClick = async (id, dispatch) => {
    console.log("id", id);
    //this.props.deleteContactHandler();
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };
  render() {
    const { id, name, email, phone } = this.props.contact;
    // const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}{" "}
                <i
                  onClick={this.showClick}
                  className="fa fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                  className="fa fa-times"
                  style={{ cursor: "pointer", color: "red", float: "right" }}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      marginRight: "1rem",
                      color: "black"
                    }}
                  />
                </Link>
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">id: {id}</li>
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item"> Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  // id: PropTypes.number.isRequired,
  // name: PropTypes.string.isRequired,
  // email: PropTypes.string.isRequired,
  // phone: PropTypes.string.isRequired
  contact: PropTypes.object.isRequired
  // deleteContactHandler: PropTypes.func.isRequired
};
export default Contact;
