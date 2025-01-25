import React from "react";
import './css/testimonials.css'


const testimonials = [
    { user: "John", comment: "Amazing platform to watch movies!" },
    { user: "Sarah", comment: "I found all my favorite films here." },
    { user: "Michael", comment: "A wonderful experience with an excellent selection." },
];

const Testimonials = () => (
    <div className="testimonials-container">
        <h2>User Testimonials</h2>
        <div className="testimonials">
            {testimonials.map((t, index) => (
                <div key={index} className="testimonial-card">
                    <p>"{t.comment}"</p>
                    <h4>- {t.user}</h4>
                </div>
            ))}
        </div>
    </div>
);

export default Testimonials;
