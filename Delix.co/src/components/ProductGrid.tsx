import ProductCard from "./ProductCard";
import { products } from "../data/products";
import { useStore } from "../context/StoreContext";


function ProductGrid() {

  const { search } = useStore();


  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


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


        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            id={product.id}
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