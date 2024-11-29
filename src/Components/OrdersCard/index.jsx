/* eslint-disable react/prop-types */

const OrdersCard = (props) => {
  
  const { totalPrice, totalProducts } = props;


  return (
    <div className="flex justify-between items-center mb-4 border border-black">
        <p>
            <span>01.02.25</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
    </div>
  )
}

export default OrdersCard