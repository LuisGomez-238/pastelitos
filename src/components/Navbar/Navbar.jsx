import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Sparkles, Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-y2k-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            
              <img 
            src="/pastelitosLogo.svg" 
            alt="Pastelitos Logo" 
            className="w-20 h-20 mx-auto mb-6 mt-6"
          />
            <span className="font-seasons text-2xl text-y2k-pink">
              Welcome to our shop!
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Menu', path: '/menu', icon: Star },
              { name: 'Custom Cakes', path: '/cake-builder', icon: Sparkles },
              { name: 'Gallery', path: '/gallery', icon: Heart },
              { name: 'About', path: '/about', icon: Star },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group flex items-center space-x-2 font-seasons text-y2k-pink 
                  hover:text-y2k-babypink transition-colors"
              >
                <item.icon className="w-5 h-5 group-hover:animate-bounce-slow" />
                <span>{item.name}</span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="y2k-button text-sm py-2"
            >
              Contact Us 💌
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full bg-y2k-pink/10 text-y2k-pink 
              hover:bg-y2k-pink/20 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b-2 border-y2k-pink">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {[
              { name: 'Menu', path: '/menu', icon: Star },
              { name: 'Custom Cakes', path: '/cake-builder', icon: Sparkles },
              { name: 'Gallery', path: '/gallery', icon: Heart },
              { name: 'About', path: '/about', icon: Star },
              { name: 'Contact', path: '/contact', icon: Heart },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-2 font-seasons text-y2k-pink 
                  hover:text-y2k-babypink transition-colors p-3 rounded-full 
                  hover:bg-y2k-pink/10"
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar; 