/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext = createContext();
const ShoppingCartContextProvider = ({children}) => {

  // Shopping Cart - Increment quantity
  const [count,setCount] = useState(0);
  //console.log("Count: " + count)

  // Product Detail - Open/Close
  const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);

  const openProductDetail = () => {
    setIsProductDetailOpen(true);
  }
  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  }

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen] = useState(false);

    const openCheckoutSideMenu = () => {
      setIsCheckoutSideMenuOpen(true);
    }
    const closeCheckoutSideMenu = () => {
      setIsCheckoutSideMenuOpen(false);
    }

  // Product Detail - Show product
  // hacemos que el productShow sea de objeto vacio
  const [productToShow,setProductToShow] = useState({});

  // Shopping Cart - Add products to cart
  const [cartProducts,setCartProducts] = useState([]);
  // TAMBIEN PODEMOS HACERLO CON UN "useEffect" PARA VER EL "clg" SOLO CUANDO CAMBIE EL "cartProducts"
  //console.log("CART: " ,cartProducts)

  // Shopping Cart - Order
  const [order,setOrder] = useState([]);

  // GET PRODUCTS
  const [items,setItems] = useState(null);

  const fetchData = async () => {
    try {
      // fetch data from API
      // ANTERIOR API GET QUE USAMOS
      // https://api.escuelajs.co/api/v1/products
      // OTRA API GET MAS LIMPIA https://fakestoreapi.com/products
    const response = await fetch('https://fakestoreapi.com/products');
    console.log(response);
    const data = await response.json();
    console.log(data);
    setItems(data);
    } catch (error) {
      console.log("Al buscar el API hubo este ERROR: " + error );
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // GET PRODUCTS BY TITLE
  const [searchByTitle,setSearchByTitle] = useState(null);

  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider