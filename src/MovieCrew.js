import React, { Component } from "react";
import Crew from './Crew'

class MovieCrew extends Component {
  constructor(props) {
    super();
    this.state = {
      movieTitle: [],
      userentry: ''
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
    let tenCrewMembersArray = this.props.movieCreditsArray 
      ? this.props.movieCreditsArray.slice(0, 10)
      : []

    const crewComponentsArray = tenCrewMembersArray.map((crew, index) =>{
      return <Crew key={index} crew={crew}/>
     })

    return (
      <div>
        <h2>Movie Crew</h2>
        <center>
        <p className="para">Enter a movie title and click submit to get the complete crew.</p>
          <form className="divForm" onSubmit={this.submitHandler}>          
            <input className="formInput"type="text" onChange={this.changeHandler} />
            <input className="formButton"type="submit" />
          </form>
        </center>

        <div>
          {crewComponentsArray}
          <p className="title">{title}</p> 
          
        </div>
      </div>
    );
  }

}

export default MovieCrew;
