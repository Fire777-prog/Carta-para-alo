import { ShoppingCart } from "lucide-react";

type Product = {
  name: string;
  price: number;
  image: string;
};

function ProductCard({ name, price, image }: Product) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">

        <h3 className="text-xl font-bold text-gray-800">
          {name}
        </h3>

        <p className="mt-2 text-2xl font-extrabold text-blue-600">
          ${price}
        </p>

        <button
          className="
            mt-5 flex w-full items-center justify-center gap-2
            rounded-xl bg-yellow-400 py-3
            font-bold
            transition
            hover:bg-yellow-500
          "
        >
          <ShoppingCart size={20} />
          Agregar al carrito
        </button>

      </div>

    </div>
  );
}

export default ProductCard;