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
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          qs: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false
          }
        });
        const data = await response.json();
        const opportunities = data.map(coin => ({
          coin: coin.name,
          buyExchange: 'Exchange A', // Placeholder, replace with actual data
          sellExchange: 'Exchange B', // Placeholder, replace with actual data
          buyPrice: coin.current_price,
          sellPrice: coin.current_price * 1.02, // Placeholder, replace with actual data
          profit: coin.current_price * 0.02 // Placeholder, replace with actual data
        }));
        setOpportunities(opportunities);
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