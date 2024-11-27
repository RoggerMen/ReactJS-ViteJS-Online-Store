/* eslint-disable react/prop-types */

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({item}) => {
  const imageUrl = item?.images[0]?.replace(/^\[|"|\]$/g, '');

  const context = useContext(ShoppingCartContext)

  return (

    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 my-2">
        <figure className='relative mb-1 w-full h-4/5 ' >
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{item?.category?.name}</span>
            <img className="w-full h-full object-cover rounded-lg"
            src={imageUrl} alt={item?.title} />
            <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" onClick={()=> context.setCount(context.count + 1)}>
                    +
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
