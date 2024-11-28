import { useContext } from "react";
import "./style.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";

// EL COMPONENTE CheckoutSideMenu LO MANDAMOS PARA EL PRINCIPAL PORQUE ESTE VA A NAVEGAR EN TODAS LAS PAGINAS(RUTAS)
const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  //console.log("CART: " ,context.cartProducts)
  
  //console.log('PRODUCT TO SHOW: ' , context.productToShow);
  //const processedImageUrl =
  //context.productToShow?.images &&
  //context.productToShow.images[0]?.replace(/^\[|"|\]$/g, "");

  // EL "id" como son únicos este es el único elemento que nos va a permitir saber quien es el elemento que presionemos 
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col overflow-y-scroll fixed right-0 border border-black rounded-lg bg-white p-6 `}
    >
      
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="size-6 text-blue-950 cursor-pointer"
          onClick={() => {
            context.closeCheckoutSideMenu();
          }}
        ></XMarkIcon>
      </div>
      
      <div className="py-4">

      {
        context.cartProducts.map((product) => (
          <OrderCard key={product.id} 
            id={product.id}
            title={product.title} 
            imageUrl={product.image}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))
      }

      </div>

    </aside>
  );
};

export default CheckoutSideMenu;


