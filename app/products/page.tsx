import ProductCard from "../@products/page";
import products from '../../services/products.json';

export default function AllProducts() {

  return(
    <div className="grid grid-cols-3 gap-12 pt-16">
      {
        products.map((product, i) => {
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
  )
}