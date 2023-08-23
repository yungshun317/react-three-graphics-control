import { PivotControls } from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const PivotControl = () => {
    return (
        <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
            <PivotControls
                anchor={[-1, 0, 0]}
                depthTest={false}
                axisColors={["red", "green", "cyan"]}
                lineWidth={7}
                scale={2}
            >
                <mesh position-x={2} scale={2}>
                    <boxGeometry />
                    <meshBasicMaterial color="purple" />
                </mesh>
            </PivotControls>
        </Canvas>
    );
};

export default PivotControl;