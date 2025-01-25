import React from "react";
import './css/trailer.css'


export const Trailer = () => {
    return (
        <>
            <section className="trailers">
                <h2>Watch Trailers</h2>
                <div className="trailer-grid">
                    <div className="trailer">
                        <iframe
                            src="https://www.youtube.com/embed/Cr7z5Q7oJc0"
                            title="Movie Trailer"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="trailer">
                        <iframe
                            src="https://www.youtube.com/embed/P5ieIbInFpg"
                            title="Movie Trailer"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="trailer">
                        <iframe
                            src="https://www.youtube.com/embed/o17MF9vnabg"
                            title="Movie Trailer"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="trailer">
                        <iframe
                            src="https://www.youtube.com/embed/hDZ7y8RP5HE"
                            title="Movie Trailer"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="trailer">
                        <iframe
                            src="https://www.youtube.com/embed/_OKAwz2MsJs"
                            title="Movie Trailer"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="trailer">
                        <iframe
                            src="https://www.youtube.com/embed/2LqzF5WauAw"
                            title="Movie Trailer"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </section>

        </>
    )
}