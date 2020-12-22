import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AnimalProvider } from "./context";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  '../node_modules/@fortawesome/fontawesome-free/js/all';
ReactDOM.render(

   <AnimalProvider>
   <App />
   </AnimalProvider>,
  document.getElementById('root')
);
