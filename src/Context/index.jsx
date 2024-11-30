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
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
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

  // CORRESPONDE A LOS ITEMS QUE SEAN FILTRADOS DEPENDIENDO DE LO QUE ESCRIBAMOS EN ESE INPUT DEL BUSCADOR
  const [filteredItems,setFilteredItems] = useState(null);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase())) 
  }

  // useEffect(() => {
  //   if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
  // }, [items, searchByTitle]);

  // SEARCH BY CATEGORIES
  const [searchByCategory,setSearchByCategory] = useState(null);

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())) 
  }

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE') {
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === 'BY_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if (!searchType) {
      return items
    }
  }

  // useEffect JUNTAMOS SEARCH CATEGORY Y TITLE
  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [items, searchByTitle, searchByCategory])
  
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
        setSearchByTitle,
        filteredItems,
        searchByCategory,
        setSearchByCategory,
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContextProvider