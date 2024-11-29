/* eslint-disable react/prop-types */
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const OrdersCard = (props) => {
  
  const { totalPrice, totalProducts } = props;


  return (
    <div className="flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80">
        <div className="flex justify-between w-full">
            <p className="flex flex-col">
                <span className="text-xl font-light">01.02.25</span>
                <span className="text-xl font-light">{totalProducts} articles</span>
            </p>
            <p className='flex items-center gap-2'>
            <span className="text-2xl font-bold">${totalPrice}</span>
            <ChevronRightIcon className="size-6 text-blue-950 cursor-pointer"/>
            </p>
        </div>
    </div>
  )
}

export default OrdersCard