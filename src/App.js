import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import MovieCard from './components/MovieCard';
import MovieDialog from './components/MovieDialog';
class App extends Component {
  state = { movies: [], selectedMovie: null, searchText: ''};

  selectMovie = movie => this.setState({selectedMovie: movie});
  clearMovie = () => this.setState({selectedMovie: null});
  searchTextChanged = e => this.setState({searchText: e.target.value});
search = async e =>{
  e.preventDefault();

const {searchText} = this.state;

const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&query=${searchText}`
    );
const json = await response.json();
this.setState({movies:json.results});

};


  async componentDidMount() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1`
    );
    const json = await response.json();
    this.setState({ movies: json.results });
  }



  render() {
    const { movies,selectedMovie, searchText} = this.state;

     return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <TypoGraphy variant="title" color="inherit" className="title">
              Top Movies
            </TypoGraphy>
            <form onSubmit={this.search}>
              <Input
                type="search"
                placeholder = " Search"
                value={searchText}
                onChange = {this.searchTextChanged}
                startAdornment={
                  <InputAdornment>
                    <span role="img" aria-label="Search">
                      🔍
                    </span>
                  </InputAdornment>
                }
              />
            </form>
          </Toolbar>
        </AppBar>
        <div className="movies">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              selectMovie={this.selectMovie}
            />
          ))}
        </div>
        <MovieDialog movie={selectedMovie} handleClose={this.clearMovie} />
      </div>
    );
  }
}

export default App;
  