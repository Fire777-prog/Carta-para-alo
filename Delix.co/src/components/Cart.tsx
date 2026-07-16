import { X } from "lucide-react";
import { useStore } from "../context/StoreContext";


type CartProps = {
  closeCart: () => void;
};


function Cart({ closeCart }: CartProps) {


  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useStore();



  const total = cart.reduce(
    (sum, product) =>
      sum + product.price * product.quantity,
    0
  );



  function handleWhatsApp() {

    let message =
      "Hola Delix.co, quiero realizar este pedido:%0A%0A";


    cart.forEach((product) => {

      message +=
        `📚 ${product.name} x${product.quantity} - $${product.price * product.quantity}%0A`;

    });



    message +=
      `%0A💰 Total: $${total}`;



    const phone = "525951065532";



    window.open(
      `https://wa.me/${phone}?text=${message}`,
      "_blank"
    );

  }



  return (

    <div className="
      fixed inset-0
      z-50
      bg-black/30
    ">


      <div className="
        absolute right-0 top-0
        h-full
        w-full
        max-w-md
        bg-white
        p-6
        shadow-2xl
      ">


        <div className="
          flex
          items-center
          justify-between
          mb-8
        ">


          <h2 className="text-3xl font-black">
            🛒 Carrito
          </h2>



          <button
            onClick={closeCart}
            className="
              rounded-full
              p-2
              hover:bg-gray-100
            "
          >

            <X size={25}/>

          </button>


        </div>




        {cart.length === 0 ? (

          <p className="text-center text-gray-500 mt-20">
            Tu carrito está vacío
          </p>


        ) : (


          <div className="space-y-5">


            {cart.map((product) => (


              <div
                key={product.id}
                className="
                  rounded-2xl
                  bg-gray-100
                  p-4
                "
              >


                <div className="flex gap-4">


                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-20
                      w-20
                      rounded-xl
                      object-cover
                    "
                  />



                  <div className="flex-1">


                    <div className="flex justify-between">


                      <h3 className="font-bold">
                        {product.name}
                      </h3>



                      <button
                        onClick={() =>
                          removeFromCart(product.id)
                        }
                        className="
                          text-red-500
                          font-bold
                        "
                      >
                        ✕
                      </button>


                    </div>



                    <p className="text-blue-600 font-bold">
                      ${product.price}
                    </p>



                    <div className="
                      mt-3
                      flex
                      items-center
                      justify-between
                    ">


                      <div className="
                        flex
                        items-center
                        gap-3
                      ">


                        <button
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                          className="
                            h-8
                            w-8
                            rounded-lg
                            bg-white
                            font-bold
                          "
                        >
                          -
                        </button>



                        <span className="font-bold">
                          {product.quantity}
                        </span>



                        <button
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                          className="
                            h-8
                            w-8
                            rounded-lg
                            bg-yellow-400
                            font-bold
                          "
                        >
                          +
                        </button>


                      </div>



                      <span className="font-black">
                        ${product.price * product.quantity}
                      </span>


                    </div>


                  </div>


                </div>


              </div>


            ))}





            <div className="
              border-t
              pt-5
              flex
              justify-between
              text-2xl
              font-black
            ">

              <span>
                Total:
              </span>


              <span className="text-blue-600">
                ${total}
              </span>


            </div>





            <button
              onClick={handleWhatsApp}
              className="
                w-full
                rounded-xl
                bg-green-500
                py-4
                font-bold
                text-white
                hover:bg-green-600
                transition
              "
            >

              Comprar ahora

            </button>




          </div>


        )}


      </div>


    </div>

  );
}


export default Cart;