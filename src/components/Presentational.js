import React from 'react';
import moment from 'moment';

export default function PresentationalComponent(props) {
    return (
        <div>
            <h1>The Time Is:</h1>
            <p> {moment(props.timestamp).format(
                (props.formatLabel == "AM/PM" ? "hh:mm a" : "HH:mm") )}
            </p>
            <button onClick={props.changeFormat}>
                {props.formatLabel}
            </button>
        </div>
    );
}
