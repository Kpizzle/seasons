import React from "react";
import ReactDom from "react-dom";

function App() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );
  return <div>Hello</div>;
}

ReactDom.render(<App/ >, document.querySelector("#root"));
