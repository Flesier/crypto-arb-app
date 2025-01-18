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

    // The SearchBar component is a functional component that takes a single prop, onSearch. The function returns a div element containing an input element and a button element. The input element is used to capture the search query entered by the user, and the button element is used to trigger the search action. When the input value changes, the onSearch prop function is called with the updated value as an argument.
    // The input element has a placeholder text, a border, padding, and rounded corners. The button element has a blue background color, white text color, padding, rounded corners, and hover and focus styles. The button is positioned to the right of the input element using flexbox utilities.
    // The SearchBar component is a reusable component that can be used in other parts of the application to enable search functionality.
}

export default SearchBar;