import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const loadGLTF = (loader: GLTFLoader, url: string) =>
  new Promise<GLTF>((resolve, reject) => {
    loader.load(
      url,
      (gltf) => resolve(gltf),
      () => { },
      (event) => reject(event)
    );
  });