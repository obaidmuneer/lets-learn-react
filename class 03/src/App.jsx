import Counter from './components/counter'
import Lit from './components/lit';
import Products from './components/products';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/home';
import Product from './components/product';

function App(props) {

    return <div>
        {/* Hello {props.name} {props.fathername} */}
        {/* <Lit /> */}
        {/* {<Counter heading="Counter App" name={props.name} />} */}

        <nav>
            <Link to='/'> Home </Link>
            <Link to='products'> Product </Link>
            <Link to='home'> Home Nested Comp </Link>
        </nav>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            {/* <Route path='/product/:id' element={<Product />} /> */}
            <Route path='/products/:id' element={<Product />} />
            <Route path='/home' element={<Home />} >
                <Route path='counter' index element={<Counter />} />
                <Route path='products' element={<Products />} />
                <Route path='products/:id' element={<Product />} />
            </Route>
        </Routes>


    </div>
}

export default App;