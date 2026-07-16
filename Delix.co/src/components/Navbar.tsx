import { useState } from "react";
import SearchBar from "./Searchbar";
import { ShoppingCart } from "lucide-react";
import { useStore } from "../context/StoreContext";
import Cart from "./Cart";


function Navbar() {

  const { cart } = useStore();

  const [openCart, setOpenCart] = useState(false);



  const cartItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );



  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">


      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">



        <h1 className="text-4xl font-black tracking-tight">

          DELIX
          <span className="text-yellow-500">.</span>
          <span className="text-blue-600">CO</span>

        </h1>




        <SearchBar />





        <button
          onClick={() => setOpenCart(true)}
          className="
            flex items-center gap-2
            rounded-xl
            bg-yellow-400
            px-5
            py-3
            font-bold
            transition
            hover:bg-yellow-500
          "
        >

          <ShoppingCart size={20}/>


          <span>
            {cartItems}
          </span>


        </button>




      </div>




      {openCart && (

        <Cart
          closeCart={() => setOpenCart(false)}
        />

      )}




    </header>
  );
}


export default Navbar;