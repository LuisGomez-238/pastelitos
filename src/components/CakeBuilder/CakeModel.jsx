import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const CAKE_COLORS = {
  vanilla: '#F5E6D3',
  chocolate: '#4A3728',
  strawberry: '#FFB5B5',
  'red-velvet': '#8B0000'
}

function CakeModel({ cakeState, isRotating }) {
  const groupRef = useRef()

  useFrame((state) => {
    if (isRotating) {
      groupRef.current.rotation.y += 0.005
    }
  })

  return (
    <group ref={groupRef}>
      {/* Base plate */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2, 2, 0.1, 32]} />
        <meshStandardMaterial color="#E6E6FA" />
      </mesh>

      {/* Render cake layers */}
      {cakeState.layers.map((layer, index) => (
        <mesh 
          key={index} 
          position={[0, (index * 0.5), 0]}
        >
          <cylinderGeometry 
            args={[
              1.5 - (index * 0.1), // top radius
              1.5 - (index * 0.1), // bottom radius
              0.5, // height
              32 // segments
            ]} 
          />
          <meshStandardMaterial 
            color={CAKE_COLORS[layer.flavor]}
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

export default CakeModel 