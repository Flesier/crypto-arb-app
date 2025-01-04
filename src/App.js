import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ArbitrageTable from "./components/ArbitrageTable";

function App() {
  const [opportunities, setOpportunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/opportunities', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        setOpportunities(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCryptoData();
  }, []);

  const filteredOpportunities = opportunities.filter((o) =>
    o.coin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-light text-gray-dark">
      <Header />
      <SearchBar onSearch={setSearchQuery} />
      <ArbitrageTable opportunities={filteredOpportunities} />
    </div>
  );
}

export default App;