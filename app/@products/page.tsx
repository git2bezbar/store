import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

export interface ProductCardProps extends ComponentPropsWithoutRef<"div"> {
  title: string,
  price: number,
  image: string,
  productId: number,
}

export default function ProductCard({
  className,
  title,
  price,
  image,
  productId
}:ProductCardProps) {
  return(
    <Link href={`/products/${productId}`}>
      <div className={`${className} group relative p-4 rounded-lg border border-white/20 duration-300 hover:border-red`}>
        <img
          className="duration-300 group-hover:scale-105"
          src={image}
          alt="JVLIVS I"
          width={500}
        />
        <div className="flex flex-col gap-4 items-start">
          <p className="text-xl">{title}</p>
          <p className="px-4 py-2 rounded-lg border border-white/20 duration-300 group-hover:border-white">{price} €</p>
          <button className="px-4 py-2 w-full text-red rounded-lg border border-red duration-300 hover:text-black hover:bg-red">Épuisé</button>
        </div>
      </div>
    </Link>
  )
}