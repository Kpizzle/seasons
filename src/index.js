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
    this.state = {lat: null};
  }

  //Must be defined
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
