import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

function CakePreview({ cakeChoices, customOptions }) {
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
      'white-cake': {
        background: 'linear-gradient(45deg, #FFFFFF, #F5F5F5)',
        pattern: 'vanilla-pattern.png'
      },
      'vanilla': {
        background: 'linear-gradient(45deg, #F5E6D3, #FFF0F5)',
        pattern: 'vanilla-pattern.png'
      },
      'funfetti': {
        background: 'linear-gradient(45deg, #FFE4E1, #FFF0F5)',
        pattern: 'funfetti-pattern.png'
      },
      'chocolate': {
        background: 'linear-gradient(45deg, #4A3728, #654321)',
        pattern: 'chocolate-pattern.png'
      },
      'carrot': {
        background: 'linear-gradient(45deg, #FF7F50, #FFA07A)',
        pattern: 'carrot-pattern.png'
      },
      'red-velvet': {
        background: 'linear-gradient(45deg, #A42127, #C41E3A)',
        pattern: 'redvelvet-pattern.png'
      },
      'pink-champagne': {
        background: 'linear-gradient(45deg, #FFB6C1, #FFC0CB)',
        pattern: 'champagne-pattern.png'
      },
      'chocoflan': {
        background: 'linear-gradient(45deg, #8B4513, #A0522D)',
        pattern: 'chocolate-pattern.png'
      },
      'tres-leches': {
        background: 'linear-gradient(45deg, #FFF8DC, #FFFAF0)',
        pattern: 'vanilla-pattern.png'
      }
    };
    return styles[flavorId] || styles.vanilla; // Default to vanilla if flavor not found
  };

  const getFillingColor = (fillingId) => {
    const colors = {
      // Fruit fillings
      'apple-pie': '#E8C6A3',
      'strawberry-jam': '#FF69B4',
      'triple-berry': '#8B0045',
      'raspberry-jam': '#E30B5D',
      'lemon-curd': '#FFF44F',
      'peach-compote': '#FFCBA4',
      
      // Fresh fruit
      'fresh-peaches': '#FFDAB9',
      'fresh-strawberries': '#FF69B4',
      'fresh-raspberries': '#E30B5D',
      'fresh-bananas': '#FFE135',
      
      // Buttercream fillings
      'vanilla-buttercream-filling': '#FFF4E0',
      'chocolate-buttercream-filling': '#3C2A21',
      'strawberry-buttercream-filling': '#FFB6C1',
      'oreo-buttercream-filling': '#2F2F2F',
      'lemon-buttercream-filling': '#FFEF82',
      'cream-cheese-buttercream-filling': '#FFFDD0',
      'peanut-butter-buttercream-filling': '#D2691E',
      'espresso-chocolate-buttercream-filling': '#4A3728',
      'pink-champagne-buttercream-filling': '#FFD1DC',
      'coffee-buttercream-filling': '#6F4E37',
      
      // Swiss meringue fillings
      'vanilla-swiss-filling': '#FFFAFA',
      'chocolate-swiss-filling': '#3C2A21',
      'strawberry-swiss-filling': '#FFB6C1',
      'oreo-swiss-filling': '#2F2F2F',
      'lemon-swiss-filling': '#FFEF82',
      
      // Whipped fillings
      'vanilla-whipped-filling': '#FFFAFA',
      'mocha-whipped-filling': '#6F4E37',
      'oreo-milkshake-whipped-filling': '#2F2F2F',
      
      // Specialty fillings
      'cajeta': '#C4A484',
      'pastry-cream': '#FFFDD0',
      'nutella': '#4A3728',
      'pistachio-cream': '#93C572',
      'cheesecake': '#FFFDD0',
      'banana-pudding': '#FFE5B4'
    };
    return colors[fillingId] || '#FFF4E0';
  };

  const getFrostingColor = (frostingId) => {
    const colors = {
      // Buttercream frostings
      'vanilla-buttercream': 'rgba(255, 244, 224, 0.85)',
      'chocolate-buttercream': 'rgba(60, 42, 33, 0.85)',
      'strawberry-buttercream': 'rgba(255, 182, 193, 0.85)',
      'oreo-buttercream': 'rgba(47, 47, 47, 0.85)',
      'lemon-buttercream': 'rgba(255, 239, 130, 0.85)',
      'cream-cheese-buttercream': 'rgba(255, 253, 208, 0.85)',
      'peanut-butter-buttercream': 'rgba(210, 105, 30, 0.85)',
      'espresso-chocolate-buttercream': 'rgba(74, 55, 40, 0.85)',
      'pink-champagne-buttercream': 'rgba(255, 209, 220, 0.85)',
      'coffee-buttercream': 'rgba(111, 78, 55, 0.85)',
      
      // Swiss meringue frostings
      'vanilla-swiss-meringue': 'rgba(255, 250, 250, 0.9)',
      'chocolate-swiss-meringue': 'rgba(60, 42, 33, 0.9)',
      'strawberry-swiss-meringue': 'rgba(255, 182, 193, 0.9)',
      'oreo-swiss-meringue': 'rgba(47, 47, 47, 0.9)',
      'lemon-swiss-meringue': 'rgba(255, 239, 130, 0.9)',
      
      // Whipped frostings
      'vanilla-whipped': 'rgba(255, 250, 250, 0.75)',
      'mocha-whipped': 'rgba(111, 78, 55, 0.75)',
      'oreo-milkshake-whipped': 'rgba(47, 47, 47, 0.75)',
      
      // Ganache
      'chocolate-ganache': 'rgba(42, 24, 16, 0.95)',
      'white-chocolate-ganache': 'rgba(255, 250, 240, 0.95)'
    };
    return colors[frostingId] || 'rgba(255, 244, 224, 0.85)';
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

  // Updated total height calculation to handle both layers and fillings
  const getTotalCakeHeight = () => {
    if (layers.length <= 1) return BASE_HEIGHT;
    return (layers.length * BASE_HEIGHT) + ((layers.length - 1) * FILLING_HEIGHT);
  };

  // Update filling rendering to handle extra filling
  const renderFilling = (index, layer) => {
    if (!cakeChoices.filling) return null;
    
    const baseHeight = cakeChoices.extraFilling ? FILLING_HEIGHT * 1.5 : FILLING_HEIGHT;
    
    return (
      <motion.div
        key={`filling-${layer.id}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        className="absolute"
        style={{
          height: `${baseHeight}px`,
          bottom: `${getFillingPosition(index)}px`,
          left: '15%',
          right: '15%',
          background: `linear-gradient(to right, 
            ${getFillingColor(cakeChoices.filling)}80, 
            ${getFillingColor(cakeChoices.filling)}, 
            ${getFillingColor(cakeChoices.filling)}80
          )`,
          borderRadius: `${baseHeight}px`,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: (layers.length - index) * 2 - 1,
        }}
      />
    );
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
                            background: getFlavorStyle(layer.flavor).background,
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.1)',
                          }}
                          whileHover={layers.length > 1 ? { scale: 1.02 } : {}}
                          whileDrag={{ scale: 1.05 }}
                        >
                          <div 
                            className="absolute inset-0 opacity-30"
                            style={{
                              backgroundImage: `url(/images/${getFlavorStyle(layer.flavor).pattern})`,
                              backgroundSize: '100px',
                            }}
                          />
                        </motion.div>
                      </Reorder.Item>
                    ))}

                    {/* Render fillings between layers */}
                    {layers.map((layer, index) => {
                      if (index === layers.length - 1) return null; // Skip last layer
                      return renderFilling(index, layer);
                    })}

                    {/* Frosting overlay - Updated condition to check for frostingFlavor */}
                    {cakeChoices.frostingFlavor && (
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
                          background: getFrostingColor(cakeChoices.frostingFlavor),
                          opacity: 0.85, // Add some transparency to see the cake layers
                          boxShadow: 'inset 0 2px 6px rgba(255,255,255,0.2), 0 4px 6px rgba(0,0,0,0.1)',
                          zIndex: layers.length * 2 + 1,
                        }}
                      >
                        {/* Add frosting texture */}
                        <div 
                          className="absolute inset-0 opacity-30"
                          style={{
                            backgroundImage: `url(/images/frosting-texture.png)`,
                            backgroundSize: '100px',
                          }}
                        />
                      </motion.div>
                    )}

                    {/* Extra frosting drips for ganache */}
                    {cakeChoices.frostingFlavor?.includes('ganache') && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 right-0"
                        style={{
                          top: '-10px',
                          height: '20px',
                          background: `repeating-radial-gradient(
                            circle at 10px -5px,
                            ${getFrostingColor(cakeChoices.frostingFlavor)},
                            transparent 20px
                          )`,
                          zIndex: layers.length * 2 + 2,
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