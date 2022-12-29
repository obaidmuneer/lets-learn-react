import Counter from './components/counter'

function App(props) {

    return <div>
        {/* Hello {props.name} {props.fathername} */}
        {<Counter heading="Counter App" name={props.name} />}
    </div>
}

export default App;