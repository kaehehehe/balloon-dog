import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import React, { useRef } from "react";
import * as THREE from "three";

export function BalloonDog() {
  const { scene } = useGLTF("balloon-dog.glb");
  const modelRef = useRef();

  const { color, metalness, roughness, ior, alpha } = useControls(
    "Balloon Dog",
    {
      color: { value: "#FFBAE0FF" },
      metalness: { value: 0.3, min: 0, max: 1, step: 0.1 },
      roughness: { value: 0.1, min: 0, max: 1, step: 0.1 },
      ior: { value: 1.45, min: 0, max: 2, step: 0.1 },
      alpha: { value: 0.6, min: 0, max: 1, step: 0.1 },
    },
    { collapsed: true }
  );

  scene.traverse((child) => {
    if (child.isMesh) {
      const material = new THREE.MeshPhysicalMaterial({
        color,
        metalness,
        roughness,
        transparent: alpha < 1,
        opacity: alpha,
        ior,
      });

      child.material = material;
      child.material.needsUpdate = true;
    }
  });

  modelRef.current = scene;

  return (
    <mesh ref={modelRef} position={[0, -6, 0]} rotation={[0, -Math.PI / 3, 0]}>
      <primitive object={modelRef.current} scale={[2, 2, 2]} />
    </mesh>
  );
}
