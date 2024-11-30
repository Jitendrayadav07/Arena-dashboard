import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiTrendingUp, BiTrendingDown } from 'react-icons/bi';

const Market = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,ripple,cardano&vs_currencies=usd&include_24hr_change=true'
        );
        const formattedData = Object.entries(response.data).map(([id, data]) => ({
          id,
          price: data.usd,
          change24h: data.usd_24h_change
        }));
        setCryptoData(formattedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Market Trade</h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Market Overview */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-white mb-4">Market Overview</h3>
            <div className="space-y-4">
              {cryptoData.map((crypto) => (
                <div key={crypto.id} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <img
                      src={`/crypto-icons/${crypto.id}.svg`}
                      alt={crypto.id}
                      className="w-8 h-8"
                    />
                    <div>
                      <div className="text-white font-medium capitalize">{crypto.id}</div>
                      <div className="text-sm text-gray-400">USD</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">
                      ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </div>
                    <div className={`text-sm flex items-center ${
                      crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {crypto.change24h >= 0 ? (
                        <BiTrendingUp className="mr-1" />
                      ) : (
                        <BiTrendingDown className="mr-1" />
                      )}
                      {Math.abs(crypto.change24h).toFixed(2)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trade Form */}
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-lg font-medium text-white mb-4">Quick Trade</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-2">Select Coin</label>
                <select className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="bitcoin">Bitcoin (BTC)</option>
                  <option value="ethereum">Ethereum (ETH)</option>
                  <option value="ripple">Ripple (XRP)</option>
                  <option value="cardano">Cardano (ADA)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Amount (USD)</label>
                <input
                  type="number"
                  className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter amount..."
                />
              </div>
              <div className="flex space-x-4">
                <button
                  type="button"
                  className="flex-1 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  Buy
                </button>
                <button
                  type="button"
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
                >
                  Sell
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Market;
