import React, { Component } from 'react';
import moment from 'moment';

export default class StatefulComponent extends Component {
    state = {
        formatLabel: "AM/PM",
        timestamp: moment()
    }
    
    changeFormat = () => {
        let newFormat;

        if(this.state.formatLabel == "AM/PM") {
            newFormat = "24HR";
        } else {
            newFormat = "AM/PM";
        }
        this.setState({formatLabel: newFormat})
    }

    render() {
        return (
            <div>
                <h1>The Time Is:</h1>
                <p> {moment(this.state.timestamp).format(
                    (this.state.formatLabel == "AM/PM" ? "hh:mm a" : "HH:mm") )}
                </p>
                <button onClick={this.changeFormat}>
                    {this.state.formatLabel}
                </button>
            </div>
        );
    }
}
