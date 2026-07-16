import { createContext, useContext, useState } from "react";


type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
};


type StoreContextType = {

  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  cart: Product[];

  addToCart: (product: Omit<Product, "quantity">) => void;

  removeFromCart: (id: number) => void;

  increaseQuantity: (id: number) => void;

  decreaseQuantity: (id: number) => void;

};



const StoreContext = createContext<StoreContextType | null>(null);



export function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {


  const [search, setSearch] = useState("");

  const [cart, setCart] = useState<Product[]>([]);



  function addToCart(product: Omit<Product, "quantity">) {


    setCart((prev) => {


      const existing = prev.find(
        (item) => item.id === product.id
      );



      if (existing) {


        return prev.map((item) =>

          item.id === product.id

            ? {
                ...item,
                quantity: item.quantity + 1,
              }

            : item

        );


      }



      return [

        ...prev,

        {
          ...product,
          quantity: 1,
        },

      ];


    });


  }





  function removeFromCart(id: number) {


    setCart((prev) =>

      prev.filter(
        (product) => product.id !== id
      )

    );


  }





  function increaseQuantity(id: number) {


    setCart((prev) =>

      prev.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity: item.quantity + 1,
            }

          : item

      )

    );


  }





  function decreaseQuantity(id: number) {


    setCart((prev) =>

      prev

        .map((item) =>

          item.id === id

            ? {
                ...item,
                quantity: item.quantity - 1,
              }

            : item

        )

        .filter(
          (item) => item.quantity > 0
        )

    );


  }





  return (

    <StoreContext.Provider

      value={{

        search,
        setSearch,

        cart,

        addToCart,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

      }}

    >

      {children}

    </StoreContext.Provider>

  );


}





export function useStore() {


  const context = useContext(StoreContext);



  if (!context) {

    throw new Error(
      "useStore debe usarse dentro de StoreProvider"
    );

  }



  return context;


}