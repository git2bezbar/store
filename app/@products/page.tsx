import { ComponentPropsWithoutRef } from "react";

export interface ProductCardProps extends ComponentPropsWithoutRef<"div"> {
}

export default function ProductCard({className}:ProductCardProps) {
  return(
    <div className={`${className} group relative p-4 rounded-lg border border-white/20 duration-300 hover:border-red`}>
      <img
        className="duration-300 group-hover:scale-105"
        src="/products/tee/album-1.png"
        alt="JVLIVS I"
        width={500}
      />
      <div className="flex flex-col gap-4">
        <p className="text-xl">T-shirt JVLIVS</p>
        <p>49 €</p>
        <button className="px-4 py-2 text-red rounded-lg border border-red duration-300 hover:text-black hover:bg-red">Épuisé</button>
      </div>
    </div>
  )
}