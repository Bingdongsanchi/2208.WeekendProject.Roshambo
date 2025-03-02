import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from "./store";
import { Provider } from "react-redux";


const root = ReactDOM.createRoot(
  document.getElementById('app')
);

root.render(
<Provider store={store}>
<Router>
<App />
</Router>
</Provider>
);