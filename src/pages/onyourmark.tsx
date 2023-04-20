import React, { useLayoutEffect, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, applyProps, useFrame } from '@react-three/fiber';
import {
  Center,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  useGLTF,
  Text
} from '@react-three/drei';
import { FlakesTexture } from 'three-stdlib';
import { Container } from '@chakra-ui/react';
import Logo from '../img/onyourmark_logo.png';
import { Header } from '../components/header';
import '../styles/index.scss';

export default function onyourmark_lp() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <Container
        maxW="100%"
        height={windowSize[0] / 2.5}
        className="full-layout"
      >
        <img
          src={Logo}
          className="logo"
          style={{
            position: 'absolute',
            width: windowSize[0] / 5
          }}
        />
        <Canvas shadows camera={{ position: [30, 40, 0], fov: 13 }}>
          <group position={[-2, 0, -5]}>
            <Center top>
              <Starter rotation={[0.55, 1, -0.03]} scale={0.6} />
            </Center>
            <Center top position={[-2, 0, 2]}>
              <mesh castShadow>
                <sphereGeometry args={[0.25, 64, 64]} />
                <meshStandardMaterial color="lightblue" />
              </mesh>
            </Center>
            <Center top position={[2.5, 0, 0]}>
              <mesh castShadow rotation={[0, Math.PI / 4, 0]}>
                <boxGeometry args={[0.5, 0.5, 0.5]} />
                <meshStandardMaterial color="indianred" />
              </mesh>
            </Center>
            <Center top position={[0, 0, -4]}>
              <mesh castShadow>
                <cylinderGeometry args={[0.4, 0.4, 0.4]} />
                <meshStandardMaterial color="#5c94cc" />
              </mesh>
            </Center>
            <AccumulativeShadows
              temporal
              frames={100}
              color="#5EB0C5"
              colorBlend={2}
              toneMapped={true}
              alphaTest={0.9}
              opacity={2}
              scale={10}
            >
              <RandomizedLight
                amount={8}
                radius={4}
                ambient={0.5}
                intensity={1}
                position={[-5, 5, -6]}
                bias={0.001}
              />
            </AccumulativeShadows>
            <Caption castShadow>{`まだ見ぬ自分へ走り出せ。`}</Caption>
          </group>
          <Rig />
          <Environment preset="city" />
        </Canvas>
      </Container>
    </div>
  );
}

function Rig({ v = new THREE.Vector3() }) {
  return useFrame(state => {
    state.camera.position.lerp(
      v.set(30, state.mouse.y / 2 + 40, state.mouse.x / 2),
      0.05
    );
  });
}

function Caption({ children }) {
  return (
    <Text
      position={[3, 0, 3.5]}
      lineHeight={0.8}
      font="../ShipporiMincho-Medium.ttf"
      fontSize={2.2}
      material-toneMapped={false}
      anchorX="center"
      anchorY="middle"
      rotation={[-Math.PI / 2, 0, (Math.PI * 1.2) / 2]}
    >
      {children}
    </Text>
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
