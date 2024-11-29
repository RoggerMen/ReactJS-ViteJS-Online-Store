import { useContext } from "react";
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";


const MyOrders = () => {
  const context = useContext(ShoppingCartContext);
  console.log(context.order)
  return (
    <>
      <Layout>
        <div className="flex items-center justify-center relative w-80">
          
        <h1>My Orders</h1>
        </div>
        {
        context.order.map((order, index) =>(
          // verificar App index.jsx 
        <Link key={index} to={`/my-orders/${index}`}>
        <OrdersCard  totalPrice={order.totalPrice} totalProducts={order.totalProducts} />
        </Link>
        ))
        }
      </Layout>
      
    </>
  )
}

export default MyOrders
