/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { PlusIcon } from '@heroicons/react/24/solid'

const Card = ({item}) => {
  //const imageUrl = item?.images[0]?.replace(/^\[|"|\]$/g, '');

  const context = useContext(ShoppingCartContext);

  // RECIBIMOS EL AEGUMENTO DE EL "onclick" showProduct(item)
  const showProduct = (productDetail) => {
      context.openProductDetail();
      // AL ESTADO DEL useContext del Componente "Context" le colocamos los datos que se pasan por dicho argumento que vienen a ser objetos 
      // Segun lo que seleccionemos(para ver el detalle del producto) nos dara distintos datos pero en forma de objetos.
      // La cual este setProductToShow se ira actualizando al seleccionar o hacer click(onClick) con los DATOS de otra "Card"
      context.setProductToShow(productDetail);
  }

  const addProductsToCart = (e,productData) => {
    // ESTO SIRVE PARA QUE AL MOMENTO DE PRESIONAR EL BOTON LA CUAL TIENEN DOS FUNCIONES(DEL "div" onClick={()=>showProduct(item)} Y DEL "button" onClick={(e)=> addProductsToCart(e,item)}) QUE HACE QUE ABRA EL DETALLE DEL PRODUCTO DEL CARD Y OTRO EL SIDEMENU DEL AGREGADO DEL CARRITO Y SUME EL CONTADOR
    // ENTONCES lo que hace el EVENTO CON EL "stopPropagation()" que no se crucen ambos y que cada uno tenga su función y no predomine el que es el padre en este caso el "div" era el que tenia mas prioridad por ser el mayor(padre) 
    e.stopPropagation();

    context.setCount(context.count + 1)
    // Inicialmente tenemos un array vacio en el COMPONENTE "Context" pero que pasa si ya tenemos elementos ENTONCES si nosotros defrente agregamos y ya posiblemente podemos perder la información que ya tenemos
    // ENTONCES garantizamos de que se ALMACENEN y que siga viviendo lo que ya esta en el carrito
    // PERO que adicional le sume ese nuevo PRODUCTO que estamos AGREGANDO
    // LO HACEMOS Con el array[] y el ...(spread operator) lo cual vamos a llamar lo que ya existe en setCartProducts la cual es el cartProducts
    // DONDE LE DECIMOS que tome lo que ya existe y adicional le vamos a decir que le agregue lo nuevo
    // LO CUAL LO NUEVO ES el productData = item
    // ENTONCES LO QUE LE DECIMOS CON ESTE CODIGO ES que queremos que agregue esa información pero que aparte de eso nos deje lo que ya existe
    context.setCartProducts([...context.cartProducts, productData])

    context.openCheckoutSideMenu();
    console.log("CART: " ,context.cartProducts)
  }

  return (

    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 my-2"
    onClick={()=>showProduct(item)}>
        <figure className='relative mb-1 w-full h-4/5 ' >
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{item?.category}</span>
            <img className="w-full h-full object-cover rounded-lg"
            src={item?.image} alt={item?.title} />

            <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" onClick={(e)=> addProductsToCart(e,item)}>

                    <PlusIcon
                    className="size-6 text-black " />
            
            </button>
        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light px-2">{item?.title}</span>
            <span className="text-lg font-semibold px-2 py-1.5">${item.price}</span>
        </p>
    </div>
  )
}

export default Card
