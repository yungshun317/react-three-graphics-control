import { Image, useScroll } from "@react-three/drei";
import { useThree, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Images = () => {
    const { width, height } = useThree((state) => state.viewport);
    const scroll = useScroll();
    const groupRef = useRef();

    useFrame(() => {
        groupRef.current.children[0].material.zoom = 1 + scroll.range(0, 1 / 3) / 3;
        groupRef.current.children[1].material.zoom = 1 + scroll.range(1 / 3, 1 / 3);
        groupRef.current.children[2].material.zoom = 1 + scroll.range(1 / 3, 1 / 3);
        groupRef.current.children[3].material.zoom = 1 + scroll.range(1 / 3, 1 / 3);
        groupRef.current.children[4].material.zoom = 1 + scroll.range(2 / 3, 1 / 3) / 3;
        groupRef.current.children[4].material.grayscale = 1 - scroll.range(2 / 3, 1 / 3);
        groupRef.current.children[5].material.zoom = 2 - scroll.range(2 / 3, 1 / 3);

        console.log(scroll.range(0, 0.33));
    });

    return (
        <group ref={groupRef}>
            <Image
                url="./static/images/1.jpg"
                scale={[4, height, 1]}
                position={[-2, 0, 0]}
                grayscale={0}
                zoom={1}
            />
            <Image
                position={[-2.3, -height, 2]}
                scale={[1, 3, 1]}
                url="./static/images/2.jpg"
            />
            <Image
                position={[-0.6, -height, 3]}
                scale={[1, 2, 1]}
                url="./static/images/3.jpg"
            />
            <Image
                position={[0.75, -height, 3.5]}
                scale={1.5}
                url="./static/images/4.jpg"
            />
            <Image
                position={[0, -height * 1.5, 2.5]}
                scale={[1.5, 3, 1]}
                url="./static/images/5.jpg"
                grayscale={1}
            />
            <Image
                position={[0, -height * 2 - height / 4, 0]}
                scale={[width, height / 2, 1]}
                url="./static/images/6.jpg"
            />
        </group>
    );
};

export default Images;