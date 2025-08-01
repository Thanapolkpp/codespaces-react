import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Hello from './Hello';
import Counter from './counter';
import reportWebVitals from './reportWebVitals';
import Shop from './shop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<Hello name="Thanapol" age={20} />}
    {<Hello name="John" age={30}/> */}
    {/*<BMI /> */}
    <Shop />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
