import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ArbitrageTable from "./components/ArbitrageTable";

function App() {
  const [opportunities, setOpportunities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch opportunities from the Flask backend
    const mockData = [
      {
        coin: "Bitcoin",
        buyExchange: "Binance",
        sellExchange: "Kraken",
        buyPrice: 45000,
        sellPrice: 46000,
        profit: 1000,
      },
      {
        coin: "Ethereum",
        buyExchange: "Coinbase",
        sellExchange: "Binance",
        buyPrice: 3000,
        sellPrice: 3200,
        profit: 200,
      },
      {
        coin: "Solana",
        buyExchange: "KuCoin",
        sellExchange: "OKX",
        buyPrice: 20,
        sellPrice: 22,
        profit: 2,
      },
    ];
    setOpportunities(mockData);
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

