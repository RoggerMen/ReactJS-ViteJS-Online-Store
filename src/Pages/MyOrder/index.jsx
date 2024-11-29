import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.order?.slice(-1)[0])

  // El window.location.pathname Nos da la ruta que definamos, el pathname 
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1)
  if ( index === 'last') index = context.order?.length - 1

  // CON EL .slice hacemos que nos de la ultima parte de ese array
  // Porque queremos que nos muestre esa última compra que nosotros hicimos y que no nos muestre más
  // TODO ESTO {context.order?.slice(-1) NOS DEVUELVE UN ARRAY
  // 
  return (
    <>
      <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
          <Link to='/my-orders' className="absolute left-0">
            <ChevronLeftIcon className="size-6 text-blue-950 cursor-pointer" />
          </Link> 
        <h1>My Order</h1>
        </div>
        <div className="py-4 overflow-y-auto flex-1">
          {context.order?.[index]?.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default MyOrder;
