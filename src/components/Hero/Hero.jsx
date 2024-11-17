import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-glitter-gradient overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-float delay-100">
          <Star className="w-12 h-12 text-y2k-yellow" />
        </div>
        <div className="absolute top-40 right-20 animate-float delay-200">
          <Heart className="w-16 h-16 text-y2k-pink" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float delay-300">
          <Sparkles className="w-10 h-10 text-y2k-lavender" />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          <h1 className="font-bubblegum text-6xl sm:text-7xl text-white mb-6 
            drop-shadow-[0_2px_2px_rgba(255,107,158,0.5)]">
            ✨ Pastelitos <3 ✨
          </h1>
          
          <p className="font-kawaii text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            We make cakes! 🎂
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/cake-builder" className="y2k-button group">
              <span className="flex items-center">
                Design Your Cake
                <Heart className="w-5 h-5 ml-2 group-hover:text-y2k-yellow transition-colors" />
              </span>
            </Link>
            
            <Link to="/gallery" className="y2k-button bg-y2k-lavender hover:bg-y2k-blue">
              <span className="flex items-center">
                View Gallery
                <Star className="w-5 h-5 ml-2" />
              </span>
            </Link>
          </div>
        </div>

        {/* Floating Images */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative group animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="absolute inset-0 bg-y2k-pink rounded-2xl rotate-3 group-hover:rotate-6 transition-transform" />
              <img
                src={`/images/cake-${i}.jpg`}
                alt={`Kawaii Cake ${i}`}
                className="relative rounded-2xl border-4 border-white shadow-kawaii 
                  group-hover:-translate-y-2 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 