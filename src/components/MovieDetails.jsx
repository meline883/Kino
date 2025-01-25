import React from "react";
import { useParams } from "react-router-dom";
import movies from "../moviesData";

const MovieDetails = () => {
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === parseInt(id));

    if (!movie) {
        return <div>Movie not found!</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: "300px", marginBottom: "20px" }}
            />
            <div>
                <h3>Watch Movie:</h3>
                <iframe
                    width="560"
                    height="315"
                    src={movie.videoUrl}
                    title={movie.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default MovieDetails;