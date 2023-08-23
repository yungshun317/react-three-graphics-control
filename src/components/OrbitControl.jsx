import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const OrbitControl = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
                <OrbitControls
                    // enableDamping={true}
                    // dampingFactor={0.05}
                    // autoRotate={true}
                    // autoRotateSpeed={8}

                    // Orbit horizontally
                    maxAzimuthAngle={Math.PI / 2}
                    minAzimuthAngle={-Math.PI / 2}

                    // Orbit vertically
                    maxPolarAngle={Math.PI / 4}
                    minPolarAngle={-Math.PI / 4}
                />

                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color="#B900F7" />
                </mesh>
            </Canvas>
        </>
    )
}

export default OrbitControl;