"use client";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import vertexShader from "./shaders/vertexShader";
import fragmentShader from "./shaders/fragmentShader";
import { useMemo } from "react";
import { MathUtils } from "three";
import { motion } from "framer-motion-3d";

const Shape = () => {
  const mesh = useRef(null);
  const hover = useRef(false);
  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  });

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 0.1 : 1,
        0.02
      );
    }
  });
  return (
    <motion.mesh
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.2 }}
      ref={mesh}
      scale={1.6}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        wireframe
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </motion.mesh>
  );
};
const Blob = () => {
  return (
    <Canvas
      className="-z-50 w-full  md:mt-[-24rem] md:!w-[50%]"
      camera={{ position: [0, 0, 8] }}
    >
      <Shape />
    </Canvas>
  );
};

export default Blob;
