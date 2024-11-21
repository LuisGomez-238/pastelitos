import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Star, ArrowLeft } from 'lucide-react';
import { calculateCakePrice, cakeSizes } from '../utils/pricingLogic';
import { menuItems, customOptions } from '../data/menuItems';

function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('6inch');
  const [selectedFilling, setSelectedFilling] = useState(null);
  const [selectedFillingType, setSelectedFillingType] = useState(null);
  const [selectedFrostingType, setSelectedFrostingType] = useState('buttercream');
  const [selectedFrostingFlavor, setSelectedFrostingFlavor] = useState(null);
  const [extraFilling, setExtraFilling] = useState(false);
  const [extraFrosting, setExtraFrosting] = useState(false);

  const cake = menuItems.find(item => item.id === id);

  if (!cake) {
    return (
      <div className="min-h-screen pt-20 bg-glitter-gradient">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="font-seasons text-4xl text-y2k-pink mb-6">
            ✨ Oops! Cake Not Found ✨
          </h1>
          <button 
            onClick={() => navigate('/menu')}
            className="y2k-button"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const price = calculateCakePrice({
    size: selectedSize,
    cakeType: cake.id,
    filling: selectedFilling,
    frostingType: selectedFrostingType,
    extraFilling,
    extraFrosting
  });

  return (
    <div className="min-h-screen pt-20 bg-glitter-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/menu')}
          className="mb-8 flex items-center gap-2 y2k-button bg-white/90"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Menu
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-white/50 rounded-3xl rotate-2 
              group-hover:rotate-3 transition-transform duration-300" />
            <div className="relative aspect-square rounded-3xl overflow-hidden 
              border-4 border-white shadow-kawaii">
              <img
                src={cake.image}
                alt={cake.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 
            border-2 border-y2k-pink shadow-kawaii">
            <h1 className="font-seasons text-4xl text-y2k-pink mb-4">
              {cake.name} ✨
            </h1>
            <p className="font-seasons text-gray-600 mb-8">
              {cake.description}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className="block font-seasons text-y2k-lavender mb-2">
                Size
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border-2 border-y2k-pink 
                  focus:border-y2k-lavender focus:outline-none"
              >
                {Object.entries(cakeSizes).map(([key, size]) => (
                  <option key={key} value={key}>
                    {size.name} ({size.servings} servings)
                  </option>
                ))}
              </select>
            </div>

            {/* Filling Selection */}
            <div className="mb-6">
              <label className="block font-seasons text-y2k-lavender mb-2">
                Filling Type
              </label>
              <select
                value={selectedFillingType || ''}
                onChange={(e) => {
                  setSelectedFillingType(e.target.value);
                  setSelectedFilling(null);
                }}
                className="w-full px-4 py-2 rounded-xl border-2 border-y2k-pink 
                  focus:border-y2k-lavender focus:outline-none mb-2"
              >
                <option value="">No Filling</option>
                <option value="fruit">Fruit Fillings</option>
                <option value="fresh">Fresh Fruit</option>
                <option value="creams">Cream Fillings</option>
              </select>

              {selectedFillingType && (
                <select
                  value={selectedFilling || ''}
                  onChange={(e) => setSelectedFilling(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border-2 border-y2k-pink 
                    focus:border-y2k-lavender focus:outline-none"
                >
                  <option value="">Select {selectedFillingType} Filling</option>
                  {customOptions.fillings[selectedFillingType].map((filling) => (
                    <option key={filling.id} value={filling.id}>
                      {filling.name} (+${filling.price})
                    </option>
                  ))}
                </select>
              )}

              {selectedFilling && (
                <div className="mt-2">
                  <label className="flex items-center gap-2 text-gray-600">
                    <input
                      type="checkbox"
                      checked={extraFilling}
                      onChange={(e) => setExtraFilling(e.target.checked)}
                      className="rounded border-y2k-pink text-y2k-pink focus:ring-y2k-lavender"
                    />
                    Extra filling layer
                  </label>
                </div>
              )}
            </div>

            {/* Frosting Selection */}
            <div className="mb-6">
              <label className="block font-seasons text-y2k-lavender mb-2">
                Frosting Type
              </label>
              <select
                value={selectedFrostingType}
                onChange={(e) => {
                  setSelectedFrostingType(e.target.value);
                  setSelectedFrostingFlavor(null);
                }}
                className="w-full px-4 py-2 rounded-xl border-2 border-y2k-pink 
                  focus:border-y2k-lavender focus:outline-none mb-2"
              >
                {cake.availableFrostings.map((type) => (
                  <option key={type} value={type}>
                    {type === 'swissMeringue' ? 'Swiss Meringue' :
                     type === 'cream-cheese' ? 'Cream Cheese' :
                     type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>

              {selectedFrostingType && (
                <>
                  <label className="block font-seasons text-y2k-lavender mt-4 mb-2">
                    {selectedFrostingType === 'swissMeringue' ? 'Swiss Meringue' :
                     selectedFrostingType === 'cream-cheese' ? 'Cream Cheese' :
                     selectedFrostingType.charAt(0).toUpperCase() + selectedFrostingType.slice(1)} Flavor
                  </label>
                  <select
                    value={selectedFrostingFlavor || ''}
                    onChange={(e) => setSelectedFrostingFlavor(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border-2 border-y2k-pink 
                      focus:border-y2k-lavender focus:outline-none"
                  >
                    <option value="">Select Flavor</option>
                    {customOptions.frostings[selectedFrostingType]?.map((flavor) => (
                      <option key={flavor.id} value={flavor.id}>
                        {flavor.name}
                      </option>
                    ))}
                  </select>
                </>
              )}

              <div className="mt-2">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    checked={extraFrosting}
                    onChange={(e) => setExtraFrosting(e.target.checked)}
                    className="rounded border-y2k-pink text-y2k-pink focus:ring-y2k-lavender"
                  />
                  Extra frosting
                </label>
              </div>
            </div>

            {/* Price Display */}
            <div className="text-center mb-8">
              <div className="font-seasons text-3xl text-y2k-pink">
                ${price}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Final price includes all selections
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              className="w-full y2k-button flex items-center justify-center gap-2"
              disabled={!selectedFrostingFlavor}
            >
              <span>Add to Cart</span>
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail; 