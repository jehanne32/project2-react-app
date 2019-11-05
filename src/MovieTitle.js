import React, { Component } from "react";

class MovieTitle extends Component {
  constructor(props) {
    super();
    this.state = {
      movieTitle: "",
      userentry: ""
    };
    console.log('movietitle props', props)
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
    // <p key={index}>{movie.title}</p>

    return (
      <div>
        <h2>Movie Title</h2>
        <form onSubmit={this.submitHandler}>
          <p>Enter a movie title and click search</p>
          {/* <input className="titleInput" type="text" /> */}
          <input type="text" onChange={this.changeHandler} />
          {/* <button onClick={(e) => this.changeHandler(e)} >Search</button> */}
          <input type="submit" />
        </form>

        <div>
          <p>{this.state.userentry}</p>
        </div>
      </div>
    );
  }
}

export default MovieTitle;







// import React, { Component } from "react";

// class MovieTitle extends Component {
//   constructor(props) {
//     super();
//     this.state = {
//       movieTitle: "",
//       userentry: ""
//     };
//   }

//   submitHandler = event => {
//     event.preventDefault();

//     this.props.appSubmitHandler(this.state.userentry);
//   };

//   changeHandler = event => {
//     this.setState({ userentry: event.target.value });
//   };

//   render() {
//     console.log(this.props.movies);
//     let allMovies = this.props.movies.map((movie, index) => (
//       <p key={index}>{movie.title}</p>
//     ));

//     return (
//       <div>
//         <h1>Movie Title</h1>
//         <form onSubmit={this.submitHandler}>
//           <p>Enter a movie title and click submit</p>
//           <input type="text" onChange={this.changeHandler} />
//           <input type="submit" />
//         </form>

//         <div>{allMovies}</div>
//         <div>
//           <p>{this.state.movieTitle}</p>
//         </div>
//       </div>
//     );
//   }
// }

// export default MovieTitle;
