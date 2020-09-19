/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //We called set state to update the state of lat
        //The render function is then updated almost.
        this.setState({ lat: position.coords.latitude });

        //NEVER update state object directly -
        //this.state.lat = position.coords.latitude
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  //Must be defined
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message='Please allow acccess to location' />;
  }
}

ReactDom.render(<App />, document.querySelector('#root'));
