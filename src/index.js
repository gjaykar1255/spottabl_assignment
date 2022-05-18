import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App'
import RootReducer from './services/Reducers/RootReducer';
const store = createStore(RootReducer);//called the rute reducer
const Index = () => {
  return <>
    <App />
  </>
}
const send = ReactDOM.createRoot(document.getElementById('root'));
send.render(<Provider store={store}><Index /></Provider>);