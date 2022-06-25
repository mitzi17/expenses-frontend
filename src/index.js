import React from 'react';
import ReactDOM from 'react-dom/client';
import  { createStore, applyMiddleware } from 'redux'
import thunk from 'react-thunk'
import { Provider } from 'react-redux'
'
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 //<React.StrictMode>
   <App />
 //</React.StrictMode>
);

