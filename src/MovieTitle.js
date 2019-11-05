import React, { Component } from "react";

class MovieTitle extends Component {
  constructor(props) {
    super();
    this.state = {
      movieTitle: [],
      userentry: []
    };
    // console.log('movietitle props', props)
  }

  submitHandler = event => {
    event.preventDefault();
    this.props.appSubmitHandler(this.state.userentry);
  };

  changeHandler = event => {
    this.setState({ userentry: event.target.value });
    //   const movie = document.querySelector(".titleInput")
    // this.setState({ movieTitle: movie.value });
    //console.log(movie.value);
  };

  render() {
    let title;
    let overview;

    if (this.props.movies.length > 0) {
      console.log(this.props.movies[0])
      title = this.props.movies[0].title
      overview = this.props.movies[0].overview

    }

    // <p key={index}>{movie.title}</p>

    return (
      <div>
        <h2>Movie Title</h2>
        <form onSubmit={this.submitHandler}>
          <p>Enter a movie title and click search</p>
          {/* <input className="titleInput" type="text" /> */}
          <input type="text" name="title" onChange={this.changeHandler} />
          {/* <button onClick={(e) => this.changeHandler(e)} >Search</button> */}
          <input type="submit" />
        </form>

        <div>
          <p>{title}</p>
        
          <p>{overview}</p>
        </div>
      </div>
    );
  }
}

export default MovieTitle;
