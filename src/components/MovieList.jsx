import React, { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../moviesData";
import './css/movielist.css'



const genres = ["All","Sci-Fi","Action","Drama","Romance","Crime","Animation"," Fantasy"]; 

const MovieList = ({ searchTerm }) => {
    const [selectedGenre, setSelectedGenre] = useState("All"); 

    return (
        <div>
            <h1>Movies</h1>

           
            <div>
                <label htmlFor="genre-select">Filter by Genre:</label>
                <select
                    id="genre-select"
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value)}
                >
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                {movies
                    .filter((movie) => {
                        const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
                        const matchesGenre = selectedGenre === "All" || movie.genre === selectedGenre;
                        return matchesSearch && matchesGenre;
                    })
                    .map((movie) => (
                        <div key={movie.id} style={{ width: "200px" }}>
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={movie.poster}
                                    alt={movie.title}
                                    style={{ width: "100%" }}
                                />
                            </Link>
                            <h3>{movie.title}</h3>
                            <p>Genre: {movie.genre}</p> 
                        </div>
                    ))}
            </div>
        </div>
    );
};
export default MovieList;
