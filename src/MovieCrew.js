import React, { Component } from "react";

class MovieCrew extends Component {
  constructor(props) {
    super();
    this.state = {
      movieTitle: [],
      userentry: []
    };
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.appSubmitHandler(this.state.userentry);
  };

  changeHandler = event => {
    this.setState({ userentry: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Movie Crew</h2>
        <center><form onSubmit={this.submitHandler}>
          <p class="para">Enter a movie title and click submit to get the complete crew.</p>
          <input type="text" onChange={this.changeHandler} />
          <input type="submit" />
        </form></center>

        <div>
          <p>{this.state.movieCrew}</p>
        </div>
      </div>
    );
  }

}

export default MovieCrew;
