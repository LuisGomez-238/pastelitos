import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Heart, Sparkles } from 'lucide-react';

function CakePreview({ cakeChoices }) {
  const BASE_WIDTH = 180;
  const BASE_HEIGHT = 40;
  const FILLING_HEIGHT = 6;
  const PLATE_WIDTH = 240;

  const getSizeMultiplier = (sizeId) => {
    const multipliers = {
      small: 0.8,
      medium: 1,
      large: 1.2
    };
    return multipliers[sizeId] || 1;
  };

  const getFlavorStyle = (flavorId) => {
    const styles = {
      vanilla: {
        background: 'linear-gradient(45deg, #FFE4E1, #FFF0F5)',
        pattern: 'vanilla-pattern.png'
      },
      chocolate: {
        background: 'linear-gradient(45deg, #4A3728, #654321)',
        pattern: 'chocolate-pattern.png'
      },
      strawberry: {
        background: 'linear-gradient(45deg, #FFB4E6, #FFC0CB)',
        pattern: 'strawberry-pattern.png'
      },
      confetti: {
        background: 'linear-gradient(45deg, #FFA6C9, #FFD1DC)',
        pattern: 'confetti-pattern.png'
      }
    };
    return styles[flavorId] || styles.vanilla;
  };

  const getFillingColor = (fillingId) => {
    const colors = {
      vanilla: '#FFF4E0',
      chocolate: '#3C2A21',
      strawberry: '#FF69B4',
      lemon: '#FFEF82',
    };
    return colors[fillingId] || '#FFF4E0';
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-y2k-pink shadow-kawaii">
      <h2 className="font-bubblegum text-2xl text-y2k-pink mb-4 flex items-center justify-between">
        <span>Your Magical Cake ✨</span>
        <Sparkles className="w-6 h-6 animate-spin-slow text-y2k-yellow" />
      </h2>
      
      <div className="relative w-full aspect-square bg-gradient-to-b from-y2k-blue/10 to-white 
        rounded-2xl flex items-center justify-center">
        
        <div className="relative w-[400px] h-[400px] flex items-center justify-center">
          {/* Cake Stand */}
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
            {/* Stand Plate */}
            <div 
              style={{ width: `${PLATE_WIDTH}px` }}
              className="h-4 bg-gradient-to-r from-y2k-pink/20 via-y2k-pink to-y2k-pink/20 
                rounded-full shadow-lg"
            />
            {/* Stand Stem */}
            <div className="w-20 h-12 mx-auto -mt-1 bg-gradient-to-b from-y2k-pink/50 
              to-y2k-pink rounded-t-lg" />
          </div>

          {/* Cake Layers Stack */}
          {cakeChoices.flavor && (
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2">
              {/* Generate layers from bottom to top */}
              {[...Array(Number(cakeChoices.layers) || 1)].map((_, index, array) => {
                const layerIndex = array.length - 1 - index; // Reverse index for proper stacking
                return (
                  <motion.div
                    key={layerIndex}
                    initial={{ scale: 0, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    transition={{ delay: layerIndex * 0.1 }}
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{
                      width: `${BASE_WIDTH * getSizeMultiplier(cakeChoices.size)}px`,
                      height: `${BASE_HEIGHT * getSizeMultiplier(cakeChoices.size)}px`,
                      bottom: `${layerIndex * (BASE_HEIGHT + FILLING_HEIGHT)}px`,
                      zIndex: layerIndex,
                    }}
                  >
                    {/* Cake Layer */}
                    <div 
                      className="absolute inset-0 rounded-2xl shadow-lg overflow-hidden"
                      style={{
                        background: getFlavorStyle(cakeChoices.flavor).background,
                      }}
                    >
                      <div className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `url(/images/${getFlavorStyle(cakeChoices.flavor).pattern})`,
                          backgroundSize: '100px',
                        }}
                      />
                    </div>

                    {/* Filling - Only between layers */}
                    {layerIndex < array.length - 1 && cakeChoices.filling && (
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        className="absolute -bottom-[6px] left-[10%] right-[10%] h-[12px] 
                          rounded-full z-10"
                        style={{
                          background: `linear-gradient(to right, 
                            ${getFillingColor(cakeChoices.filling)}80, 
                            ${getFillingColor(cakeChoices.filling)}, 
                            ${getFillingColor(cakeChoices.filling)}80
                          )`,
                          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
                        }}
                      />
                    )}

                    {/* Frosting - Only on top layer */}
                    {layerIndex === array.length - 1 && (
                      <div className="absolute -top-2 inset-x-0 flex justify-around">
                        {[...Array(12)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className="w-2 h-4 bg-white/80 rounded-b-lg"
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Toppings */}
              {cakeChoices.toppings.length > 0 && (
                <div 
                  className="absolute left-1/2 -translate-x-1/2 w-full flex justify-around"
                  style={{
                    bottom: `${((Number(cakeChoices.layers) || 1) * (BASE_HEIGHT + FILLING_HEIGHT))}px`,
                    width: `${BASE_WIDTH * getSizeMultiplier(cakeChoices.size)}px`,
                  }}
                >
                  {cakeChoices.toppings.map((topping, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                      className="animate-bounce-slow"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {topping === 'sprinkles' && <Star className="w-4 h-4 text-y2k-yellow" />}
                      {topping === 'hearts' && <Heart className="w-4 h-4 text-y2k-pink" />}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Message Banner */}
          {cakeChoices.message && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-4 left-1/2 -translate-x-1/2 w-full max-w-[250px]"
            >
              <div className="relative px-6 py-2 bg-white/90 rounded-full border-2 
                border-y2k-pink font-kawaii text-sm text-y2k-pink shadow-kawaii text-center">
                {cakeChoices.message}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Layer Counter */}
      <div className="mt-4 text-center font-kawaii text-y2k-pink">
        {cakeChoices.layers || 1} Layer{(cakeChoices.layers || 1) > 1 ? 's' : ''} 
        {cakeChoices.filling ? ` with ${cakeChoices.filling} filling` : ''}
      </div>
    </div>
  );
}

export default CakePreview;