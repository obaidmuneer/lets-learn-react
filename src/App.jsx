import Counter from './components/counter'
import Lit from './components/lit';

function App(props) {

    return <div>
        {/* Hello {props.name} {props.fathername} */}
        <Lit />
        {<Counter heading="Counter App" name={props.name} />}
    </div>
}

export default App;