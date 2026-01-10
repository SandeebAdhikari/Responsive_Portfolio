"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { useScroll } from "framer-motion";
import * as THREE from "three";

const Model = () => {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/assets/icons/engineer_room1.glb");
  const { scrollYProgress } = useScroll();
  const lastScroll = useRef<number>(-1);
  const autoRotation = useRef(0);
  const defaultColor = useMemo(() => new THREE.Color("#9bb1c9"), []);
  const colorMap = useMemo<Record<string, string>>(
    () => ({
      Cube: "#d8c4a0",
      Cube_1: "#c5b59c",
      Plane002: "#d9d9d9",
      Plane002_1: "#f3f3f3",
      ersaer_stand: "#c89f6c",
      table_slab: "#b07a4b",
      leg1: "#5b3a21",
      leg2: "#6b4227",
      leg3: "#7b4a2b",
      leg4: "#8b5330",
      leg5: "#9b5b35",
      h_tv: "#1e1f24",
      v_monitor: "#20222a",
      tv_h_stand: "#4b4f55",
      tv_v_stand: "#5b6067",
      keyboard: "#2c2d32",
      book_2: "#2f5f8f",
      book1: "#9a3f3f",
      chair_lower_Part: "#8b9199",
      chair_seat: "#2f4758",
      chair_back_rest: "#3b5a6f",
      Circle013: "#9aa3ad",
      Circle013_1: "#496579",
      chair_lower_plain: "#6f7883",
      cabinet_lower: "#7a5637",
      cabinet_upper: "#8b6643",
      vase_big: "#3f8a79",
      vase_small: "#5aa38c",
      cabinet_knob1: "#caa64d",
      cabinet_knob2: "#d4b25a",
    }),
    []
  );

  useEffect(() => {
    if (!scene) return;
    const box = new THREE.Box3().setFromObject(scene);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
    const doorName = "boolean_cube_door";
    scene.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (!mesh.isMesh || !mesh.material) return;
      const materials = Array.isArray(mesh.material)
        ? mesh.material
        : [mesh.material];
      const nextMaterials = materials.map((mat) => {
        if (!("color" in mat)) return mat;
        const next = mat.clone();
        const color = colorMap[mesh.name];
        (next as THREE.MeshStandardMaterial).color.set(
          color ? color : defaultColor
        );
        return next;
      });
      mesh.material = Array.isArray(mesh.material)
        ? nextMaterials
        : nextMaterials[0];
      if (mesh.name === doorName) {
        mesh.visible = false;
      }
    });
  }, [scene, colorMap, defaultColor]);

  useFrame((_state, delta) => {
    if (!ref.current) return;
    const current = scrollYProgress.get();
    lastScroll.current = current;
    autoRotation.current += delta * 0.15;
    const baseRotationY = -Math.PI / 6;
    const baseRotationX = Math.PI / 18;
    ref.current.rotation.y =
      baseRotationY + current * Math.PI * 2 + autoRotation.current;
    ref.current.rotation.x = baseRotationX + current * Math.PI * 0.3;
  });

  return <primitive ref={ref} object={scene} scale={0.4} position={[0, 0.25, 0]} />;
};

const ThreeBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none flex items-center justify-center">
      <Canvas
        className="h-full w-full"
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Model />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
