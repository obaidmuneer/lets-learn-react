import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <h2>Product Detail</h2>
      <p>{product?.title}</p>
      <p>{product?.price}</p>
    </div>

  )
}

export default Product