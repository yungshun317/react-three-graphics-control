import {Grid} from "@react-three/drei";
import {useRef} from "react";
import * as THREE from "three/src/math/MathUtils";

const CameraControl = () => {
    const cameraControlRef = useRef();

    const { DEG2RAD } = THREE.MathUtils;
    console.log(DEG2RAD);

    return (
        <>
            <Grid
                args={[30, 30]}
                cellSize={0.25}
                cellColor="#6f6f6f"
                sectionSize={1}
                sectionThickness={1.5}
                sectionColor="#6364A6"
                fadeDistance={20}
                fadeStrength={0.75}
            />

            <mesh>
                <boxGeometry/>
                <meshBasicMaterial color="#B900F7"/>
            </mesh>
        </>
    );
};

export default CameraControl;