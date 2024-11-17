import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-seasons text-5xl text-y2k-pink mb-4">
            ✨ Contact Us ✨
          </h1>
          <p className="font-seasons text-xl text-gray-600 max-w-3xl mx-auto">
            Let's create something sweet together! 🎀
          </p>
        </div>

        {/* Contact form with updated fonts */}
        <form className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block font-seasons text-y2k-pink mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-xl border-2 border-pink-300 focus:border-pink-500 focus:outline-none font-seasons"
              />
            </div>
            {/* ... other form fields ... */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact; 