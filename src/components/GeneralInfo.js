import React, { Component } from "react";
import TextSection from "./TextSection.js";

class GeneralInfo extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      editMode: true,
    };

    this.onSubmitTask = this.onSubmitTask.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    if (this.state.editMode === true) {
      this.setState({
        editMode: false,
      });
    } else {
      this.setState({
        editMode: true,
      });
    }
  };

  render() {
    if (!this.state.editMode) {
      return (
        <TextSection
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phone={this.state.phone}
          onSubmitTask={this.onSubmitTask}
        />
      );
    } else {
      return (
        <form action="" onSubmit={this.onSubmitTask}>
          <label>First Name:</label>
          <input
            placeholder="First Name"
            type="text"
            name="firstName"
            value={this.firstName}
            onChange={this.handleChange}
            required
          />

          <label>Last Name:</label>
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={this.lastName}
            onChange={this.handleChange}
            required
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="example@gmail.com"
            name="email"
            value={this.email}
            onChange={this.handleChange}
            required
          />

          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            placeholder="123-456-7890"
            value={this.phone}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Save</button>
        </form>
      );
    }
  }
}

export default GeneralInfo;
