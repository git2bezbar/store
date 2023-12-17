'use client';

import { useState } from 'react';
import ProductCard from '@/app/@products/page';
import products from '@/services/products.json';


export interface SingleProductProps {
  params: {
    id: number;
  }
}

export default function SingleProduct({params}:SingleProductProps) {
  
  const product = products.slice(--params.id, ++params.id)[0];
  const [activeImage, setActiveImage] = useState(product?.images?.[0] || product.image);

  const handleClick = (e:React.MouseEvent<HTMLElement>) => {
    const newActiveImage = e.currentTarget.src.split("/").slice(4).join("/");
    setActiveImage(newActiveImage);
  }
  
  return(
    <div className=" m-4 md:p-8 lg:m-16 flex flex-col gap-16 items-center">
      <div className="p-4 md:p-8 lg:p-16 flex flex-col gap-8 lg:grid lg:grid-cols-[2fr_1fr] max-w-screen-xl rounded-lg border border-white/20">
        <div className="flex flex-col gap-4 items-center">
          <img src={activeImage} width={750}/>
          {
            product.images && (
              <div className="flex gap-4">
                {
                  product.images.map((image, i) => {
                    return(
                      <img
                      onClick={handleClick}
                        className={`p-2 rounded-lg ${ ("/products/" + activeImage === image) || (activeImage === image) ? "border border-white/20" : ""}`}
                        key={i}
                        src={image}
                        width={100}
                      />
                    )
                  })
                }
              </div>
            )
          }

        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 items-start">
            <p className="uppercase">produit collector</p>
            <p className="text-3xl font-bold">{product.title}</p>
            <p className="px-4 py-2 rounded-lg border border-white/20">{product.price} €</p>
          </div>
          <div className="flex flex-col">
            <button className="px-4 py-2 text-red rounded-lg border border-red duration-300 hover:text-black hover:bg-red">Épuisé</button>
            <p className="text-xs text-red p-2 italic">Il semblerait que ce produit soit vicitime de son succès. Pas étonnant après tout.</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Description</p>
            <p>Nos produits n&apos;ont pas besoin d&apos;une description détaillée. Notre processus de fabrication garantit leur qualité. Chaque pièce est fabriquée à la main avec soin par notre équipe. Nos bangers sont des bijoux de manufacture, de patience et de consécration.</p>
            <p>Mes gâté(e)s savent. 🤙🏻</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-16">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center tracking-tight">Produits associés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {
            products.slice(0, 3).map((product, i) => {
              return (
                <ProductCard
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
      </div>
    </div>

  )
}