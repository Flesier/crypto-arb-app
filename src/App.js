import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ArbitrageTable from "./components/ArbitrageTable";

function App() {
  const [opportunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch('http://localhost:5000/api/opportunities')
        .then(response => response.json())
        .then(data => setData(opportunities))
        .catch(error => console.error('Error fetching data:', error));
}, []);

  const filteredOpportunities = opportunities.filter((o) =>
    o.coin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-light text-gray-dark">
      <Header />
      <SearchBar onSearch={setSearchQuery} />
      <div className="container mx-auto p-4">
        <ArbitrageTable opportunities={filteredOpportunities} />
      </div>
    </div>
  );
}

export default App;

