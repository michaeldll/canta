import React from "react"
import { useEffect, useState } from "react"
import { GLTFLoader } from "../../lib/GLTFLoader"
import { loadGLTF } from "../../utils/webgl"

export default function GLTF({ url }) {
  const [scene, setScene] = useState(null)

  useEffect(() => {
    const loader = new GLTFLoader()
    loadGLTF(loader, url).then((gltf) => {
      const primitive = <primitive object={gltf.scene} />
      setScene(primitive)
    })
  }, [])

  return scene
}