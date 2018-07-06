import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

console.log(App);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
