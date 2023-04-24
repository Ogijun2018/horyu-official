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
import {
  Container,
  Center as UICenter,
  Text as UIText,
  VStack,
  Divider,
  Heading,
  Highlight,
  Box,
  OrderedList,
  ListItem,
  Image
} from '@chakra-ui/react';
import Logo from '../img/onyourmark_logo.png';
import Jacket from '../img/onyourmark_jacket.png';
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
            <Caption>{`まだ見ぬ自分へ走り出せ。`}</Caption>
          </group>
          <Rig />
          <Environment preset="city" />
        </Canvas>
      </Container>
      <UICenter pt={50}>
        <VStack>
          <UIText fontSize="4xl" fontWeight="bold">
            OnYourMark!!!
          </UIText>
          <UIText fontSize="2xl" fontWeight="semibold" fontStyle="italic">
            まだ見ぬ自分へ走り出せ。
          </UIText>
          <Divider />
          <UIText fontSize="2xl" fontWeight="semibold">
            2023 M3-spring 2023/04/30(SUN)
          </UIText>
          <UIText fontSize="2xl" fontWeight="semibold">
            第一展示場 F-14a
          </UIText>
          <Box maxW="80%" pt={50} pb={50}>
            <Heading as="h3" size="lg" lineHeight="tall">
              <Highlight
                query={['OnYourMark!!!', '始まり', '挑戦', '再起']}
                styles={{ px: '2', py: '1', bg: 'black', color: 'white' }}
              >
                OnYourMark!!!をテーマに、「始まり」「挑戦」「再起」をイメージした3曲を収録。
              </Highlight>
            </Heading>
            <Heading as="h3" size="lg" lineHeight="tall">
              <Highlight
                query={['OnYourMark!!!', '始まり', '挑戦', '再起']}
                styles={{ px: '2', py: '1', bg: 'black', color: 'white' }}
              >
                サークル初のボーカル入り表題曲
                &quot;OnYourMark!!!&quot;と共に、新たな環境で未知なる未来を目指す人々に向けた1枚!
              </Highlight>
            </Heading>
          </Box>
          <Divider />

          <Image pt={50} maxW="sm" src={Jacket} alt="onyourmark_jacket" />

          <Heading pt={50}>Music Video</Heading>
          <div className="youtube">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kdLnkoQMmFQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <Heading pt={50}>TrackList</Heading>
          <OrderedList fontSize="2xl" fontWeight="semibold" pb={50} maxW="80%">
            <ListItem>OnYourMark!!!</ListItem>
            <ListItem>Last Challenger [Neurocore]</ListItem>
            <ListItem>Fire in the Rain [Symphonic Hardcore]</ListItem>
            <ListItem>OnYourMark!!! (instrumental)</ListItem>
          </OrderedList>

          <Divider />

          <Heading pt={50}>Credit</Heading>
          <Heading pt={10} fontSize="3xl">
            All Music Compose
          </Heading>
          <UIText fontSize="4xl">
            <div className="social-link">
              <a href="https://twitter.com/shimaemon_o3o?s=20">shimaemon</a>
            </div>
          </UIText>
          <Heading pt={10} fontSize="3xl">
            Illustration
          </Heading>
          <UIText fontSize="4xl">
            <div className="social-link">
              <a href="https://twitter.com/cat_earthen_pot?s=20">猫土瓶</a>
            </div>
          </UIText>
          <Heading pt={10} fontSize="3xl">
            Design
          </Heading>
          <UIText pb={50} fontSize="4xl">
            <div className="social-link">
              <a href="https://twitter.com/ogijun_design?s=20">ogijun</a>
            </div>
          </UIText>

          <Divider />

          <UIText pt={50}>©︎ 保留 2023</UIText>
        </VStack>
      </UICenter>
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
