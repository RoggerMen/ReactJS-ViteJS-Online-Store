import { useContext } from "react";
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
const Home = () => {

  const context = useContext(ShoppingCartContext);

  return (
    <>
      <Layout>
          <div className="flex items-center justify-center relative w-80 mb-4">
          
            <h1 className="font-medium text-3xl">Exclusive Products</h1>
          </div>

        <input 
        type="text" 
        placeholder="Search a Product" 
        className="rounded-lg border border-blue-950 w-80 p-4 mb-4 focus:outline-none"
        onChange={(e) =>{
          context.setSearchByTitle(e.target.value);
        }}
        />

        <div className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl'>
        {
          context.items && context.items?.map((item) => (
            <Card key={item?.id} item={item} />
          ))
        }
        </div>
        <ProductDetail />
      </Layout>
      
    </>
  )
}

export default Home
