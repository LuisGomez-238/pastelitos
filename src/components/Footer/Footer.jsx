import React from 'react';
import { Heart, Star, Instagram, Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-glitter-gradient pt-20 pb-10">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-white 
        [clip-path:polygon(0_0,5%_100%,10%_0,15%_100%,20%_0,25%_100%,30%_0,35%_100%,40%_0,45%_100%,50%_0,55%_100%,60%_0,65%_100%,70%_0,75%_100%,80%_0,85%_100%,90%_0,95%_100%,100%_0)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center 
                border-2 border-y2k-pink shadow-kawaii">
                <Heart className="w-6 h-6 text-y2k-pink" />
              </div>
              <span className="font-bubblegum text-2xl text-white">Pastelitos</span>
            </div>
            <p className="font-kawaii text-white/90">
              Making your sweetest dreams come true, one cake at a time! ✨
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-bubblegum text-xl text-white mb-6">Quick Links</h3>
            <div className="space-y-4">
              {[
                { name: 'Menu', path: '/menu' },
                { name: 'Custom Cakes', path: '/cake-builder' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block font-kawaii text-white/90 hover:text-white 
                    hover:scale-105 transform transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="font-bubblegum text-xl text-white mb-6">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Mail, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center 
                    border-2 border-y2k-pink shadow-kawaii hover:scale-110 transform transition-all"
                >
                  <social.icon className="w-5 h-5 text-y2k-pink" />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="text-center mt-12 col-span-1 md:col-span-3">
            <div className="border-t border-white/20 pt-6">
              <p className="font-kawaii text-white/80 text-sm">
                © {new Date().getFullYear()} Pastelitos. All rights reserved.
              </p>
              <p className="font-kawaii text-white/70 text-xs mt-1">
                Designed & Developed by <a href="#" className="text-y2k-yellow hover:text-white transition-colors">AWEVO Software Solutions LLC</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 