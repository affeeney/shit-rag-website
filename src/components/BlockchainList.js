import React, { useState, useEffect } from "react";

const BlockchainList = () => {
  const [blockchainData, setBlockchainData] = useState([]);

  // Fetch blockchain analytics data from API (e.g., CoinGecko or custom API)
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => response.json())
      .then((data) => setBlockchainData(data))
      .catch((error) => console.error("Error fetching blockchain data:", error));
  }, []);

  return (
    <div className="blockchain-list">
      <h2>Top Blockchain Analytics</h2>
      {blockchainData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        blockchainData.map((blockchain) => (
          <div key={blockchain.id} className="blockchain-card">
            <h3>{blockchain.name}</h3>
            <p>Price: ${blockchain.current_price}</p>
            <p>Market Cap: ${blockchain.market_cap}</p>
            <p>24h Change: {blockchain.price_change_percentage_24h}%</p>
          </div>
        ))
      )}
    </div>
  );
};

export default BlockchainList;

