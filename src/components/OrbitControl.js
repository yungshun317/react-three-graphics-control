import {OrbitControls} from "@react-three/drei";

const OrbitControl = () => {
    return (
        <>
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
        </>
    )
}

export default OrbitControl;