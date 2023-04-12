import React, { Component } from "react";

class EducationalExp extends Component {
  render() {
    return (
      <form>
        <label>School Name:</label>
        <input type="text" placeholder="School Name" id="schoolName" />

        <label>Title of Study:</label>
        <input type="text" placeholder="Title of Study" />

        <label>From:</label>
        <input type="date" name="from" placeholder="From" />

        <label>To:</label>
        <input type="date" name="to" placeholder="to" />

        <button type="submit">Save</button>
        <button type="button">Delete</button>
      </form>
    );
  }
}

export default EducationalExp;
