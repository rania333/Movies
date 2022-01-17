import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import myStore from '../src/store/store';


ReactDOM.render(
  <Router>
    <Provider store={myStore}>
      <App />
    </Provider>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
