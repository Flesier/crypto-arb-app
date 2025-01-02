import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ArbitrageTable from "./components/ArbitrageTable";

function App() {
  const [opportunities, setOpportunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch opportunities from the Flask backend
    axios.get("http://localhost:5000/arbitrage-opportunities")
      .then((response) => setOpportunities(response.data))
      .catch((error) => console.error("Error fetching data:", error));
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

