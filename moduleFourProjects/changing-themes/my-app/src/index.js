import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import {ThemeContextProvider} from "./themeContext"


ReactDOM.render(
    <ThemeContextProvider>
    <App />
    </ThemeContextProvider>,
  document.getElementById('root')
);


