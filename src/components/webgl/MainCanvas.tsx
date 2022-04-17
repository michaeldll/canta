import React from "react"
import { Canvas } from "@react-three/fiber";
import Box from "./Box";

export default function MainCanvas(){
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[0, 0, 0]} />
        </Canvas>
    )
}