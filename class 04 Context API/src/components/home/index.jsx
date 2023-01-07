import { useContext } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { GlobalContext } from "../../context/context"

const Home = () => {
    const { state } = useContext(GlobalContext)
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home</h1>
            <Link to='counter' >Counter</Link>
            <Link to='products' >Product</Link>
            {/* <button onClick={() => { navigate('/products') }} >Click me</button> */}
            {
                state?.owner ? <h3>Welcome {state?.owner}</h3> : <h3>Please login/signup </h3>
            }

            {/* <Outlet /> */}
        </div>
    )
}

export default Home