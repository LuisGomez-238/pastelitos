import React from 'react';
import CakeLogo from './CakeLogo';

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-kawaii-pink/30 border-t-kawaii-hotPink animate-spin"></div>
        <CakeLogo className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6" />
      </div>
    </div>
  );
}

export default LoadingSpinner; 