import React, { useState, useEffect } from 'react';
import { Instagram } from 'lucide-react';
import axios from 'axios';

function Gallery() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${INSTAGRAM_CONFIG.accessToken}`
        );
        setPosts(response.data.data);
      } catch (err) {
        setError('Failed to load Instagram feed');
        console.error('Instagram feed error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchInstagramFeed();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-pink-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <a 
            href="https://www.instagram.com/pastelitos_559/"
            target="_blank"
            rel="noopener noreferrer"
            className="y2k-button"
          >
            Visit Our Instagram
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-bubblegum text-5xl text-y2k-pink mb-4">
            ✨ Sweet Gallery ✨
          </h1>
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden"
            >
              <img
                src={post.media_url}
                alt={post.caption}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-y2k-pink/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;