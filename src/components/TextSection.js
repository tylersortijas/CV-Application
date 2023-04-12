import React, { Component } from "react";

class TextSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="textSection">
                <p><span>First Name: </span>{this.props.firstName}</p>
                <p><span>Last Name: </span>{this.props.lastName}</p>
                <p><span>Email: </span>{this.props.email}</p>
                <p><span>Phone: </span>{this.props.phone}</p>
                <button onClick={this.props.onSubmitTask}>Edit</button>
            </div>
        );
    };
};

export default TextSection;
