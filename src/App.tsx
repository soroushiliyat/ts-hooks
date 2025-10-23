
import UseStateComponents from "./UseStateComponents";
import UseEffectComponents from "./UseEffectComponents";
import UseContextComponents from "./UseContextComponents";
import UseReducerComponents from './UseReducerComponents'
import UseRefComponents from './UseRefComponents'
import CustomHookComponents from './CustomHookComponents'



function App() {

    const [name, setName] = CustomHookComponents<string>('username', '');



  return (
    <div className="App">
      <h1>Custom Hook</h1>
       <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='enter your name...'
      />
      <p>hello {name}!</p>
    </div>
      <h1>useRef</h1>
      <UseRefComponents />
      <h1>useReducer</h1>
      <UseReducerComponents />
      <h1>useContext</h1>
      <UseContextComponents />
      <h1>useEffect</h1>
      <UseEffectComponents />
      <h1>useState</h1>
      <UseStateComponents />
    </div>
  );
}

export default App;
