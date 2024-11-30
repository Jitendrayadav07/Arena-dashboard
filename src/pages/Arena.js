import React from 'react';
import Chat from '../components/Chat';

const Arena = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Battle Arena</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Stats Card */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4">Your Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Wins</span>
              <span className="text-green-500 font-medium">24</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Losses</span>
              <span className="text-red-500 font-medium">8</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Win Rate</span>
              <span className="text-blue-500 font-medium">75%</span>
            </div>
          </div>
        </div>

        {/* Active Battles */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4">Active Battles</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-blue-500"></div>
                <span className="text-white">vs Player123</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Join
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-500"></div>
                <span className="text-white">vs Player456</span>
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-medium text-white mb-4">Leaderboard</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-gold-500 font-bold">1.</span>
                <span className="text-white">Champion123</span>
              </div>
              <span className="text-gray-400">2400 Points</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-silver-500 font-bold">2.</span>
                <span className="text-white">Warrior456</span>
              </div>
              <span className="text-gray-400">2250 Points</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-bronze-500 font-bold">3.</span>
                <span className="text-white">Fighter789</span>
              </div>
              <span className="text-gray-400">2100 Points</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Component */}
      <Chat />
    </div>
  );
};

export default Arena;
