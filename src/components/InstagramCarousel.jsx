import React, { useState, useEffect } from 'react';
import { Instagram, ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';
import { INSTAGRAM_CONFIG } from '../config/instagram';

function InstagramCarousel() {
  const [posts, setPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/v12.0/${INSTAGRAM_CONFIG.userId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_CONFIG.accessToken}&limit=9`
        );
        setPosts(response.data.data);
      } catch (err) {
        console.error('Instagram feed error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramFeed();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === posts.length - 3 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval);
  }, [posts.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === posts.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posts.length - 3 : prevIndex - 1
    );
  };

  if (loading || posts.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {posts.map((post) => (
            <div 
              key={post.id}
              className="w-1/3 flex-shrink-0 p-1"
            >
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-xl overflow-hidden block"
              >
                <img
                  src={post.media_url}
                  alt={post.caption}
                  className="w-full h-full object-cover transform group-hover:scale-110 
                    transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-y2k-pink/50 opacity-0 
                  group-hover:opacity-100 transition-opacity flex items-center 
                  justify-center">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 
          hover:bg-white rounded-full p-2 shadow-lg transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-y2k-pink" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 
          hover:bg-white rounded-full p-2 shadow-lg transition-all"
      >
        <ChevronRight className="w-6 h-6 text-y2k-pink" />
      </button>
    </div>
  );
}

export default InstagramCarousel; 