import React, { useLayoutEffect } from 'react';
import * as THREE from 'three';
import { Canvas, applyProps } from '@react-three/fiber';
import {
  Center,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  useGLTF,
  Plane
} from '@react-three/drei';
import { FlakesTexture } from 'three-stdlib';
import { FullLayout } from '../components/fullLayout';

export default function onyourmark_lp() {
  return (
    <FullLayout>
      <Canvas shadows camera={{ position: [8, 1.5, 8], fov: 25 }}>
        <group position={[0, -0.5, 0]}>
          <Center top>
            <Starter rotation={[0.55, 1, -0.03]} scale={0.5} />
          </Center>
          <Center top position={[-2, 0, 1]}>
            <mesh castShadow>
              <sphereGeometry args={[0.25, 64, 64]} />
              <meshStandardMaterial color="lightblue" />
            </mesh>
          </Center>
          <Center top position={[2.5, 0, 1]}>
            <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
              <boxGeometry args={[0.5, 0.5, 0.5]} />
              <meshStandardMaterial color="indianred" />
            </mesh>
          </Center>
          <AccumulativeShadows
            temporal
            frames={100}
            color="orange"
            colorBlend={2}
            toneMapped={true}
            alphaTest={0.9}
            opacity={2}
            scale={12}
          >
            <RandomizedLight
              amount={8}
              radius={4}
              ambient={0.5}
              intensity={1}
              position={[5, 5, -10]}
              bias={0.001}
            />
          </AccumulativeShadows>
        </group>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
        <Environment preset="city" />
      </Canvas>
      <div style={{ fontSize: 20 }}>OnYourMark!!!</div>
      <div style={{ fontSize: 40 }}>まだ見ぬ自分へ、走り出せ！</div>
    </FullLayout>
  );
}

function Starter(props) {
  const { scene, materials } = useGLTF('../starter.gltf');
  useLayoutEffect(() => {
    scene.traverse(
      obj => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
    applyProps(materials.Material, {
      color: 'gray',
      roughness: 0.55,
      normalMap: new THREE.CanvasTexture(
        new FlakesTexture(),
        THREE.UVMapping,
        THREE.RepeatWrapping,
        THREE.RepeatWrapping
      ),
      'normalMap-repeat': [40, 40],
      normalScale: [0.05, 0.05]
    });
  });
  return <primitive object={scene} {...props} />;
}
