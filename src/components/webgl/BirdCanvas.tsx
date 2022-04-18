import React from "react"
import { Canvas } from "@react-three/fiber";
import GLTF from "./GLTF";
import { OrbitControls } from '@react-three/drei'

export default function BirdCanvas({ username, websocket }) {

    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls />
            <GLTF url={'/assets/models/cables-electrics-v4.gltf'} />
        </Canvas>
    )
}