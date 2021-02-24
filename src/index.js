import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Api  from "./apis";



ReactDOM.render(
  <React.StrictMode>
     <App /> 
     {/* <Api /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
