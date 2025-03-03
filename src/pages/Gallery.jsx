import { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

function Gallery() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    // Clean up any existing script
    const existingScript = document.getElementById('instagram-embed-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create and load Instagram embed script
    const script = document.createElement('script');
    script.id = 'instagram-embed-script';
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.defer = true;
    
    // Process embeds once script is loaded
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    
    document.body.appendChild(script);
    
    // Cleanup on unmount
    return () => {
      if (document.getElementById('instagram-embed-script')) {
        document.getElementById('instagram-embed-script').remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-seasons text-5xl text-y2k-pink mb-4">
            ✨ Sweet Gallery ✨
          </h1>
          <p className="font-seasons text-gray-600 mb-4">
            Follow us on Instagram for daily doses of sweetness! 📸
          </p>
          <a 
            href="https://www.instagram.com/pastelitos_559/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 y2k-button bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 font-seasons"
          >
            <Instagram className="w-5 h-5" />
            @pastelitos_559
          </a>
        </div>

        {/* Instagram Profile Embed */}
        <div className="mb-12 flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/pastelitos_559/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%'
            }}
          >
          </blockquote>
        </div>

        {/* Individual Post Embeds - Using pastelitos_559 account */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DGd52w7yr0R/?utm_source=ig_embed&ig_rid=be4c7f55-82e7-42ed-98ac-b7acde910251"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%'
            }}
          >
          </blockquote>
          
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DGJFf_evtLu/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%'
            }}
          >
          </blockquote>
          
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DFo7oHHxjEm/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%'
            }}
          >
          </blockquote>
          
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DCuZcmNSJf8/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%'
            }}
          >
          </blockquote>
          
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DFcBTK2xKIg/?img_index=1"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%'
            }}
          >
          </blockquote>
          
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DDvZfZ4yElr/"
            data-instgrm-version="14"
            style={{
              background: '#FFF',
              border: '0',
              borderRadius: '3px',
              boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: '0',
              width: '99.375%'
            }}
          >
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Gallery;