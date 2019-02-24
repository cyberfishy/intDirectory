import React, { Component } from 'react';
import HtmlComponent from './components/Html'
import PresentationalComponent from './components/Presentational'
import StatefulComponent from './components/Stateful'
import ContainerComponent from './components/Container'
import moment from 'moment';

class App extends Component {
  render() {
    return (
      <HtmlComponent></HtmlComponent>
/*      <StatefulComponent></StatefulComponent>*/
/*      <PresentationalComponent
        formatLabel="AM/PM"
        timestamp={moment()}
        changeFormat={() => alert("onChangeFormat")}
/*        <ContainerComponent></ContainerComponent>*/
    )
  }
}

export default App;
