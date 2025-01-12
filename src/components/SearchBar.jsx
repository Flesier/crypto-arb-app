import React from "react";

function SearchBar({ onSearch }) {
    return (
        <div className="flex justify-center my-4">
            <input
                type="text"
                placeholder="Search by coin name..."
                className="border p-2 rounded-l-md w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => onSearch(e.target.value)}
            />
            <button className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Search
            </button>
        </div>
    );
}

export default SearchBar;