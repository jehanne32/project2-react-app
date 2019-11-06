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
    let tenCrewMembersArray = this.props.MovieCrew.slice(0, 10)
    console.log(tenCrewMembersArray)

    const i = tenCrewMembersArray;
    for (i = 0; i < tenCrewMembersArray.length; i++) {
       document.getElementById([0]).innerHTML = tenCrewMembersArray;
    }

    return (
      <div>
        <h2>Movie Crew</h2>
        <center><form onSubmit={this.submitHandler}>
          <p class="para">Enter a movie title and click submit to get the complete crew.</p>
          <input className="formInput"type="text" onChange={this.changeHandler} />
          <input className="formButton"type="submit" />
        </form></center>

        <div>
          {/* <p>{this.props.movieCrew}</p> */}
        </div>
      </div>
    );
  }

}

export default MovieCrew;
