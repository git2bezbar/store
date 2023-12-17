'use client';

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import FirstNFT from './Lowpoly';
import Album from './Album';
import Game from './Game';

export interface NFTViewerProps {
  type: string
}

export default function NFTViewer({type}:NFTViewerProps) {
  return(
    <div className="w-[250px] sm:w-[350px] md:w-[500px] xl:w-[750px] h-[250px] sm:h-[350px] md:h-[500px] xl:h-[750px]">
      <Canvas
        camera={{ position: [5, 3, 3] }}
      >
        <Suspense fallback={null}>
          <OrbitControls/>
          <ambientLight/>
          { type === "nft" ? (<FirstNFT />) :
            type === "album" ? (<Album />) : 
            type === "game" && (<Game />)}
        </Suspense>
        <Environment preset="sunset"/>
      </Canvas>
    </div>
  )
}