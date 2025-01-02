import React from "react";

function SearchBar({ onSearch }) {
    return (
        <div className="flex justify-center my-4">
            <input
            type="text"
            placeholder="Search by coin name..."
            className="border p-2 rounded-l-md w-1/2 focus:outline-none"
            onChange={(e) => onSearch(e.target.value)}
            />
            <button className="bg-blue text-white px-4 rounded-r-md">Search</button>
        </div>
    );

}

export default SearchBar;