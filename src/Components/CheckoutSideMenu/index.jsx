import { useContext } from "react";
import "./style.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  //console.log('PRODUCT TO SHOW: ' , context.productToShow);
  //const processedImageUrl =
  //context.productToShow?.images &&
  //context.productToShow.images[0]?.replace(/^\[|"|\]$/g, "");
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? "flex" : "hidden"
      } checkout-side-menu flex flex-col overflow-y-auto fixed right-0 border border-black rounded-lg bg-white p-6 `}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="size-6 text-blue-950 cursor-pointer"
          onClick={() => {
            context.closeCheckoutSideMenu();
          }}
        ></XMarkIcon>
      </div>

    </aside>
  );
};

export default CheckoutSideMenu;


