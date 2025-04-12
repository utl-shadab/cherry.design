"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { ChevronRight } from "lucide-react";

const CherryModel = ({ mouse }: { mouse: { x: number; y: number } }) => {
  const cherryRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/cherry.glb");

  useFrame(() => {
    if (cherryRef.current) {
      cherryRef.current.rotation.y = THREE.MathUtils.lerp(
        cherryRef.current.rotation.y,
        mouse.x * 0.3,
        0.1
      );
      cherryRef.current.rotation.x = THREE.MathUtils.lerp(
        cherryRef.current.rotation.x,
        -mouse.y * 0.2,
        0.1
      );
    }
  });

  return (
    <group ref={cherryRef} scale={0.8} position={[0, -1.5, 0]}>
      <primitive object={scene} />
    </group>
  );
};

const ConsultationSection = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    setMouse({ x, y });
  };

  return (
    <section
      className="bg-black text-white py-24 px-6 text-center flex flex-col items-center justify-center min-h-screen"
      onMouseMove={handleMouseMove}
    >
      <p className="text-gray-500 text-sm mb-2">Have any questions?</p>
      <h2 className="text-4xl md:text-6xl font-light leading-tight max-w-3xl">
        Get a free consultation <br /> about your projects.
      </h2>

      {/* Three.js Cherry Model */}
      <div className="w-[200px] h-[200px] mt-6">
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 5, 3]} intensity={1.2} />
          <Environment preset="studio" />
          <CherryModel mouse={mouse} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <p className="text-gray-400 mt-6 max-w-xl">
        Let's discuss your project or maybe a vision you have in mind.
        <br /> Book a quick call with our team and see where it goes.
      </p>

      <button className="mt-6 bg-white text-black px-6 py-2 flex items-center rounded-full text-lg shadow-lg"
       onClick={() => window.open("https://calendly.com/shadab28696/30min", "_blank")}>
        Book a Call
        <span className="ml-2 text-white bg-[#C1141D] p-1 rounded-full"><ChevronRight size={23}/></span>
      </button>
    </section>
  );
};

export default ConsultationSection;
