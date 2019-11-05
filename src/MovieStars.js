import React, { Component } from "react";

class MovieStars extends Component {
  constructor(props) {
    super();
    this.state = {
      movieStars: "",
      userentry: ""
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
    let allMovies = this.props.movies.map((movie, index) => (
      <p key={index}>{movie.title}</p>
    ));

    return (
      <div>
        <h2>Movie Stars</h2>
        <form onSubmit={this.submitHandler}>
          <p>Enter a movie star's name and click submit</p>
          <input type="text" name="stars" onChange={this.changeHandler} />
          <input type="submit" />
        </form>

        <div>{allMovies}</div>
        <div>
          <p>{this.state.movieStars}</p>
        </div>
      </div>
    );
  }
}

export default MovieStars;
