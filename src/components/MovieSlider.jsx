import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/movieslider.css'


const MovieSlider = () => {
    const movies = [
        { title: "Movie 1", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eGgvhQb6BActvl6k9UZt0ESTMTff6uFWcKmJzlixY8oEZRSLm1e06FzD-TyaJOdTJCA&usqp=CAU/800x600" },
        { title: "Movie 2", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfWfZ6T3lHAxXdB7K_oHBvfIIuMXiaX56ZTg&s/800x600" },
        { title: "Movie 3", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-xp63SVEHXGBmfEMiyvMwarQkQxDr3vhg5fghAec-kCj-bfCmvVYKG8ZNnU7EfyCkaNI&usqp=CAU/800x600" },
    ];

    const settings = {
        dots: true, // Ցուցադրում է կետերը սլայդերի համար
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Միայն մեկ սլայդ ցուցադրելու համար
        slidesToScroll: 1,
        arrows: true, // Սլաքներ ավելացնելու համար
    };

    return (
        <div className="movie-slider">
            <h2>Featured Movies</h2>
            <Slider {...settings}>
                {movies.map((movie, index) => (
                    <div key={index} className="movie">
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MovieSlider;
