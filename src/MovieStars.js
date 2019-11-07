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
    let title;
    let allMovies = this.props.movies.map((movie, index) => (
      <p key={index}>{movie.title}</p>
    ));

    return (
      <div>
        <h2>Movie Stars</h2>
       <center><form className="divForm" onSubmit={this.submitHandler}>
          <p className="para">Enter a movie star's name and click submit to see which movies they've starred in.</p>
          <input className="formInput" type="text" name="stars" onChange={this.changeHandler} />
          <input className="formButton" type="submit" />
        </form></center>

        <div>{allMovies}</div>
        <div>
          <p>{this.state.movieStars}</p>
          <p className="title">{title}</p>
        </div>
      </div>
    );
  }
}

export default MovieStars;
