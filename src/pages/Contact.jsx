import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

function Contact() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-kawaii-softPink via-white to-kawaii-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display text-kawaii-hotPink mb-4">
            Let's Talk Cake! ✨
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-2xl font-display text-kawaii-hotPink mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kawaii-pink focus:ring-2 focus:ring-kawaii-pink/20 outline-none transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kawaii-pink focus:ring-2 focus:ring-kawaii-pink/20 outline-none transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kawaii-pink focus:ring-2 focus:ring-kawaii-pink/20 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kawaii-pink focus:ring-2 focus:ring-kawaii-pink/20 outline-none transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Custom Order Inquiry</option>
                  <option value="question">General Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-kawaii-pink focus:ring-2 focus:ring-kawaii-pink/20 outline-none transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-kawaii-gradient text-white rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-display text-kawaii-hotPink mb-6">
                Visit Our Shop
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-kawaii-hotPink flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Sweet Street</p>
                    <p className="text-gray-600">San Francisco, CA 94110</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-kawaii-hotPink flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="text-gray-600">Saturday: 10am - 4pm</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-display text-kawaii-hotPink mb-6">
                Get in Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-kawaii-hotPink" />
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-kawaii-hotPink" />
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">hello@pastelitos.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-display text-kawaii-hotPink mb-6">
                Follow Us
              </h2>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-3 bg-kawaii-softPink rounded-full hover:bg-kawaii-pink/20 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-kawaii-hotPink" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-kawaii-softPink rounded-full hover:bg-kawaii-pink/20 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-kawaii-hotPink" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12">
          <div className="bg-white rounded-3xl shadow-xl p-4 h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8!2d-122.4!3d37.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQyJzAwLjAiTiAxMjLCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '1.5rem' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 