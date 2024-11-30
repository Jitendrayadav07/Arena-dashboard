import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiSwordLine } from 'react-icons/ri';
import { BiStore } from 'react-icons/bi';
import { MdContactSupport } from 'react-icons/md';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('arena');

  const menuItems = [
    { id: 'arena', icon: RiSwordLine, label: 'Arena', path: '/arena' },
    { id: 'market', icon: BiStore, label: 'Market Trade', path: '/market' },
    { id: 'contact', icon: MdContactSupport, label: 'Contact Us', path: '/contact' }
  ];

  return (
    <div className="fixed left-0 h-screen w-64 bg-gray-900 text-white shadow-lg">
      <div className="flex items-center justify-center h-20 border-b border-gray-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          CryptoVerse
        </h1>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center px-6 py-4 text-gray-300 hover:bg-gray-800 transition-colors duration-200 ${
                activeItem === item.id ? 'bg-gray-800 border-r-4 border-blue-500' : ''
              }`}
              onClick={() => setActiveItem(item.id)}
            >
              <Icon className="w-6 h-6 mr-3" />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      <div className="absolute bottom-0 w-full p-6 border-t border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-400">Network Status: Online</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
