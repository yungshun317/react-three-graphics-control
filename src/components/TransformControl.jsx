import { TransformControls, OrbitControls } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const TransformControl = () => {
    return (
        <>
            <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
                <OrbitControls makeDefault />

                <TransformControls position-x={2} mode="translate">
                    <mesh>
                        <boxGeometry />
                        <meshBasicMaterial color="purple" />
                    </mesh>
                </TransformControls>
            </Canvas>
        </>
    );
};

export default TransformControl;