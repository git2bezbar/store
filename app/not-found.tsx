'use client';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Custom404() {

  const revealArtist = () => {
      let tl = gsap.timeline();

      tl.to(".gsapTitle", {
        opacity: 1,
        transform: "translateY(0%)",
      }).to(".gsapImage", {
        opacity: 1,
        transform: "translateY(0%)",
        delay: 1
      }).to(".gsapOverlay", {
        opacity: 0,
        delay: 0.3
      }).to(".gsapArtist", {
        opacity: 1,
        transform: "translateY(0%)",
      }).to(".gsapPlaylistText", {
        opacity: 1,
        transform: "translateY(0%)",
        delay: 1
      }).to(".gsapPlaylist", {
        opacity: 1,
        transform: "translateY(0%)",
        delay: 0.3
      });
  }

  return(
    <div className="flex flex-col justify-center items-center gap-4 p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-center tracking-tight">Custom 404 goes brrrrrr.</h1>
      <p className="text-center">Vous avez l&apos;air perdu, c&apos;est l&apos;occasion de tester la Classe S des features : MusicADvice®.</p>
      <p className="text-center">L&apos;équipe AD Store a entraîné une IA pour vous attribuer un artiste selon vos goûts et générer une playlist Spotify en fonction.</p>
      <button
        onClick={revealArtist}
        className="px-8 py-2 min-w-[280px] bg-black/50 backdrop-blur rounded-lg border border-white/20 duration-300 hover:bg-white/20"
      >
        Découvrir l&apos;artiste qui me correspond
      </button>
      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        <h2 className="gsapTitle text-lg md:text-xl lg:text-2xl font-bold text-center tracking-tight opacity-0 translate-y-full">L&apos;artiste qui te correspond est...</h2>
        <div className="gsapImage widthflex relative rounded-full overflow-hidden opacity-0 translate-y-8">
          <div className="gsapOverlay absolute top-0 bottom-0 left-0 right-0 bg-black"></div>
          <img
            src="/spotify-pp.jpg"
            alt="SCH"
            width={250}
          />
        </div>
        <h2 className="gsapArtist text-2xl font-bold text-center tracking-tight opacity-0 translate-y-full">SCH 🎉</h2>
        <p className="gsapPlaylistText text-center opacity-0 translate-y-full">Écoute dès maintenant ta playlist personnalisée ! ✨</p>
        <iframe className="gsapPlaylist rounded-lg md:w-[500px] lg:w-[800px] opacity-0 translate-y-1/4" src="https://open.spotify.com/embed/playlist/6U0EYXUHijn3ld3x6oHfHo?utm_source=generator&theme=0" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </div>
  )
}