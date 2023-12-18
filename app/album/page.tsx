import ProductCard from "@/app/@products/page";
import products from '@/services/products.json';

export default function AllProducts() {
  return(
    <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-12 pt-16 mb-8 md:mb-16 lg:mb-32">
      {
        products.slice(0, 5).map((product, i) => {
          return (
            <ProductCard
              key={i}
              title={product.title}
              price={product.price}
              image={product.image}
              productId={product.id}
              type={product.type}
            />
          )
        })
      }
    </div>
  )
}