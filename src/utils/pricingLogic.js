// Base cake sizes and prices
export const cakeSizes = {
  '6inch': { name: '6"', servings: '8-10', basePrice: 45 },
  '8inch': { name: '8"', servings: '12-15', basePrice: 55 },
  '10inch': { name: '10"', servings: '20-25', basePrice: 70 },
  'quarter': { name: '¼ Sheet', servings: '20-25', basePrice: 70 },
  'half': { name: '½ Sheet', servings: '40-50', basePrice: 120 },
  'full': { name: 'Full Sheet', servings: '75-100', basePrice: 200 }
};

// Premium cake types that cost more than base price
export const premiumCakes = {
  'funfetti': 3,
  'carrot': 3,
  'red-velvet': 3,
  'pink-champagne': 7,
  'chocoflan': 10,
  'tres-leches': 7
};

// Filling price adjustments
export const fillingPrices = {
  // Fruit fillings
  'apple-pie': 5,
  'strawberry-jam': 4,
  'triple-berry-compote': 5,
  'raspberry-jam': 4,
  'lemon-curd': 5,
  'peach-compote': 5,
  
  // Fresh fruit
  'fresh-peaches': 6,
  'fresh-strawberries': 6,
  'fresh-raspberries': 6,
  'fresh-bananas': 4,
  
  // Cream fillings
  'pastry-cream': 4,
  'nutella': 5,
  'chocolate-ganache': 5,
  'white-chocolate-ganache': 5,
  'pistachio-cream': 6,
  'cheesecake': 6,
  'banana-pudding': 5,
  'cajeta': 5
};

// Frosting type adjustments
export const frostingPrices = {
  buttercream: 0, // Base price
  swissMeringue: 5, // Additional cost
  whipped: 3 // Additional cost
};

// Calculate total cake price
export const calculateCakePrice = ({
  size = '6inch',
  cakeType = 'vanilla',
  filling = null,
  frostingType = 'buttercream',
  extraFilling = false,
  extraFrosting = false,
  decorations = []
}) => {
  let totalPrice = cakeSizes[size].basePrice;

  // Add premium cake cost if applicable
  if (premiumCakes[cakeType]) {
    totalPrice += premiumCakes[cakeType];
  }

  // Add filling cost
  if (filling && fillingPrices[filling]) {
    totalPrice += fillingPrices[filling];
    // Extra filling layer
    if (extraFilling) {
      totalPrice += fillingPrices[filling];
    }
  }

  // Add frosting cost
  if (frostingPrices[frostingType]) {
    totalPrice += frostingPrices[frostingType];
    // Extra frosting
    if (extraFrosting) {
      totalPrice += 3;
    }
  }

  // Add decoration costs
  if (decorations.length > 0) {
    decorations.forEach(decoration => {
      switch (decoration) {
        case 'sprinkles':
          totalPrice += 2;
          break;
        case 'macarons':
          totalPrice += 8;
          break;
        case 'fresh-flowers':
          totalPrice += 10;
          break;
        case 'chocolate-drip':
          totalPrice += 5;
          break;
        case 'custom-topper':
          totalPrice += 12;
          break;
        // Add more decoration options as needed
      }
    });
  }

  return totalPrice;
};

// Example usage:
// const price = calculateCakePrice({
//   size: '8inch',
//   cakeType: 'funfetti',
//   filling: 'strawberry-jam',
//   frostingType: 'swissMeringue',
//   extraFilling: true,
//   decorations: ['sprinkles', 'macarons']
// }); 