'use client';

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function FirstNFT(props) {
  const { nodes, materials } = useGLTF('/products/nft/lowpoly.gltf');

  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.912, 0]}>
        <group position={[0, -0.067, 0]} rotation={[0, 0, -0.357]}>
          <group position={[0, 0.369, 0]} rotation={[0, 0, 0.72]}>
            <group position={[0, 0.364, 0]} rotation={[0, 0, -0.459]}>
              <group position={[0.032, 0.607, -0.409]} rotation={[3.062, 0.012, -0.894]}>
                <group position={[0, 0.741, 0]} rotation={[2.149, 1.329, 2.461]}>
                  <group position={[0, 0.755, 0]} rotation={[-0.761, 0.046, -0.457]}>
                    <mesh geometry={nodes['left-hand'].geometry} material={materials.PS1_BODY} position={[-1.377, -0.454, -2.463]} rotation={[2.336, 0.01, -0.009]} />
                  </group>
                  <mesh geometry={nodes['left-forearm'].geometry} material={materials.PS1_BODY} position={[-1.07, -0.422, -2.645]} rotation={[2.193, 0.022, -0.015]} />
                </group>
                <mesh geometry={nodes['left-arm'].geometry} material={materials.PS1_BODY} position={[-1.376, 1.695, -1.046]} rotation={[2.28, 0.047, -0.04]} />
              </group>
              <group position={[0.032, 0.607, 0.403]} rotation={[0.454, -0.6, -2.103]}>
                <group position={[0, 0.741, 0]} rotation={[0.611, 0.498, -2.167]}>
                  <group position={[0, 0.755, 0]} rotation={[-1.749, -0.361, -1.666]}>
                    <mesh geometry={nodes['right-hand'].geometry} material={materials['PS1_BODY.001']} position={[0.235, -2.504, 1.987]} rotation={[-2.336, 0.01, 3.112]} scale={-1} />
                  </group>
                  <mesh geometry={nodes['right-forearm'].geometry} material={materials.PS1_BODY} position={[-1.95, -0.236, 1.389]} rotation={[-2.193, 0.022, 3.066]} scale={-1} />
                </group>
                <mesh geometry={nodes['right-arm'].geometry} material={materials.PS1_BODY} position={[0.778, 1.769, 1.693]} rotation={[-2.28, 0.047, 2.993]} scale={-1} />
              </group>
            </group>
          </group>
        </group>
      </group>
      <mesh geometry={nodes.Head.geometry} material={materials.Head} position={[0.174, 1.899, 0]} />
      <mesh geometry={nodes.Torso.geometry} material={materials.PS1_BODY} position={[0, 0.16, 0]} />
    </group>
  )
}

useGLTF.preload('/products/nft/lowpoly.gltf')

