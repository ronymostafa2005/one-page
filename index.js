import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import App from './App';  // Import your App component

// Wrap your App component inside BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
