'use client';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {

  useGSAP(() => {
    const paragraphsArray = gsap.utils.toArray(".gsapParagraphs");

    paragraphsArray.forEach(paragraph => {
      gsap.timeline({
        scrollTrigger: {
          trigger: paragraph,
          start: "bottom bottom",
          end: "+=100",
        }
      }).from(paragraph, { opacity: 0, y: 100 })
      .to(paragraph, { opacity: 1, y: 0 });
    })

  });

  return(
    <div className="flex flex-col gap-16 items-center">
      <div className="min-h-screen flex justify-center items-center bg-hero">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center tracking-tight px-8 md:px-48 lg:px-64 z-20">Une histoire qui a inspiré le dernier Tarantino.</h1>
      </div>
      <div className="flex flex-col gap-32 mb-8 md:mb-16 lg:mb-32 px-8 md:max-w-[80%] lg:max-w-[60%] items-center text-lg md:text-xl lg:text-2xl">
        <p className="gsapParagraphs">Bienvenue chez AD Store, l&apos;histoire qui a débuté au cœur des Vosges, façonnée par notre amour du rap français et ancrée dans une petite ville où les ruelles résonnaient aux rythmes engagés. Partis de ces débuts modestes, nous avons tracé notre route jusqu&apos;à Bordeaux, où la richesse culturelle de la ville a fusionné avec notre passion pour l&apos;art.</p>
        <p className="gsapParagraphs">À Paris, la découverte d&apos;artistes talentueux a insufflé une nouvelle vie à notre boutique, créant un lieu où les cultures se croisent et s&apos;entremêlent. Chaque pièce de notre collection porte la trace de cette diversité, une expression artistique qui transcende les frontières. AD Store, c&apos;est plus qu&apos;une plateforme d&apos;e-commerce, c&apos;est un véritable melting-pot culturel où la musique, la créativité et le style se rencontrent.</p>
        <p className="gsapParagraphs">Aujourd&apos;hui, tandis que nous continuons à puiser inspiration et énergie dans ces racines culturelles, AD Store se prépare à s&apos;exporter à l&apos;international. Notre vision est de partager cette diversité artistique avec le monde entier, de créer des passerelles entre les expressions culturelles. Rejoignez-nous dans cette aventure où chaque achat devient un acte de célébration de la richesse culturelle qui nous anime.</p>
        <p className="gsapParagraphs">AD Store</p>
      </div>
    </div>
  )
}