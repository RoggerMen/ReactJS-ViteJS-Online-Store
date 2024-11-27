/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext();
const ShoppingCartContextProvider = ({children}) => {

    const [count,setCount] = useState(0);
    //console.log("Count: " + count)
  return (
    <ShoppingCartContext.Provider value={{
        count,
        setCount,
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider