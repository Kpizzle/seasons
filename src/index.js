/* eslint-disable no-useless-constructor */
import React from "react";
import ReactDom from "react-dom";

class App extends React.Component {
  //Not a required app - belongs to JS
  constructor(props) {
    //Called before render function, best place to set state
    //We need to pass props into the constructor
    //And then calling the parent component with the super function.
    super(props);

    //ONLY time you can direct assign is on creation. 
    this.state = {lat: null};

    window.navigator.geolocation.getCurrentPosition(
        (position) => {
            //We called set state to update the state of lat
            //The render function is then updated almost. 
            this.setState({lat: position.coords.latitude})

            //NEVER update state object directly -
            //this.state.lat = position.coords.latitude
        },
        (err) => {
            this.setState({lat: 0})
        }
      );
  }

  //Must be defined
  render() {

    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
