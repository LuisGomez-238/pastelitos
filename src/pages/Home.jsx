import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Sparkles, Cherry, Instagram } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 relative">
      {/* Floating Instagram Button */}
      <a 
        href="https://www.instagram.com/pastelitos_559/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 y2k-button 
          bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 
          hover:to-pink-600 shadow-lg hover:-translate-y-1 transition-transform"
      >
        <Instagram className="w-5 h-5" />
        <span className="hidden sm:inline">Follow Us</span>
      </a>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <img 
            src="/pastelitosLogo.svg" 
            alt="Pastelitos Logo" 
            className="w-80 h-80 mx-auto mb-6"
          />

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/cake-builder" className="y2k-button group">
              <span className="flex items-center">
                Design Your Cake
                <Heart className="w-5 h-5 ml-2 group-hover:text-y2k-yellow transition-colors" />
              </span>
            </Link>
            
            <Link to="/gallery" className="y2k-button bg-y2k-lavender hover:bg-y2k-blue">
              <span className="flex items-center">
                View Gallery
                <Star className="w-5 h-5 ml-2" />
              </span>
            </Link>
          </div>
        </div>

        {/* Floating Cake Images */}
        {/* <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative group animate-float" style={{ animationDelay: `${i * 0.2}s` }}>
              <div className="absolute inset-0 bg-white rounded-2xl rotate-3 group-hover:rotate-6 transition-transform" />
              <img
                src={`/images/cake-${i}.jpg`}
                alt={`Kawaii Cake ${i}`}
                className="relative rounded-2xl border-4 border-white shadow-kawaii 
                  group-hover:-translate-y-2 transition-transform"
              />
            </div>
          ))}
        </div> */}
      </div>

      {/* Featured Products Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/sparkle-pattern.png')] opacity-5" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bubblegum text-5xl text-y2k-pink mb-4">
              ✨ We are currently LOVING ✨
            </h2>
            <p className="font-bubblegum text-4xl text-y2k-lavender">
              Nuestros Favoritos! 🌟
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-glitter-gradient rounded-3xl rotate-2 
                  group-hover:rotate-3 transition-transform duration-300" />
                
                <div className="relative bg-white rounded-3xl p-6 border-2 border-y2k-pink 
                  shadow-kawaii group-hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 
                        transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-y2k-pink/50 
                      to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-white animate-bounce-slow" />
                    </div>
                  </div>

                  <h3 className="font-bubblegum text-2xl text-y2k-pink mb-2">
                    {product.name} ✨
                  </h3>
                  <p className="font-kawaii text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <Link to={`/product/${product.id}`} className="y2k-button w-full">
                    Order Now 💝
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-glitter-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bubblegum text-5xl text-white mb-4">
              ✨ Why Choose Us? ✨
            </h2>
            <p className="font-kawaii text-white/90">
              Because we make every cake with love and magic! 💖
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 
                border-2 border-y2k-pink shadow-kawaii hover:-translate-y-1 transition-transform">
                <div className="w-16 h-16 mx-auto mb-4 bg-y2k-pink rounded-full 
                  flex items-center justify-center border-2 border-white">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bubblegum text-2xl text-y2k-pink text-center mb-2">
                  {feature.title}
                </h3>
                <p className="font-kawaii text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bubblegum text-5xl text-y2k-pink mb-4">
              ✨ Sweet Gallery ✨
            </h2>
            <p className="font-kawaii text-gray-600 mb-4">
              Follow us on Instagram for daily doses of sweetness! 📸
            </p>
            <a 
              href="https://www.instagram.com/pastelitos_559/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 y2k-button bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600"
            >
              <Instagram className="w-5 h-5" />
              @pastelitos_559
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post, index) => (
              <a
                key={index}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-2xl overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 
                    transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-y2k-pink/50 opacity-0 
                  group-hover:opacity-100 transition-opacity flex items-center 
                  justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-glitter-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-bubblegum text-5xl text-white mb-6">
            ✨ Ready to Create Your Dream Cake? ✨
          </h2>
          <p className="font-kawaii text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's make something magical together! 🌈
          </p>
          <Link to="/cake-builder" className="y2k-button bg-white text-y2k-pink 
            hover:bg-y2k-yellow hover:text-white">
            Start Designing Now 💝
          </Link>
        </div>
      </section>
    </div>
  );
}

const featuredProducts = [
  {
    id: 1,
    name: "Unicorn Dream",
    description: "Magical vanilla cake with rainbow buttercream ✨",
    image: "/images/unicorn-cake.jpg"
  },
  // Add more products...
];

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every cake is baked with extra sprinkles of happiness!"
  },
  // Add more features...
];

const instagramPosts = [
  {
    image: "/images/insta-1.jpg",
    link: "https://www.instagram.com/pastelitos_559/"
  },
  // Add more posts...
];

export default Home;