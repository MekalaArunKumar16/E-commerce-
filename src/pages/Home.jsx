import Banner from '../components/Banner'
import Products from '../components/Products'
import { useLoaderData } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Home = () => {
  const [products,setProducts] = useState([])
  const data = useLoaderData()
  useEffect(() =>{
    setProducts(data.data)
  },[data])
  return (
    <div>
        <Banner/>
        <Products Products={products}/>
    </div>

  )
}
export default Home

