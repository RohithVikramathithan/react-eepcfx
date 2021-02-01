import React from "react";
import Header from "./Header"
import Footer from "./Footer"

  function clicker(e)
  {
        e.preventDefault();
    console.log("hello");
  }

export default class Layout extends React.Component{


  render()
  {
    return(
      <div>
      <Header />
      <h1>hello</h1>
      <button onClick={clicker}>
      click for Hello in console
      </button>
      <Footer />
      </div>
    );
  }
}