import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import './CakeCanvas.css'

function CakeCanvas({ cakeState }) {
  return (
    <div className="cake-canvas-container">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        {/* Base plate */}
        <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[2, 2, 0.1, 32]} />
          <meshStandardMaterial color="#E6E6FA" />
        </mesh>

        {/* Cake layers */}
        {cakeState.layers.map((layer, index) => (
          <mesh key={index} position={[0, index * 0.5, 0]}>
            <cylinderGeometry args={[1.5, 1.5, 0.5, 32]} />
            <meshStandardMaterial 
              color={getLayerColor(layer.flavor)}
              roughness={0.7}
            />
          </mesh>
        ))}

        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}

// Helper function to get colors for different cake flavors
function getLayerColor(flavor) {
  const colors = {
    vanilla: '#F5E6D3',
    chocolate: '#4A3728',
    strawberry: '#FFB5B5',
    'red-velvet': '#8B0000'
  }
  return colors[flavor] || '#F5E6D3'
}

export default CakeCanvas 