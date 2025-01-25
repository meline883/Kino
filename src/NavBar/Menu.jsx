import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './menu.css';

export const Menu = ({ onSearch }) => {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    const handleSearch = () => {
        onSearch(searchTerm); // Pass the search term to the parent
    };

    return (
        <div className={`menu-container ${darkMode ? 'dark' : 'light'}`}>
            <nav className="menu">
                <ul className="menu-list">
                    <li><Link to="/" className="menu-link">Home</Link></li>
                    <li><Link to="/MovieList" className="menu-link">Movies</Link></li>
                </ul>
                {/* Search Section */}
                <div className="menu-search">
                    <input
                        type="text"
                        placeholder="Search movies..."
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="search-button" onClick={handleSearch}>
                        Search
                    </button>
                    <button onClick={toggleTheme} className="theme-toggle">
                        {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>
            </nav>
        </div>
    );
};
