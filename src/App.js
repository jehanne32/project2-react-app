import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import MovieTitle from "./MovieTitle";
import MovieStars from "./MovieStars";
import MovieCrew from "./MovieCrew";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      film: null,
      displayMenu: false,
      movieTitlesArray: [],
      movieStarsArray: [],
      movieCreditsArray: []
    };
  }

  onSearchTitleSubmit = userentry => {
    const movieUrlEndpoint = `https://api.themoviedb.org/3/search/movie?query=${userentry}&language=en-US&page=1&include_adult=false&api_key=0cdde6f089f29d619490eee523df4e10`;
    axios({
      url: movieUrlEndpoint,
      method: "get"
    })
      .then(response => {
        console.log(response.data.results)
        this.setState({ movieTitlesArray: response.data.results });
        return response.data.results[0].id
      })
      .then(movieId => {
        //MAKE API CALL TO CREDITS ENDPOINT
          return axios({
            method: 'GET',
            url: `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=0cdde6f089f29d619490eee523df4e10`
          })
        })
        .then(response => {
          this.setState({
            movieCreditsArray: response.data
          })
          console.log(response.data)
        })
      .catch(() => {
        console.log("error");
      });
  };

  onSearchStarsSubmit = userentry => {
    const movieUrlEndpoint = `https://api.themoviedb.org/3/search/movie?query=${userentry}&language=en-US&page=1&include_adult=false&api_key=0cdde6f089f29d619490eee523df4e10`;
    axios({
      url: movieUrlEndpoint,
      method: "get"
    })
      .then(response => {
      
        this.setState({ movieStarsArray: response.data.results });
      })
      .catch(() => {
        console.log("error");
      });
  };

  render() {
    return (
      <Router>
        <div className="App">        
          <h1 id="movie">Movie</h1>
          <h1 id="maven">Maven</h1>
          <h1 id="madness">Madness!</h1>
          </div>
        <nav className="nav">        
          <Link to="/MovieStars">Movie Stars</Link>{" |  "}
          <Link to="/MovieTitle">Movie Title</Link>{" |  "}
          <Link to="/MovieCrew">Movie Crew</Link>
          
        </nav>
        <div>
          <Route
            path="/MovieStars"
            component={() => (
              <MovieStars
                appSubmitHandler={this.onSearchStarsSubmit}
                MovieStars={MovieStars}
                movies={this.state.movieStarsArray}
              />
            )}
          />
          <Route
            path="/MovieTitle"
            component={() => (
            <MovieTitle
              appSubmitHandler={this.onSearchTitleSubmit}
               MovieTitle={MovieTitle}
               movies={this.state.movieTitlesArray}
                />
            )}

          />
          <Route
            path="/MovieCrew"
            component={() => 
            <MovieCrew 
              movieCreditsArray={this.state.movieCreditsArray.crew} 
              appSubmitHandler={this.onSearchTitleSubmit}
              />
            }
          />
        </div>
      </Router>
    );
  }
}

export default App;
