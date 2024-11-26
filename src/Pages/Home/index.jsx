import { useState, useEffect } from "react"
import Card from "../../Components/Card"
import Layout from "../../Components/Layout"
const Home = () => {

  const [items,setItems] = useState(null);

  const fetchData = async () => {
    try {
      // fetch data from API
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    console.log(response);
    const data = await response.json();
    console.log(data);
    setItems(data);
    } catch (error) {
      console.log("Al buscar el API hubo este ERROR: " + error );
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Layout>
        <h1>Home</h1>
        <div className='grid place-items-center gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-screen-xl'>
        {
          items && items?.map((item) => (
            <Card key={item?.id} item={item} />
          ))
        }
        </div>
      </Layout>
      
    </>
  )
}

export default Home
