import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Cake, Sparkles } from 'lucide-react';
import { menuItems } from '../data/menuItems';

function Menu() {
  const [expandedItem, setExpandedItem] = useState(null);
  const navigate = useNavigate();

  const categories = {
    signature: "Signature Cakes",
    specialty: "Specialty Cakes"
  };

  const handleItemClick = (itemId) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  const startBuildingCake = (flavor) => {
    navigate('/cake-builder', { state: { initialFlavor: flavor } });
  };

  // Helper function to format frosting types
  const formatFrostingTypes = (frostings) => {
    return frostings.map(type => {
      // Convert camelCase to Title Case
      return type
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase());
    }).join(', ');
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-glitter-gradient">
      <div className="max-w-4xl mx-auto px-3 md:px-4 py-8 md:py-12">
        <h1 className="font-seasons text-3xl md:text-4xl text-y2k-pink text-center mb-8 md:mb-12">
          ✨ Our Magical Menu ✨
        </h1>

        {Object.entries(categories).map(([category, title]) => (
          <div key={category} className="mb-8 md:mb-12">
            <h2 className="font-seasons text-xl md:text-2xl text-y2k-lavender mb-4 md:mb-6">
              {title}
            </h2>

            <div className="space-y-3 md:space-y-4">
              {menuItems
                .filter(item => item.category === category)
                .map(item => (
                  <div 
                    key={item.id}
                    className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl border-2 
                      border-y2k-pink overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => handleItemClick(item.id)}
                      className="w-full px-4 md:px-6 py-3 md:py-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-pink-200 flex-shrink-0"
                            style={{ backgroundColor: item.color }}
                          />
                          <div className="font-seasons text-lg md:text-xl text-y2k-pink">
                            {item.name}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between sm:justify-start gap-4 flex-1">
                          <div className="text-sm md:text-base text-gray-600">
                            Starting at ${item.basePrice}
                          </div>
                          {expandedItem === item.id ? 
                            <ChevronUp className="w-5 h-5 text-y2k-pink" /> : 
                            <ChevronDown className="w-5 h-5 text-y2k-pink" />
                          }
                        </div>
                      </div>
                    </button>

                    {expandedItem === item.id && (
                      <div className="px-4 md:px-6 pb-4 animate-slideDown">
                        <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                          {item.description}
                        </p>
                        
                        <div className="mb-3 md:mb-4 text-sm">
                          <div className="text-y2k-pink font-medium mb-1 md:mb-0 md:inline">
                            Available Frostings:
                          </div>
                          <div className="md:ml-2 text-gray-600">
                            {formatFrostingTypes(item.availableFrostings)}
                          </div>
                        </div>

                        <p className="text-xs md:text-sm text-gray-500 italic mb-4">
                          <Sparkles className="inline-block w-3 h-3 md:w-4 md:h-4 mr-1" />
                          Customize with your choice of fillings and decorations
                        </p>

                        <button
                          onClick={() => startBuildingCake(item.id)}
                          className="w-full sm:w-auto y2k-button flex items-center justify-center gap-2
                            group hover:scale-105 transition-transform px-6 py-2.5"
                        >
                          <span>Start Building</span>
                          <Cake className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                        </button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const globalStyles = `
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slideDown {
  animation: slideDown 0.3s ease-out forwards;
}

.y2k-button {
  @apply bg-pink-500 text-white rounded-full 
    shadow-md hover:shadow-lg transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2;
}
`;

export default Menu; 