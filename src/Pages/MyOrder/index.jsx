import { useContext } from "react";
import Layout from "../../Components/Layout";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

const MyOrder = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.order?.slice(-1)[0])
  // CON EL .slice hacemos que nos de la ultima parte de ese array
  // Porque queremos que nos muestre esa última compra que nosotros hicimos y que no nos muestre más
  // TODO ESTO {context.order?.slice(-1) NOS DEVUELVE UN ARRAY
  // 
  return (
    <>
      <Layout>
        <h1>My Order</h1>
        <div className="py-4 overflow-y-auto flex-1">
          {context.order?.slice(-1)[0].products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
            />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default MyOrder;
