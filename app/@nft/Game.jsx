'use client';

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 .\game.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Game(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/products/ps5/game/game.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube" position={[0, 0.022, 0]} rotation={[-0.32, 0.61, 0.097]} scale={[1.35, 1.7, 0.14]}>
          <mesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={materials.Back} />
          <mesh name="Cube_2" geometry={nodes.Cube_2.geometry} material={materials.Front} />
          <mesh name="Cube_3" geometry={nodes.Cube_3.geometry} material={materials.Black} />
          <mesh name="Cube_4" geometry={nodes.Cube_4.geometry} material={materials.Edge} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/products/ps5/game/game.gltf')
