import React, { useState } from 'react';
import { Heart, Star, Sparkles, Cherry } from 'lucide-react';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cakes', icon: Star, color: 'bg-y2k-pink' },
    { id: 'signature', name: 'Signature', icon: Heart, color: 'bg-y2k-lavender' },
    { id: 'custom', name: 'Custom', icon: Sparkles, color: 'bg-y2k-yellow' },
    { id: 'seasonal', name: 'Seasonal', icon: Cherry, color: 'bg-y2k-mint' },
  ];

  return (
    <div className="min-h-screen pt-20 bg-glitter-gradient">
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-bubblegum text-6xl text-white mb-4 drop-shadow-[0_2px_2px_rgba(255,107,158,0.5)]">
            ✨ Sweet Menu ✨
          </h1>
          <p className="font-kawaii text-xl text-white/90">
            Discover our magical collection of kawaii cakes! 🎂
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? 'scale-110 shadow-kawaii'
                  : 'hover:scale-105'
              } ${category.color} px-6 py-3 rounded-full text-white font-kawaii
              flex items-center space-x-2 border-2 border-white transition-all duration-300`}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Menu Items */}
          {menuItems.map((item) => (
            <div key={item.id} className="group relative">
              {/* Glitter Background */}
              <div className="absolute inset-0 bg-white/50 rounded-3xl rotate-2 
                group-hover:rotate-3 transition-transform duration-300" />
              
              {/* Card Content */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-6 
                border-2 border-y2k-pink shadow-kawaii 
                group-hover:-translate-y-1 transition-transform duration-300">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 
                      transition-transform duration-500"
                  />
                  {/* Price Tag */}
                  <div className="absolute top-4 right-4 bg-y2k-pink text-white px-4 py-2 
                    rounded-full font-bubblegum border-2 border-white shadow-kawaii">
                    ${item.price}
                  </div>
                </div>

                <h3 className="font-bubblegum text-2xl text-y2k-pink mb-2">
                  {item.name} ✨
                </h3>
                <p className="font-kawaii text-gray-600 mb-4">
                  {item.description}
                </p>

                <button className="w-full y2k-button flex items-center justify-center space-x-2">
                  <span>Order Now</span>
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Decorative Star */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-y2k-yellow 
                rounded-full border-2 border-white shadow-kawaii flex items-center 
                justify-center group-hover:rotate-12 transition-transform">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const menuItems = [
  {
    id: 1,
    name: "Unicorn Dream Cake",
    description: "Magical vanilla cake with rainbow buttercream and edible glitter ✨",
    price: 45,
    image: "/images/unicorn-cake.jpg",
    category: "signature"
  },
  // Add more menu items...
];

export default Menu; 