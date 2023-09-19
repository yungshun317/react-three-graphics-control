import {Scroll, ScrollControls, useGLTF} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";
import Images from "./Images";

const ScrollControl = () => {
    const model = useGLTF("./static/models/model.gltf");

    return (
        <>
            <Canvas camera={{position: [0, 0, 5], fov: 60}}>
                <ambientLight intensity={4} />
                <directionalLight/>

                <ScrollControls
                    pages={3}
                    damping={0.4}
                    infinite
                    // horizontal
                >
                    <Scroll>
                        <Images />
                        <primitive
                            object={model.scene}
                            position={[1.5, -1, 0]}
                            scale={1}
                        />
                    </Scroll>

                    <Scroll html>
                        <h1 style={{position: "absolute", top: "60vh", left: "0.5em"}}>
                            to
                        </h1>
                        <h1 style={{position: "absolute", top: "120vh", left: "60vw"}}>
                            be
                        </h1>
                        <h1
                            style={{
                                position: "absolute",
                                top: "198.5vh",
                                left: "0.5vw",
                                fontSize: "40vw",
                            }}
                        >
                            home
                        </h1>
                    </Scroll>
                </ScrollControls>
            </Canvas>
        </>
    );
};

export default ScrollControl;