import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CakePreview from '../components/CakePreview';
import { Heart, Star, Sparkles, Cake } from 'lucide-react';
import { calculateCakePrice, cakeSizes } from '../utils/pricingLogic';
import { customOptions } from '../data/menuItems';

function CakeBuilder() {
  const [cakeChoices, setCakeChoices] = useState({
    size: '6inch',
    layers: 1,
    flavor: '',
    filling: null,
    fillingType: null,
    frostingType: 'buttercream',
    frostingFlavor: null,
    extraFilling: false,
    extraFrosting: false,
    message: '',
    toppings: [],
    decorations: []
  });

  // Updated flavors array with all options
  const flavors = [
    { 
      id: 'white-cake',
      name: 'White Cake',
      description: 'A delicate blend of almond and citrus notes harmonized with vanilla notes',
      color: '#FFFFFF'
    },
    { 
      id: 'vanilla',
      name: 'Vanilla Cake',
      description: 'Classic and timeless',
      color: '#F5E6D3'
    },
    { 
      id: 'funfetti',
      name: 'Funfetti Cake',
      description: 'Lush golden yellow cake bursting with colorful sprinkles',
      color: '#FFE4E1'
    },
    { 
      id: 'chocolate',
      name: 'Chocolate Cake',
      description: 'Decadently fudgy and smooth with rich chocolate flavor',
      color: '#4A3728'
    },
    { 
      id: 'carrot',
      name: 'Carrot Cake',
      description: 'Moist and spiced with hints of cinnamon and nutmeg',
      color: '#FF7F50'
    },
    { 
      id: 'red-velvet',
      name: 'Red Velvet Cake',
      description: 'Southern classic with cocoa undertones',
      color: '#A42127'
    },
    { 
      id: 'pink-champagne',
      name: 'Pink Champagne Cake',
      description: 'Light and elegant with subtle champagne flavor',
      color: '#FFB6C1'
    },
    { 
      id: 'chocoflan',
      name: 'Chocoflan',
      description: 'Chocolate cake on the bottom, Flan on top',
      color: '#8B4513'
    },
    { 
      id: 'tres-leches',
      name: 'Tres Leches',
      description: 'Three different milk sponge cake',
      color: '#FFF8DC'
    }
  ];

  // Updated fillings structure
  const fillingTypes = {
    fruit: [
      { id: 'apple-pie', name: 'Apple Pie', price: 5 },
      { id: 'strawberry-jam', name: 'Strawberry Jam', price: 4 },
      { id: 'triple-berry', name: 'Triple Berry Compote', price: 5 },
      { id: 'raspberry-jam', name: 'Raspberry Jam', price: 4 },
      { id: 'lemon-curd', name: 'Lemon Curd', price: 5 },
      { id: 'peach-compote', name: 'Peach Compote', price: 5 }
    ],
    fresh: [
      { id: 'fresh-peaches', name: 'Fresh Peaches', price: 6 },
      { id: 'fresh-strawberries', name: 'Fresh Strawberries', price: 6 },
      { id: 'fresh-raspberries', name: 'Fresh Raspberries', price: 6 },
      { id: 'fresh-bananas', name: 'Fresh Bananas', price: 4 }
    ],
    creams: [
      { id: 'cajeta', name: 'Cajeta', price: 5 },
      { id: 'pastry-cream', name: 'Pastry Cream', price: 4 },
      { id: 'nutella', name: 'Nutella', price: 5 },
      { id: 'pistachio-cream', name: 'Pistachio Cream', price: 6 },
      { id: 'cheesecake', name: 'Cheesecake', price: 6 },
      { id: 'banana-pudding', name: 'Banana Pudding', price: 5 }
    ]
  };

  // Updated frostings structure
  const frostings = {
    buttercream: [
      { id: 'vanilla-buttercream', name: 'Vanilla' },
      { id: 'chocolate-buttercream', name: 'Chocolate' },
      { id: 'strawberry-buttercream', name: 'Strawberry' },
      { id: 'oreo-buttercream', name: 'Oreo' },
      { id: 'lemon-buttercream', name: 'Lemon' },
      { id: 'cream-cheese-buttercream', name: 'Cream Cheese' },
      { id: 'peanut-butter-buttercream', name: 'Peanut Butter' },
      { id: 'espresso-chocolate-buttercream', name: 'Espresso Chocolate' },
      { id: 'pink-champagne-buttercream', name: 'Pink Champagne' },
      { id: 'coffee-buttercream', name: 'Coffee' }
    ],
    swissMeringue: [
      { id: 'vanilla-swiss', name: 'Vanilla' },
      { id: 'chocolate-swiss', name: 'Chocolate' },
      { id: 'strawberry-swiss', name: 'Strawberry' },
      { id: 'oreo-swiss', name: 'Oreo' },
      { id: 'lemon-swiss', name: 'Lemon' }
    ],
    whipped: [
      { id: 'vanilla-whipped', name: 'Vanilla' },
      { id: 'mocha-whipped', name: 'Mocha' },
      { id: 'oreo-milkshake-whipped', name: 'Oreo Milkshake' }
    ],
    ganache: [
      { id: 'chocolate-ganache', name: 'Chocolate Ganache' },
      { id: 'white-chocolate-ganache', name: 'White Chocolate Ganache' }
    ]
  };

  const sizes = [
    { id: 'small', name: '6" Round', serves: '8-10', price: 35 },
    { id: 'medium', name: '8" Round', serves: '12-15', price: 45 },
    { id: 'large', name: '10" Round', serves: '18-20', price: 55 },
  ];

  const toppings = [
    { id: 'sprinkles', name: 'Rainbow Sprinkles', price: 2 },
    { id: 'macarons', name: 'Macarons', price: 8 },
    { id: 'fresh-flowers', name: 'Fresh Flowers', price: 10 },
    { id: 'chocolate-drip', name: 'Chocolate Drip', price: 5 },
    { id: 'custom-topper', name: 'Custom Topper', price: 12 }
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
        Choose Your Size <Cake className="w-6 h-6" />

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

  // Layer controls
  const handleLayerChange = (action) => {
    setCakeChoices(prev => ({
      ...prev,
      layers: action === 'add' 
        ? Math.min(prev.layers + 1, 4)  // Max 4 layers
        : Math.max(prev.layers - 1, 1)  // Min 1 layer
    }));
  };

  // Filling type selection
  const handleFillingTypeSelect = (type) => {
    setCakeChoices(prev => ({
      ...prev,
      fillingType: type,
      filling: null // Reset filling when type changes
    }));
  };

  // Add frosting type selection handler
  const handleFrostingTypeSelect = (type) => {
    setCakeChoices(prev => ({
      ...prev,
      frostingType: type,
      frostingFlavor: null // Reset flavor when type changes
    }));
  };

  return (
    <div className="min-h-screen pt-20 bg-glitter-gradient">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr,400px] gap-8">
          <div className="space-y-6">
          
            {/* Size Selection */}
            <SizeSelector />

            {/* Layer Selection */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-pink-300 shadow-lg">
              <h2 className="font-seasons text-3xl text-y2k-pink mb-4 flex items-center gap-2">
                <Cake className="w-6 h-6" />
                Choose Your Layers
              </h2>
              
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => handleLayerChange('remove')}
                  disabled={cakeChoices.layers <= 1}
                  className="y2k-button disabled:opacity-50"
                >
                  Remove Layer
                </button>
                <span className="font-seasons text-2xl text-y2k-lavender">
                  {cakeChoices.layers} {cakeChoices.layers === 1 ? 'Layer' : 'Layers'}
                </span>
                <button
                  onClick={() => handleLayerChange('add')}
                  disabled={cakeChoices.layers >= 4}
                  className="y2k-button disabled:opacity-50"
                >
                  Add Layer
                </button>
              </div>
            </div>

            {/* Filling Selection */}
            {cakeChoices.layers > 1 && (
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-pink-300 shadow-lg">
                <h2 className="font-seasons text-3xl text-y2k-pink mb-4">Choose Your Filling</h2>
                
                {/* Filling Type Tabs */}
                <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                  {Object.keys(customOptions.fillings).map(type => (
                    <button
                      key={type}
                      onClick={() => handleFillingTypeSelect(type)}
                      className={`px-4 py-2 rounded-full whitespace-nowrap
                        ${cakeChoices.fillingType === type
                          ? 'bg-pink-500 text-white'
                          : 'bg-pink-100 hover:bg-pink-200'
                        }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>

                {/* Filling Options */}
                {cakeChoices.fillingType && (
                  <div className="grid grid-cols-2 gap-4">
                    {customOptions.fillings[cakeChoices.fillingType].map(filling => (
                      <button
                        key={filling.id}
                        onClick={() => handleChoice('filling', filling.id)}
                        className={`${
                          cakeChoices.filling === filling.id
                            ? 'ring-2 ring-pink-500'
                            : 'hover:bg-pink-50'
                        } p-4 rounded-lg border-2 border-pink-200 transition-all`}
                      >
                        <div className="font-medium">{filling.name}</div>
                        <div className="text-sm text-gray-500">+${filling.price}</div>
                      </button>
                    ))}
                  </div>
                )}
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

            {/* Frosting Selection */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-pink-300 shadow-lg">
              <h2 className="font-seasons text-3xl text-y2k-pink mb-4">Choose Your Frosting</h2>
              
              {/* Frosting Type Tabs */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
                {Object.keys(customOptions.frostings).map(type => (
                  <button
                    key={type}
                    onClick={() => handleFrostingTypeSelect(type)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap
                      ${cakeChoices.frostingType === type
                        ? 'bg-pink-500 text-white'
                        : 'bg-pink-100 hover:bg-pink-200'
                      }`}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>

              {/* Frosting Options */}
              {cakeChoices.frostingType && (
                <div className="grid grid-cols-2 gap-4">
                  {customOptions.frostings[cakeChoices.frostingType].map(frosting => (
                    <button
                      key={frosting.id}
                      onClick={() => handleChoice('frostingFlavor', frosting.id)}
                      className={`${
                        cakeChoices.frostingFlavor === frosting.id
                          ? 'ring-2 ring-pink-500'
                          : 'hover:bg-pink-50'
                      } p-4 rounded-lg border-2 border-pink-200 transition-all`}
                    >
                      <div className="font-medium">{frosting.name}</div>
                    </button>
                  ))}
                </div>
              )}
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

          {/* Preview Section */}
          <div className="lg:sticky lg:top-24 h-fit">
            <CakePreview 
              cakeChoices={cakeChoices}
              customOptions={customOptions}
            />
            {/* Order Summary */}
            <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-pink-300 shadow-lg">
              <h2 className="font-bold text-2xl text-pink-500 mb-4">Order Summary ✨</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span>{sizes.find(s => s.id === cakeChoices.size)?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Layers:</span>
                  <span>{cakeChoices.layers}</span>
                </div>
                {/* Add price calculation here */}
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