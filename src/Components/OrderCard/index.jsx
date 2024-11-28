/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/solid";
const OrderCard = (props) => {
  
  const { id, title, imageUrl, price, handleDelete } = props;

  // SI "handleDelete" viene osea tiene los datos entra y renderiza el icono
  // Y SI NO PUES NO ENTRARIA EN EL "if" Y NO RENDERIZARIA NADA
  let renderXMarkIcon
  if(handleDelete){
    renderXMarkIcon = <XMarkIcon onClick={()=> handleDelete(id)} className="size-6 text-blue-950 cursor-pointer"/>
  }

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

      {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard