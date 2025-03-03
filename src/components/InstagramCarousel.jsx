import { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

function InstagramCarousel() {
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
    <div className="relative" ref={containerRef}>
      <div className="overflow-hidden rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Instagram feed from pastelitos_559 */}
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
        </div>
      </div>
      
      <div className="text-center mt-4">
        <a 
          href="https://www.instagram.com/pastelitos_559/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 y2k-button bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 font-seasons"
        >
          <Instagram className="w-5 h-5" />
          See More on Instagram
        </a>
      </div>
    </div>
  );
}

export default InstagramCarousel; 