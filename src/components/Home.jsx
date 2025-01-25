import React from "react";
import './css/home.css'
import { Trending } from "./Trending";
import { Trailer } from "./Trailer";
import Footer from "./footer";
import MovieSlider from "./MovieSlider";
import Testimonials from "./Testimonials";




export const Home = () => {
    return (

        <>

            <div className="home">
                <section className="hero">
                    <div className="hero-content">
                        <h1>Welcome to Cinema World</h1>
                        <p>Discover the latest movies and watch your favorites!</p>
                        <button>Watch Now</button>
                    </div>
                </section>

                <Trending />
                <MovieSlider/>
                <Trailer />
                <Testimonials/>
                <Footer />
            </div>
        </>
    )
}