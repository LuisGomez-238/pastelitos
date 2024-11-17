import React from 'react';
import { Link } from 'react-router-dom';
import CakeLogo from '../components/ui/CakeLogo';

function NotFound() {
  return (
    <div className="min-h-screen pt-20 px-4 flex flex-col items-center justify-center">
      <CakeLogo className="w-24 h-24 mb-8 animate-bounce-slow" />
      <h1 className="text-4xl md:text-6xl font-display text-kawaii-hotPink mb-4">
        Oops! 404
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        This page seems to have wandered off...
      </p>
      <Link 
        to="/" 
        className="px-8 py-3 bg-kawaii-gradient text-white rounded-full font-medium hover:opacity-90 transition-opacity"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound; 