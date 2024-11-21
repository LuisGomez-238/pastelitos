export const menuItems = [
  // Signature Cakes
  {
    id: 'white-cake',
    name: "White Cake",
    description: "A delicate blend of almond and citrus notes harmonized with vanilla notes ✨",
    basePrice: 45,
    image: "/images/white-cake.jpg",
    category: "signature",
    availableFrostings: ["buttercream", "swissMeringue", "whipped", "cream-cheese"]
  },
  {
    id: 'vanilla',
    name: "Vanilla Cake",
    description: "Classic and timeless, vanilla cake 🍶",
    basePrice: 45,
    image: "/images/vanilla-cake.jpg",
    category: "signature",
    availableFrostings: ["buttercream", "swissMeringue", "whipped", "cream-cheese"]
  },
  {
    id: 'funfetti',
    name: "Funfetti Cake",
    description: "Lush golden yellow cake bursting with colorful sprinkles for a fun and festive treat 🎨",
    basePrice: 48,
    image: "/images/funfetti-cake.jpg",
    category: "signature",
    availableFrostings: ["buttercream", "swissMeringue", "whipped"]
  },
  {
    id: 'chocolate',
    name: "Chocolate Cake",
    description: "Decadently fudgy and smooth with the perfect balance of rich chocolate flavor 🍫",
    basePrice: 45,
    image: "/images/chocolate-cake.jpg",
    category: "signature",
    availableFrostings: ["buttercream", "swissMeringue", "whipped", "ganache"]
  },
  {
    id: 'carrot',
    name: "Carrot Cake",
    description: "Moist and spiced to perfection with hints of cinnamon and nutmeg. No nuts, but can be added upon request 🥕",
    basePrice: 48,
    image: "/images/carrot-cake.jpg",
    category: "signature",
    availableFrostings: ["cream-cheese-buttercream", "vanilla-buttercream"]
  },
  {
    id: 'red-velvet',
    name: "Red Velvet Cake",
    description: "A Southern classic with a velvety texture, cocoa undertones ❤️",
    basePrice: 48,
    image: "/images/red-velvet-cake.jpg",
    category: "signature",
    availableFrostings: ["cream-cheese-buttercream", "vanilla-buttercream"]
  },
  {
    id: 'pink-champagne',
    name: "Pink Champagne Cake",
    description: "Light and elegant with a subtle champagne flavor that adds a touch of sophistication 🍾",
    basePrice: 52,
    image: "/images/pink-champagne-cake.jpg",
    category: "signature",
    availableFrostings: ["buttercream", "swissMeringue", "whipped"]
  },
  // Specialty Cakes
  {
    id: 'chocoflan',
    name: "Chocoflan",
    description: "The impossible cake! Chocolate cake on the bottom, creamy flan on top. Party all around! 🍮",
    basePrice: 55,
    image: "/images/chocoflan.jpg",
    category: "specialty",
    availableFrostings: ["buttercream", "whipped"]
  },
  {
    id: 'tres-leches',
    name: "Tres Leches",
    description: "Three different milk-soaked sponge cake. Light, sweet, and absolutely heavenly 🥛",
    basePrice: 52,
    image: "/images/tres-leches.jpg",
    category: "specialty",
    availableFrostings: ["whipped"]
  }
];

