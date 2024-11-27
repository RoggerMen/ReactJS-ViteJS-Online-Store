import { useContext } from "react";
import "./style.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  //console.log('PRODUCT TO SHOW: ' , context.productToShow);
  //const processedImageUrl =
  //context.productToShow?.images &&
  //context.productToShow.images[0]?.replace(/^\[|"|\]$/g, "");
  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col overflow-y-auto fixed right-0 border border-black rounded-lg bg-white p-6 `}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">Detail</h2>
        <XMarkIcon
          className="size-6 text-blue-950 cursor-pointer"
          onClick={() => {
            context.closeProductDetail();
          }}
        ></XMarkIcon>
      </div>
      <figure className="px-6">
        <img className="w-full h-full object-cover rounded-lg" 
        src={context.productToShow.image} 
        alt={context.productToShow.title} />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-semibold text-2xl mb-2">${context.productToShow.price}</span>
        <span className="font-medium text-md">{context.productToShow.title}</span>
        <span className="font-light text-xl">{context.productToShow.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
