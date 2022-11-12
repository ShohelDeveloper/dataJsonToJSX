import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DynamicFrom from './DynamicForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <DynamicFrom /> 
  </React.StrictMode>
);


