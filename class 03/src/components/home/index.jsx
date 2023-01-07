import { Link, Outlet, useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home</h1>
            <Link to='counter' >Counter</Link>
            <Link to='products' >Product</Link>
            <button onClick={() => { navigate('/products') }} >Click me</button>

            <Outlet />
        </div>
    )
}

export default Home