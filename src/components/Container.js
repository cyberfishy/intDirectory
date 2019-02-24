import React, { Component } from 'react';
import PresentationalComponent from './Presentational';
import moment from 'moment';

export default class ContainerComponent extends Component {
  state = {
    format: "AM/PM",
    timestamp: moment()
  }

  changeFormat = () => {
    let newFormat;

    if(this.state.format == "AM/PM") {
      newFormat = "24HR";
    } else {
      newFormat = "AM/PM";
    }
    this.setState({format: newFormat})
  }

  render() {
    return (
      <PresentationalComponent
        formatLabel={this.state.format}
        timestamp={this.state.timestamp}
        changeFormat={this.changeFormat}
      />);
  }
}
