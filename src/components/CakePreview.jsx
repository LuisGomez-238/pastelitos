import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

function CakePreview({ cakeChoices }) {
  const [layers, setLayers] = useState([]);
  const BASE_WIDTH = 180;
  const BASE_HEIGHT = 38;
  const FILLING_HEIGHT = 10;
  const PLATE_WIDTH = 240;

  // Initialize and update layers when choices change
  useEffect(() => {
    // Only create layers if we have a size selected
    if (cakeChoices.size) {
      const newLayerCount = Math.max(1, Number(cakeChoices.layers) || 1);
      const newLayers = Array(newLayerCount).fill().map((_, i) => ({
        id: `layer-${i}`,
        flavor: cakeChoices.flavor || 'vanilla', // Default to vanilla if no flavor selected
        filling: cakeChoices.filling
      }));
      setLayers(newLayers);
    }
  }, [cakeChoices.size, cakeChoices.layers, cakeChoices.flavor, cakeChoices.filling]);

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
      redVelvet: {
        background: 'linear-gradient(45deg, #A42127, #C41E3A)',
        pattern: 'redvelvet-pattern.png'
      }
    };
    return styles[flavorId] || styles.vanilla;
  };

  const getFillingColor = (fillingId) => {
    const colors = {
      vanilla: '#FFF4E0',
      chocolate: '#3C2A21',
      strawberry: '#FFB6C1',
      lemon: '#FFEF82',
    };
    return colors[fillingId] || '#FFF4E0';
  };

  // Calculate total height of the cake
  const getTotalHeight = (layerCount) => {
    return (layerCount * BASE_HEIGHT) + ((layerCount - 1) * FILLING_HEIGHT);
  };

  // Calculate position for each layer including filling
  const getLayerPosition = (index) => {
    return index * BASE_HEIGHT;
  };

  // Calculate filling position
  const getFillingPosition = (index) => {
    return getLayerPosition(index) + BASE_HEIGHT - (FILLING_HEIGHT / 2);
  };

  // Add frosting animation variants
  const frostingVariants = {
    initial: {
      scaleX: 0,
      scaleY: 0,
    },
    animate: {
      scaleX: 1,
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1,
      }
    }
  };

  const dripVariants = {
    initial: { 
      height: 0,
      opacity: 0 
    },
    animate: { 
      height: "20px",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    }
  };

  const getFrostingColor = (frostingType) => {
    const colors = {
      vanilla: 'rgba(255, 250, 245, 0.7)',
      chocolate: 'rgba(86, 59, 48, 0.7)',
      strawberry: 'rgba(255, 182, 193, 0.7)',
      cream: 'rgba(255, 253, 240, 0.7)',
      caramel: 'rgba(193, 135, 107, 0.7)',
    };
    return colors[frostingType] || colors.vanilla;
  };

  // Updated total height calculation to handle both layers and fillings
  const getTotalCakeHeight = () => {
    if (layers.length <= 1) return BASE_HEIGHT;
    return (layers.length * BASE_HEIGHT) + ((layers.length - 1) * FILLING_HEIGHT);
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-pink-300 shadow-lg">
      <h2 className="font-bold text-2xl text-pink-500 mb-4 flex items-center justify-between">
        <span>Your Magical Cake ✨</span>
        <Sparkles className="w-6 h-6 animate-spin-slow text-yellow-400" />
      </h2>
      
      <div className="relative w-full aspect-square bg-gradient-to-b from-pink-50/50 to-purple-50/50 
        rounded-3xl">
        {/* Main container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[400px] h-[400px] flex items-center justify-center">
            {/* Plate and cake container */}
            <div className="absolute bottom-[20%] w-full flex flex-col items-center">
              {/* Cake Stand */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="relative w-full flex justify-center"
              >
                {/* Stand Plate */}
                <div 
                  style={{ width: `${PLATE_WIDTH}px` }}
                  className="h-4 bg-gradient-to-r from-pink-200/50 via-pink-300 to-pink-200/50 
                    rounded-full shadow-lg"
                />
                {/* Stand Stem */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-12 
                  bg-gradient-to-b from-pink-200 to-pink-300 rounded-t-lg" />
              </motion.div>

              {/* Cake Layers Stack */}
              {cakeChoices.size && (
                <div className="absolute w-full flex justify-center" style={{ bottom: '16px' }}>
                  <Reorder.Group
                    axis="y"
                    values={layers}
                    onReorder={setLayers}
                    className="relative"
                    style={{
                      width: `${BASE_WIDTH * getSizeMultiplier(cakeChoices.size)}px`,
                    }}
                  >
                    {/* Render base layers */}
                    {layers.map((layer, index) => (
                      <Reorder.Item
                        key={layer.id}
                        value={layer}
                        dragListener={layers.length > 1}
                        className="absolute w-full cursor-grab active:cursor-grabbing"
                        style={{
                          height: `${BASE_HEIGHT}px`,
                          bottom: `${getLayerPosition(index)}px`,
                          zIndex: (layers.length - index) * 2,
                        }}
                      >
                        {/* Layer Base with shadow */}
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 overflow-hidden rounded-2xl shadow-lg"
                          style={{
                            background: getFlavorStyle(cakeChoices.flavor || 'vanilla').background,
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)',
                          }}
                          whileHover={layers.length > 1 ? { scale: 1.02 } : {}}
                          whileDrag={{ scale: 1.05 }}
                        >
                          <div className="absolute inset-0 opacity-30"
                            style={{
                              backgroundImage: `url(/images/${getFlavorStyle(cakeChoices.flavor || 'vanilla').pattern})`,
                              backgroundSize: '100px',
                            }}
                          />
                        </motion.div>
                      </Reorder.Item>
                    ))}

                    {/* Render fillings between layers */}
                    {layers.map((layer, index) => {
                      if (index === layers.length - 1) return null; // Skip last layer
                      return cakeChoices.filling && (
                        <motion.div
                          key={`filling-${layer.id}`}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          className="absolute"
                          style={{
                            height: `${FILLING_HEIGHT}px`,
                            bottom: `${getFillingPosition(index)}px`,
                            left: '15%',
                            right: '15%',
                            background: `linear-gradient(to right, 
                              ${getFillingColor(cakeChoices.filling)}80, 
                              ${getFillingColor(cakeChoices.filling)}, 
                              ${getFillingColor(cakeChoices.filling)}80
                            )`,
                            borderRadius: `${FILLING_HEIGHT}px`,
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            zIndex: (layers.length - index) * 2 - 1,
                          }}
                        />
                      );
                    })}

                    {/* Frosting overlay */}
                    {cakeChoices.frosting && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute overflow-hidden pointer-events-none rounded-2xl"
                        style={{
                          bottom: '0',
                          left: '-8px',
                          right: '-8px',
                          height: `${getTotalCakeHeight() + 3}px`,
                          background: getFrostingColor(cakeChoices.frosting),
                          boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.2), 0 4px 6px rgba(0,0,0,0.1)',
                          zIndex: layers.length * 2 + 1,
                        }}
                      />
                    )}

                    {/* Toppings */}
                    {cakeChoices.toppings?.length > 0 && (
                      <div 
                        className="absolute w-full flex justify-around"
                        style={{
                          bottom: `${getLayerPosition(layers.length)}px`,
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
                            {topping === 'sprinkles' && <Star className="w-4 h-4 text-yellow-400" />}
                            {topping === 'hearts' && <Heart className="w-4 h-4 text-pink-400" />}
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </Reorder.Group>
                </div>
              )}
            </div>

            {/* Message Banner */}
            {cakeChoices.message && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-8 left-1/2 -translate-x-1/2 w-full max-w-[250px]"
              >
                <div className="relative px-6 py-2 bg-white/90 rounded-full border-2 
                  border-pink-300 text-sm text-pink-500 text-center shadow-lg">
                  {cakeChoices.message}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CakePreview;