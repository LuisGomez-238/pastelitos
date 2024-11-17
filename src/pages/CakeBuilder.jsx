import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CakePreview from '../components/CakePreview';
import { Heart, Star, Sparkles, Cake } from 'lucide-react';

function CakeBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [cakeChoices, setCakeChoices] = useState({
    size: '',
    flavor: 'vanilla',
    layers: 1,
    filling: '',
    frosting: '',
    toppings: [],
    message: '',
  });

  const sizes = [
    { id: 'small', name: '6" Round', serves: '8-10', price: 35 },
    { id: 'medium', name: '8" Round', serves: '12-15', price: 45 },
    { id: 'large', name: '10" Round', serves: '18-20', price: 55 },
  ];

  const flavors = [
    { id: 'vanilla', name: 'Vanilla', color: '#F5F5DC' },
    { id: 'chocolate', name: 'Chocolate', color: '#4A3728' },
    { id: 'strawberry', name: 'Strawberry', color: '#FFB5C5' },
    { id: 'redVelvet', name: 'Red Velvet', color: '#A42127' },
  ];

  const fillings = [
    { id: 'vanilla', name: 'Vanilla Cream', color: '#FFF4E0', icon: Star },
    { id: 'chocolate', name: 'Chocolate Dream', color: '#3C2A21', icon: Heart },
    { id: 'strawberry', name: 'Strawberry Love', color: '#FFB6C1', icon: Heart },
    { id: 'lemon', name: 'Lemon Sparkle', color: '#FFEF82', icon: Sparkles },
  ];

  const frostings = [
    { id: 'vanilla', name: 'Vanilla Buttercream', color: '#FFFDD0' },
    { id: 'chocolate', name: 'Chocolate', color: '#3C2A21' },
    { id: 'strawberry', name: 'Strawberry', color: '#FFB6C1' },
    { id: 'cream', name: 'Whipped Cream', color: '#FFFFFF' },
  ];

  const toppings = [
    { id: 'sprinkles', name: 'Rainbow Sprinkles' },
    { id: 'chocolate', name: 'Chocolate Shavings' },
    { id: 'fruit', name: 'Fresh Fruit' },
    { id: 'flowers', name: 'Edible Flowers' },
  ];

  const handleChoice = (type, value) => {
    setCakeChoices(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleToppingToggle = (toppingId) => {
    setCakeChoices(prev => ({
      ...prev,
      toppings: prev.toppings.includes(toppingId)
        ? prev.toppings.filter(id => id !== toppingId)
        : [...prev.toppings, toppingId]
    }));
  };

  const SizeSelector = () => (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-pink-300 shadow-lg">
      <h2 className="font-seasons text-3xl text-y2k-pink mb-4">
        Choose Your Size 🎂
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {sizes.map(size => (
          <button
            key={size.id}
            onClick={() => handleChoice('size', size.id)}
            className={`${
              cakeChoices.size === size.id
                ? 'bg-pink-400 text-white'
                : 'bg-white text-pink-500 hover:bg-pink-50'
            } p-4 rounded-xl border-2 border-pink-200 transition-colors`}
          >
            <div className="font-bold">{size.name}</div>
            <div className="text-sm">Serves {size.serves}</div>
            <div className="font-bold mt-2">${size.price}</div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-seasons text-5xl text-y2k-pink text-center mb-8">
          ✨ Design Your Dream Cake ✨
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Options Section */}
          <div className="space-y-6">
            {/* Size Selection */}
            <SizeSelector />

            {/* Layer Selection - Moved right after size */}
            {cakeChoices.size && (
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-pink-300 shadow-lg">
                <h2 className="font-seasons text-3xl text-y2k-pink mb-4 flex items-center gap-2">
                  <Cake className="w-6 h-6" />
                  Choose Your Layers
                </h2>
                
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handleChoice('layers', Math.max(1, (Number(cakeChoices.layers) || 1) - 1))}
                    className="w-12 h-12 rounded-full bg-pink-400 text-white font-bold text-2xl 
                      hover:bg-pink-500 transition-colors flex items-center justify-center"
                  >
                    -
                  </button>
                  
                  <div className="w-20 text-center">
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={cakeChoices.layers || 1}
                      onChange={(e) => handleChoice('layers', Math.min(10, Math.max(1, Number(e.target.value))))}
                      className="w-full text-center bg-white rounded-xl border-2 border-pink-300 
                        font-bold text-2xl text-pink-500 focus:outline-none focus:ring-2 
                        focus:ring-pink-200"
                    />
                    <span className="text-sm text-pink-400">layers</span>
                  </div>

                  <button
                    onClick={() => handleChoice('layers', Math.min(10, (Number(cakeChoices.layers) || 1) + 1))}
                    className="w-12 h-12 rounded-full bg-pink-400 text-white font-bold text-2xl 
                      hover:bg-pink-500 transition-colors flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            {/* Flavor Selection */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Choose Your Flavor</h2>
              <div className="grid grid-cols-2 gap-4">
                {flavors.map(flavor => (
                  <button
                    key={flavor.id}
                    onClick={() => handleChoice('flavor', flavor.id)}
                    className={`${
                      cakeChoices.flavor === flavor.id
                        ? 'ring-2 ring-pink-500'
                        : 'hover:bg-pink-50'
                    } p-4 rounded-lg border-2 border-pink-200 transition-all`}
                  >
                    <div className="h-8 w-8 rounded-full mx-auto mb-2"
                      style={{ backgroundColor: flavor.color }} />
                    <div className="font-medium">{flavor.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Filling Selection */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Choose Your Filling</h2>
              <div className="grid grid-cols-2 gap-4">
                {fillings.map(filling => (
                  <button
                    key={filling.id}
                    onClick={() => handleChoice('filling', filling.id)}
                    className={`${
                      cakeChoices.filling === filling.id
                        ? 'ring-2 ring-pink-500'
                        : 'hover:bg-pink-50'
                    } p-4 rounded-lg border-2 border-pink-200 transition-all`}
                  >
                    <div className="h-8 w-8 rounded-full mx-auto mb-2"
                      style={{ backgroundColor: filling.color }} />
                    <div className="font-medium">{filling.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Frosting Selection */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Choose Your Frosting</h2>
              <div className="grid grid-cols-2 gap-4">
                {frostings.map(frosting => (
                  <button
                    key={frosting.id}
                    onClick={() => handleChoice('frosting', frosting.id)}
                    className={`${
                      cakeChoices.frosting === frosting.id
                        ? 'ring-2 ring-pink-500'
                        : 'hover:bg-pink-50'
                    } p-4 rounded-lg border-2 border-pink-200 transition-all`}
                  >
                    <div className="h-8 w-8 rounded-full mx-auto mb-2"
                      style={{ backgroundColor: frosting.color }} />
                    <div className="font-medium">{frosting.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Toppings Selection */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Choose Your Toppings</h2>
              <div className="grid grid-cols-2 gap-4">
                {toppings.map(topping => (
                  <button
                    key={topping.id}
                    onClick={() => handleToppingToggle(topping.id)}
                    className={`${
                      cakeChoices.toppings.includes(topping.id)
                        ? 'bg-pink-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-pink-50'
                    } p-4 rounded-lg border-2 border-pink-200 transition-colors`}
                  >
                    <div className="font-medium">{topping.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Add a Message</h2>
              <textarea
                value={cakeChoices.message}
                onChange={(e) => handleChoice('message', e.target.value)}
                placeholder="Enter your cake message..."
                className="w-full p-4 rounded-lg border-2 border-pink-200 
                  focus:border-pink-500 focus:ring-2 focus:ring-pink-200 
                  outline-none transition-colors resize-none"
                rows="3"
              />
            </div>
          </div>

          {/* Sticky Preview Section */}
          <div className="lg:sticky lg:top-24 h-fit">
            <CakePreview cakeChoices={cakeChoices} />
            {/* Order Summary */}
            <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-pink-300 shadow-lg">
              <h2 className="font-bold text-2xl text-pink-500 mb-4">Order Summary ✨</h2>
              <div className="space-y-4">
                {cakeChoices.size && (
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span>{sizes.find(s => s.id === cakeChoices.size)?.name}</span>
                  </div>
                )}
                {/* Add other summary items */}
                <button className="w-full bg-pink-500 text-white py-3 rounded-lg 
                  hover:bg-pink-600 transition-colors">
                  Complete Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CakeBuilder;