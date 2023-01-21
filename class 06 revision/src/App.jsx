import { useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom'

import Counter from './components/counter'
import Lit from './components/lit';
import Products from './components/products';
import Home from './components/home';
import Product from './components/product';
import SignUp from './components/signup';
import Login from './components/login';

import { GlobalContext } from './context/context';

let baseUrl = 'https://dummyjson.com/products'

function App(props) {
    const { state, dispatch } = useContext(GlobalContext)
    // console.log(state);

    return <div>

        <nav>
            <Link to='/'> Home </Link>
            <Link to='products'> Product </Link>
            <Link to='signup'> Sign Up </Link>
            <Link to='login'> Login </Link>
            {/* <Link to='home'> Home Nested Comp </Link> */}
        </nav>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Products api='https://dummyjson.com/products' />} />
            {/* <Route path='/product/:id' element={<Product />} /> */}
            <Route path='/products/:id' element={<Product />} />
            {/* <Route path='/home' element={<Home />} >
                <Route path='counter' index element={<Counter />} />
                <Route path='products' element={<Products />} />
                <Route path='products/:id' element={<Product />} />
            </Route> */}
        </Routes>


    </div>
}

export default App;