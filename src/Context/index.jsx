/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

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

  // Product Detail - Show product
  // hacemos que el productShow sea de objeto vacio
  const [productToShow,setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider