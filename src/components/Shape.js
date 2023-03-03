import * as THREE from 'three'
import { useRef, Suspense } from 'react';
import { extend, useFrame } from '@react-three/fiber'

import { useTexture } from '@react-three/drei';
import { GradientShader2Material } from "./../shaders/gradient2";
extend({ GradientShader2Material });

var clock = new THREE.Clock();

export function Shape(props) {
  const ref = useRef();
  //TODO: replace this with the actual texture that gets passed in from app
  const texture = useTexture(require('./../assets/images/Dali.jpeg'));
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <planeBufferGeometry args={[1.2, 1.2, 8, 8]} />
        <gradientShader2Material uTime={clock.getElapsedTime()} uColor={"green"} uTexture={texture} uFreqData={props.freq} ref={ref} />
      </mesh>
    </group>

  )
}