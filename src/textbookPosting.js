import React, { Component } from 'react';
import { Map } from 'immutable';


class TextbookPosting extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>{this.props.name}, {this.props.price}</p>
                <img url={this.props.textbookURL}/>
            </div>
        )
    }
}



export default TextbookPosting;