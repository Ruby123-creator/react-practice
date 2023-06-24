// Find the issue with the form’s input field in the below code snippet:

import React, { Component } from "react";
 class App extends Component {
  constructor(props) {
	super(props);
	this.state = { name: "" };
  }
   handleSubmit = (event) => {
	event.preventDefault();
	console.log("Submitted Name:", this.state.name);
  };
   render() {
	return (
  	<form onSubmit={this.handleSubmit}>
    	<label>
      	Name:
      	<input type="text" />
   	 </label>
    	<button type="submit">Submit</button>
  	</form>
	);
  }
}
 export default App;