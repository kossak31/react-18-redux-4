import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';

//STORE -> GLOBALIZED STATE


//ACTION -> INCREMENT
//function returns a object "i am hungry"
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER -> HANDLE ACTION
//switch statement com o nome do ACTION E FAZ ALGO
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

//criar store
let store = createStore(counter);

//DISPLAY IN CONSOLE
store.subscribe(() =>  console.log(store.getState()));

//DISPATCH -> SEND ACTION TO REDUCER
//+1 ou -1 com o dispatch executa
store.dispatch(increment());

store.dispatch(decrement());
store.dispatch(decrement());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

