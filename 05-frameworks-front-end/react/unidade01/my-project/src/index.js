import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

const root = document.getElementById('root');
/* const div = React.createElement('div', { className: 'container', children: ['Wellington Felix!', 'Cruzeiro'] }); */

const message = 'Hello World!';
const props = {
  className: 'main-title'
};

const MyComponent = () => <h1 { ...props }>{ message }</h1>

ReactDOM.render(<MyComponent/ >, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
