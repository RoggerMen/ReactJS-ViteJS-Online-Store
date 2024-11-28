/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/solid";
const OrderCard = (props) => {
  
  const { title, imageUrl, price } = props;

  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold">${price}</p>
        <XMarkIcon className="size-6 text-blue-950 cursor-pointer"/>
      </div>

    </div>
  )
}

export default OrderCard