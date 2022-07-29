import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index.js';


function App() {
  //variavel state.var e definida no reducers/index.js
  const counter = useSelector(state => state.counterReducer);
  const log = useSelector(state => state.isLogged);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <h1>log {log ? 'com login' : 'sem login'}</h1>
    </div>
  );
}

export default App;
