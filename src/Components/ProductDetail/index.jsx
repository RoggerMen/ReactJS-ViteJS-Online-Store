import './style.css'
import { XMarkIcon } from '@heroicons/react/24/solid'
const ProductDetail = () => {
  return (
    <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white p-6 ">
        <div className='flex justify-between items-center'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <XMarkIcon className="size-6 text-blue-950 cursor-pointer"></XMarkIcon>
        </div>
    </aside>
  )
}

export default ProductDetail