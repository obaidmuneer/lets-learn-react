import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const Products = () => {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        try {
            const result = await axios.get('https://dummyjson.com/products')
            console.log(result.data.products)
            setProducts(result.data.products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProducts()
        // console.log(window. matchMedia('(prefers-color-scheme: dark)'));
    }, [])

    return <div>
        <h2>Product List</h2>
        {
            products.map((product, index) => {
                return <div key={index} style={{
                    width: '50%',
                    border: "1px solid gray",
                    marginBottom: 5
                }} >
                    {/* <h3>Product : <Link to={`/product/${product.id}`} >{product?.title}</Link></h3> */}
                    <h3>Product : <Link to={`${product.id}`} >{product?.title}</Link></h3>
                    <p>Desc : {product?.description}</p>
                    <p>Price :{product?.price}</p>
                </div>
            })
        }
    </div>
}
export default Products