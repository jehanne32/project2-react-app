import React, { Component } from "react";

class MovieTitle extends Component {
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
    let title;
    let overview;
    let release_date;
    let backdrop_path;
    let poster_path;

    if (this.props.movies.length > 0) {
      console.log(this.props.movies[0]);
      title = this.props.movies[0].title;
      overview = this.props.movies[0].overview;
      release_date = this.props.movies[0].release_date;
      backdrop_path = `https://image.tmdb.org/t/p/w500/${this.props.movies[0].backdrop_path}`;
      poster_path = `https://image.tmdb.org/t/p/w500/${this.props.movies[0].poster_path}`;
    }

    return (
      <div>
        
        <h2>Movie Title</h2>
        <center><form className="divForm" onSubmit={this.submitHandler}>
          <p class="para">Enter a movie title and click search</p>
          <input className="formInput"type="text" name="title" onChange={this.changeHandler} />
          <input className="formButton"type="submit" />
        </form></center>

        <div>
          <p class="title">{title}</p>
          <p class="title">{release_date}</p>
          <p class="title">{overview}</p>
          <div id="pictures">
          <img class="backdrop" src={backdrop_path} />
          <img class="poster" src={poster_path} />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieTitle;
