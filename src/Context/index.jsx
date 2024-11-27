/* eslint-disable react/prop-types */
import { createContext } from 'react'

const ShoppingCartContext = createContext();
const ShoppingCartContextProvider = ({children}) => {
  return (
    <ShoppingCartContext.Provider>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider