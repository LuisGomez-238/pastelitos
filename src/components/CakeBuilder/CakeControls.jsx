import { useDrag } from 'react-dnd'
import './CakeControls.css'

const CAKE_OPTIONS = {
  flavors: [
    { id: 'vanilla', name: 'Vanilla', color: '#F5E6D3' },
    { id: 'chocolate', name: 'Chocolate', color: '#4A3728' },
    { id: 'strawberry', name: 'Strawberry', color: '#FFB5B5' },
    { id: 'red-velvet', name: 'Red Velvet', color: '#8B0000' }
  ]
}

function CakeControls({ cakeState }) {
  return (
    <div className="cake-controls-inner">
      <section className="control-section">
        <h3 className="y2k-subtitle">Drag to Add Layers</h3>
        <div className="layer-options">
          {CAKE_OPTIONS.flavors.map(flavor => (
            <DraggableLayer 
              key={flavor.id} 
              flavor={flavor}
            />
          ))}
        </div>
      </section>

      {/* Current Cake Layers */}
      <section className="control-section">
        <h3 className="y2k-subtitle">Current Layers</h3>
        <div className="current-layers">
          {cakeState.layers.map((layer, index) => (
            <div 
              key={index} 
              className="layer-preview"
              style={{ backgroundColor: CAKE_OPTIONS.flavors.find(f => f.id === layer.flavor)?.color }}
            >
              {CAKE_OPTIONS.flavors.find(f => f.id === layer.flavor)?.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function DraggableLayer({ flavor }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'layer',
    item: { type: 'layer', flavor: flavor.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }))

  return (
    <div
      ref={drag}
      className={`layer-option ${isDragging ? 'dragging' : ''}`}
      style={{ 
        backgroundColor: flavor.color,
        opacity: isDragging ? 0.5 : 1,
        color: isLightColor(flavor.color) ? '#333' : '#fff'
      }}
    >
      {flavor.name}
    </div>
  )
}

// Helper function to determine text color based on background
function isLightColor(color) {
  const hex = color.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000
  return brightness > 128
}

export default CakeControls