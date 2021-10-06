import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const List = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    return (
   <>
            {
            props.movies == null ? "":
            props.movies.map((movie, index) => (  
                <div key={movie.imdbID} className=" image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt={movie.Title} ></img>
                    <div onClick={() =>
                        props.handleFavouriteClick(movie)} className="overlay d-flex">
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
       </>

    );
};

export default List
