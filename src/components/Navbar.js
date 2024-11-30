import React from 'react';
import { BiBell, BiWallet } from 'react-icons/bi';
import { FaEthereum } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-[calc(100%-16rem)] h-20 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-8">
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <FaEthereum className="w-6 h-6 text-blue-500" />
          <span className="text-white font-medium">ETH: $2,456.78</span>
        </div>
        <div className="h-6 w-px bg-gray-700"></div>
        <div className="text-gray-400">24h Volume: $1.2B</div>
      </div>
      
      <div className="flex items-center space-x-6">
        <button className="relative p-2 text-gray-400 hover:text-white transition-colors duration-200">
          <BiBell className="w-6 h-6" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <button className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
          <BiWallet className="w-5 h-5" />
          <span>Connect Wallet</span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
          <div>
            <div className="text-sm font-medium text-white">User123</div>
            <div className="text-xs text-gray-400">0x1234...5678</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
