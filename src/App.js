import React, { useState, useEffect } from 'react'
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Favourites from './components/Favourites';
import RemoveFavourite from './components/RemoveFavourite';
function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [favourites, setFavourites] = useState([]);
  const [search, setSearch] = useState('');

  const getMovie = async (search) => {
    const url = `https://www.omdbapi.com/?s=${search}&apikey=52280d8a`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovie(search);
  }, [search]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
      );
    setFavourites(movieFavourites);
  }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items))
  }

  const addToFavourite = (movie) => {
    const newList = [...favourites, movie]
    setFavourites(newList);
    saveToLocalStorage(newList);
  }

  const removeFavourite = (movie) => {
    const newList1 = favourites.filter((favourites) => favourites.imdbID !== movie.imdbID
    );
    setFavourites(newList1);
    saveToLocalStorage(newList1);
  }

  return (
    <div className="pagebody">
      <div className="header">
        <Header title="MovieSearch" />
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="imgbody">
        <List movies={movies} handleFavouriteClick={addToFavourite} favouriteComponent={Favourites} />
      </div>
      <div className="header">
        <Header title="My List" />
      </div>
      <div className="imgbody">
        <List movies={favourites} handleFavouriteClick={removeFavourite} favouriteComponent={RemoveFavourite} />
      </div>

    </div>
  );
};

export default App;
