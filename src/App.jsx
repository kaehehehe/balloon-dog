import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { BalloonDog } from "./components/BalloonDog";
import "./styles.css";

export default function App() {
  return (
    <Canvas camera={{ fov: 75, position: [0, 4, 10], near: 1, far: 100 }}>
      <BalloonDog />
      <Environment preset="sunset" />
      <OrbitControls minDistance={3} maxDistance={30} />
    </Canvas>
  );
}
