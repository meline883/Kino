import React from "react";
import './css/trending.css'


export const Trending = () => {
    return (
        <>
            <section className="trending">
                <h2>Trending Movies</h2>
                <div className="movies-grid">
                    <div className="movie-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTTPFHHT21xQRs4hdLBLQ9kU2udozFvbLDRBJJLu5eECsOROZtsg0VSS3Zod0tqHCCgfI&usqp=CAU" alt="Movie 1" />
                        <p>Gladiator Movie</p>
                    </div>
                    <div className="movie-card">
                        <img src="https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="Movie 2" />
                        <p>The Batman</p>
                    </div>

                    <div className="movie-card">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68ow_KJcGd4PDu0MyqJUGGl1suRj1_RO0uA&s" />
                        <p>Joker: Folie à Deux</p>
                    </div>
                    <div className="movie-card">
                        <img src="https://redevents.ge/upload/000/u2/0/8/interstellar-mystery-ensemble-photo-xs-slider-xs.webp" />
                        <p>Interstellar</p>
                    </div>
                    <div className="movie-card">
                        <img src="https://ticketing.oz.veezi.com/Media/Poster?siteToken=0h6b7bp39ac7eey7fpcw00w430&code=0000003637&isHighRes=true" />
                        <p>We Live in Time</p>
                    </div>
                    <div className="movie-card">
                        <img src="https://m.media-amazon.com/images/M/MV5BYjBkOWUwODYtYWI3YS00N2I0LWEyYTktOTJjM2YzOTc3ZDNlXkEyXkFqcGc@._V1_.jpg" />
                        <p>Mufasa: The Lion King</p>
                    </div>
                    <div className="movie-card">
                        <img src="https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_QL75_UX140_CR0,0,140,207_.jpg" alt="Movie 2" />
                        <p>Moana 2</p>
                    </div>
                    <div className="movie-card">
                        <img src="https://resizing.flixster.com/dHIwB8rWA2iUW40RVa4qy6QeB94=/206x305/v2/https://resizing.flixster.com/9UpMcPglTmQZMezfPXOWN9QDZ7k=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU3ZDRmN2JjLTZkYjQtNGMxNC04OTE3LWU5NTIwZmI4ZjE3OC5qcGc=" alt="Movie 2" />
                        <p>Dear Santa</p>
                    </div>
                </div>
            </section>
        </>
    )
}