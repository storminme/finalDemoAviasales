import 'core-js/stable';
// import 'regenerator-runtime/runtime';
import 'whatwg-fetch';  // Полифилл для fetch
import 'es6-promise/auto';
// import 'classlist-polyfill'; // Полифилл для classList
// import 'promise-polyfill/src/polyfill'; // Полифилл для Promise
// import 'url-polyfill';  // Полифилл для URL API
// import 'array-flat-polyfill';  // Полифилл для массива flat
// import 'intersection-observer';  // Полифилл для IntersectionObserver
// import 'resize-observer-polyfill';  // Полифилл для ResizeObserver
// import 'object-assign';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';

ReactDOM.render(<App />, document.getElementById('root'));
