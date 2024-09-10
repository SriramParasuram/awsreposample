import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

var compActivity = ReactDOM.render(<App />, document.getElementById('root'));

window.uploadStatus = function uploadStatus(content,uploadID) {
  compActivity.uploadStatus(content,uploadID);
}
