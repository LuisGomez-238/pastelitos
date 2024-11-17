import './Gallery.css'

function Gallery() {
  return (
    <div className="gallery">
      <h1 className="y2k-title">✨ Our Sweet Creations ✨</h1>
      
      <div className="gallery-grid">
        {/* We'll replace these with actual cake images */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="gallery-item y2k-container">
            <img 
              src={`https://placehold.co/400x300/FFB6C1/fff?text=Cake+${item}`} 
              alt={`Cake ${item}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery