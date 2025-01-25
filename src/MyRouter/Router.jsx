import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Menu } from "../NavBar/Menu";
import { Home } from "../components/Home";
import MovieDetails from "../components/MovieDetails";
import MovieList from "../components/MovieList";

export const MyRouter = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <BrowserRouter>
            <Menu onSearch={handleSearch} />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Պահպանել միայն մեկ MovieList route */}
                <Route path="/MovieList" element={<MovieList searchTerm={searchTerm} />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
};
