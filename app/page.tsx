import Link from 'next/link';
import ProductCard from '@/app/@products/page';
import products from '@/services/products.json';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-hero">
        <h1 className="text-8xl font-bold text-center tracking-tight px-64 z-20">Le merch préféré de ton artiste indé préféré.</h1>
      </div>
      <div className="flex flex-col gap-16 mb-32 items-center">
        <h2 className="text-6xl font-bold text-center tracking-tight">Nos derniers bangers</h2>
        <div className="grid grid-cols-3 items-start gap-4">
          {
            products.slice(0, 3).map((product, i) => {
              return (
                <ProductCard
                  className={`${i === 1 ? "scale-105" : "scale-90"}`}
                  key={i}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  productId={product.id}
                />
              )
            })
          }
        </div>
        <Link href="/products">
          <button className="px-4 py-2 w-[300px] bg-black/50 backdrop-blur rounded-lg border border-white/20 duration-300 hover:bg-white/20">Voir tous les produits</button>
        </Link>
      </div>
      <div className="flex flex-col gap-16 mb-32 items-center">
        <h2 className="text-6xl font-bold text-center tracking-tight">Notre histoire</h2>
        <p className="max-w-[60%] text-center">Bienvenue dans l&apos;univers de l&apos;AD Store, là où l&apos;art et le shopping se rencontrent pour créer une expérience unique. Notre histoire commence à Bordeaux, une ville vibrante, où nous avons donné vie à l&apos;idée de rendre l&apos;art plus accessible à tous. Inspirés par la diversité artistique de Paris, nous avons élargi notre horizon, collaborant avec des talents passionnés pour enrichir notre collection. Aujourd&apos;hui, l&apos;AD Store ne se contente pas d&apos;être une simple plateforme e-commerce, mais plutôt un voyage artistique qui s&apos;étend au-delà des frontières.</p>
        <Link href="/about">
          <button className="px-4 py-2 w-[300px] bg-black/50 backdrop-blur rounded-lg border border-white/20 duration-300 hover:bg-white/20">En apprendre plus</button>
        </Link>
      </div>
    </>
  )
}
