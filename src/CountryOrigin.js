import React, { Component } from "react";

class CountryOrigin extends Component {
  constructor(props) {
    super();
    this.state = { countryOrigin: " " };
  }

  submitHandler = event => {
    event.preventDefault();
  };

  changeHandler = event => {
    this.setState({ userentry: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Country of Movie Origin</h1>
        <form onSubmit={this.submitHandler}>
          <p>Enter a country and click submit to see a list of movies from that country.</p>
          <input type="text" onChange={this.changeHandler} />
          <input type="submit" />
        </form>

        <div>
          <p>{this.state.countryOrigin}</p>
        </div>
      </div>
    );
  }

}

export default CountryOrigin;
