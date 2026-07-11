import ProductCard from "./ProductCard";
import { products } from "../data/products";

function ProductGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      <div className="mb-10 text-center">

        <p className="text-sm font-bold uppercase tracking-widest text-yellow-500">
          Catálogo
        </p>

        <h2 className="mt-2 text-4xl font-extrabold text-gray-800">
          Productos destacados
        </h2>

        <p className="mt-3 text-gray-500">
          Encuentra útiles escolares, artículos de oficina y mucho más.
        </p>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>

    </section>
  );
}

export default ProductGrid;