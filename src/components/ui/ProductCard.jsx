import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="group relative">
      {/* Card Background with Glitter Effect */}
      <div className="absolute inset-0 bg-glitter-gradient rounded-3xl rotate-2 
        group-hover:rotate-3 transition-transform duration-300" />

      {/* Main Card Content */}
      <div className="relative bg-white rounded-3xl p-4 border-2 border-y2k-pink 
        shadow-kawaii group-hover:-translate-y-1 transition-transform duration-300">
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 
              transition-transform duration-500"
          />
          {/* Sparkle Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-y2k-pink/50 
            to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-white animate-bounce-slow" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="font-bubblegum text-2xl text-y2k-pink mb-2">
            {product.name} ✨
          </h3>
          <p className="font-kawaii text-gray-600 mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bubblegum text-xl text-y2k-babypink">
              ${product.price}
            </span>
            <Link
              to={`/product/${product.id}`}
              className="y2k-button text-sm py-2 px-4 flex items-center"
            >
              Order Now
              <Heart className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-y2k-yellow rounded-full 
          border-2 border-white shadow-kawaii flex items-center justify-center 
          group-hover:rotate-12 transition-transform">
          <Star className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard; 