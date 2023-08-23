import { PresentationControls } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const PresentationControl = () => {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
            <PresentationControls
                global
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                config={{ mass: 2, tension: 500 }}
                snap={{ mass: 4, tension: 1500 }}
            >
                <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color="#B900F7" />
                </mesh>
            </PresentationControls>
        </Canvas>
    );
};

export default PresentationControl;