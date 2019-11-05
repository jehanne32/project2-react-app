import React, { Component } from "react";

class MovieCrew extends Component {
  constructor(props) {
    super();
    this.state = { movieCrew: " " };
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
        <h1>Movie Crew</h1>
        <form onSubmit={this.submitHandler}>
          <p>Enter a movie title and click submit</p>
          <input type="text" onChange={this.changeHandler} />
          <input type="submit" />
        </form>

        <div>
          <p>{this.state.movieCrew}</p>
        </div>
      </div>
    );
  }

}

export default MovieCrew;
