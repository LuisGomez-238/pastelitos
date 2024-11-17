import React from 'react';
import { Heart, Star, Clock, Award, Users, Sparkles } from 'lucide-react';
import CakeLogo from '../components/ui/CakeLogo';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-seasons text-5xl text-y2k-pink mb-4">
            ✨ About Pastelitos ✨
          </h1>
          <p className="font-seasons text-xl text-gray-600 max-w-3xl mx-auto">
            Creating magical moments, one cake at a time! 🌈
          </p>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <CakeLogo className="w-20 h-20" />
          </div>
          <h1 className="text-4xl md:text-5xl font-display text-kawaii-hotPink mb-4">
            Our Sweet Story ✨
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Creating moments of joy through the art of baking
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-kawaii-gradient opacity-10 rounded-3xl transform rotate-3"></div>
            <img 
              src="/images/bakery-story.jpg" 
              alt="Our Bakery" 
              className="relative rounded-3xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-display text-kawaii-hotPink mb-6">
              A Family Tradition of Sweetness
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2020, Pastelitos began with a simple dream: to create the most delightful 
                and memorable cakes for life's special moments. What started as a small home kitchen 
                has blossomed into a beloved local bakery.
              </p>
              <p>
                Our passion for baking is matched only by our love for bringing smiles to our 
                customers' faces. Every cake we create is crafted with care, creativity, and the 
                finest ingredients.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-20">
          <h2 className="text-3xl font-display text-kawaii-hotPink text-center mb-12">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Made with Love',
                description: 'Every cake is baked with passion and care, just like homemade'
              },
              {
                icon: Star,
                title: 'Quality Ingredients',
                description: 'We use only the finest, freshest ingredients in all our creations'
              },
              {
                icon: Clock,
                title: 'Fresh Daily',
                description: 'All our cakes are baked fresh to order, never frozen'
              },
              {
                icon: Award,
                title: 'Award Winning',
                description: 'Recognized for our unique designs and flavors'
              },
              {
                icon: Users,
                title: 'Customer First',
                description: 'Your satisfaction is our top priority'
              },
              {
                icon: Sparkles,
                title: 'Custom Designs',
                description: 'Each cake can be personalized to your vision'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl
                  hover:bg-kawaii-softPink/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-kawaii-gradient flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-display text-kawaii-hotPink mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-display text-kawaii-hotPink mb-12">
            Meet Our Sweet Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Rodriguez',
                role: 'Head Baker',
                image: '/images/baker-1.jpg'
              },
              {
                name: 'David Chen',
                role: 'Cake Designer',
                image: '/images/baker-2.jpg'
              },
              {
                name: 'Sarah Johnson',
                role: 'Pastry Chef',
                image: '/images/baker-3.jpg'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display text-kawaii-hotPink mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-kawaii-gradient rounded-3xl p-8 text-center text-white">
          <h2 className="text-3xl font-display mb-4">
            Let's Create Something Sweet Together
          </h2>
          <p className="mb-6 opacity-90">
            Have questions or special requests? We'd love to hear from you!
          </p>
          <button className="px-8 py-3 bg-white text-kawaii-hotPink rounded-full font-medium 
            hover:bg-opacity-90 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default About; 