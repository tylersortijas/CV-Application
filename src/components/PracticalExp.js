import React, { Component } from "react";

class PracticalExp extends Component {
  render() {
    return (
      <form>
        <label>Company Name:</label>
        <input placeholder="Company Name" type="text" name="companyName" />

        <label>Position Title:</label>
        <input placeholder="Position Title" text="text" name="position" />

        <label>From:</label>
        <input type="date" placeholder="from" name="From" />

        <label>To:</label>
        <input type="date" placeholder="to" name="To" />

        <textarea name="tasks" placeholder="Main Tasks" />

        <button>Save</button>
        <button type="button">Delete</button>
      </form>
    );
  }
}

export default PracticalExp;
