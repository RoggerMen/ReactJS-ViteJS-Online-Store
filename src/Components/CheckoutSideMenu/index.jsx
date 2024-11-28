import { useContext } from "react";
import "./style.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";

// EL COMPONENTE CheckoutSideMenu LO MANDAMOS PARA EL PRINCIPAL PORQUE ESTE VA A NAVEGAR EN TODAS LAS PAGINAS(RUTAS)
const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  //console.log("CART: " ,context.cartProducts)
  
  //console.log('PRODUCT TO SHOW: ' , context.productToShow);
  //const processedImageUrl =
  //context.productToShow?.images &&
  //context.productToShow.images[0]?.replace(/^\[|"|\]$/g, "");

  // FUNCION ELIMINAR UN PRODUCTO DEL CARRITO
  // EL "id" como son únicos este es el único elemento que nos va a permitir saber quien es el elemento que presionemos 
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  // FUNCION VERIFICAR EL PRODUCTO DEL CARRITO
  const handleCheckout= () => {
    const orderToAdd = {
      date: '01.02.25',
      producst: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }

  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white p-6 `}
    >
      
      <div className="flex justify-between items-center ">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="size-6 text-blue-950 cursor-pointer"
          onClick={() => {
            context.closeCheckoutSideMenu();
          }}
        ></XMarkIcon>
      </div>
      {/*Todos los productos que tenemos en la orden */}
      <div className="py-4 overflow-y-auto flex-1">

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

      {/*Tipo especie de footer */}
      <div className="px-2">
        <p className="flex justify-between items-center">
          <span className="text-xl font-semibold mt-3">Total:</span>
          <span className="text-xl font-bold">${totalPrice(context.cartProducts)}</span>
        </p>
        {/* Botón de checkout */}
        <button className="w-full mt-4 bg-blue-950 text-white font-medium py-2 rounded-md" onClick={()=> handleCheckout()}>Checkout</button>
      </div>

    </aside>
  );
};

export default CheckoutSideMenu;


