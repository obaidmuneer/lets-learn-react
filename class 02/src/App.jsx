import Counter from './components/counter'
import Lit from './components/lit';
import Products from './components/products';

function App(props) {

    return <div>
        {/* Hello {props.name} {props.fathername} */}
        {/* <Lit /> */}
        {/* {<Counter heading="Counter App" name={props.name} />} */}
        <Products />
    </div>
}

export default App;