// Update customOptions to include all filling categories
export const customOptions = {
  fillings: {
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
    buttercream: [
      { id: 'vanilla-buttercream-filling', name: 'Vanilla Buttercream', price: 4 },
      { id: 'chocolate-buttercream-filling', name: 'Chocolate Buttercream', price: 4 },
      { id: 'strawberry-buttercream-filling', name: 'Strawberry Buttercream', price: 4 },
      { id: 'oreo-buttercream-filling', name: 'Oreo Buttercream', price: 4 },
      { id: 'lemon-buttercream-filling', name: 'Lemon Buttercream', price: 4 },
      { id: 'cream-cheese-buttercream-filling', name: 'Cream Cheese Buttercream', price: 5 },
      { id: 'peanut-butter-buttercream-filling', name: 'Peanut Butter Buttercream', price: 5 },
      { id: 'espresso-chocolate-buttercream-filling', name: 'Espresso Chocolate Buttercream', price: 5 },
      { id: 'pink-champagne-buttercream-filling', name: 'Pink Champagne Buttercream', price: 5 },
      { id: 'coffee-buttercream-filling', name: 'Coffee Buttercream', price: 4 }
    ],
    swissMeringue: [
      { id: 'vanilla-swiss-filling', name: 'Vanilla Swiss Meringue', price: 5 },
      { id: 'chocolate-swiss-filling', name: 'Chocolate Swiss Meringue', price: 5 },
      { id: 'strawberry-swiss-filling', name: 'Strawberry Swiss Meringue', price: 5 },
      { id: 'oreo-swiss-filling', name: 'Oreo Swiss Meringue', price: 5 },
      { id: 'lemon-swiss-filling', name: 'Lemon Swiss Meringue', price: 5 }
    ],
    whipped: [
      { id: 'vanilla-whipped-filling', name: 'Vanilla Whipped', price: 4 },
      { id: 'mocha-whipped-filling', name: 'Mocha Whipped', price: 4 },
      { id: 'oreo-milkshake-whipped-filling', name: 'Oreo Milkshake Whipped', price: 4 }
    ],
    specialty: [
      { id: 'cajeta', name: 'Cajeta', price: 5 },
      { id: 'pastry-cream', name: 'Pastry Cream', price: 4 },
      { id: 'nutella', name: 'Nutella', price: 5 },
      { id: 'pistachio-cream', name: 'Pistachio Cream', price: 6 },
      { id: 'cheesecake', name: 'Cheesecake', price: 6 },
      { id: 'banana-pudding', name: 'Banana Pudding', price: 5 }
    ]
  },
  frostings: {
    buttercream: [
      { id: 'vanilla-buttercream', name: 'Vanilla Buttercream' },
      { id: 'chocolate-buttercream', name: 'Chocolate Buttercream' },
      { id: 'strawberry-buttercream', name: 'Strawberry Buttercream' },
      { id: 'oreo-buttercream', name: 'Oreo Buttercream' },
      { id: 'lemon-buttercream', name: 'Lemon Buttercream' },
      { id: 'cream-cheese-buttercream', name: 'Cream Cheese Buttercream' },
      { id: 'peanut-butter-buttercream', name: 'Peanut Butter Buttercream' },
      { id: 'espresso-chocolate-buttercream', name: 'Espresso Chocolate Buttercream' },
      { id: 'pink-champagne-buttercream', name: 'Pink Champagne Buttercream' },
      { id: 'coffee-buttercream', name: 'Coffee Buttercream' }
    ],
    swissMeringue: [
      { id: 'vanilla-swiss-meringue', name: 'Vanilla Swiss Meringue' },
      { id: 'chocolate-swiss-meringue', name: 'Chocolate Swiss Meringue' },
      { id: 'strawberry-swiss-meringue', name: 'Strawberry Swiss Meringue' },
      { id: 'oreo-swiss-meringue', name: 'Oreo Swiss Meringue' },
      { id: 'lemon-swiss-meringue', name: 'Lemon Swiss Meringue' }
    ],
    whipped: [
      { id: 'vanilla-whipped', name: 'Vanilla Whipped' },
      { id: 'mocha-whipped', name: 'Mocha Whipped' },
      { id: 'oreo-milkshake-whipped', name: 'Oreo Milkshake Whipped' }
    ],
    other: [
      { id: 'chocolate-ganache', name: 'Chocolate Ganache' },
      { id: 'white-chocolate-ganache', name: 'White Chocolate Ganache' }
    ]
  }
}; 