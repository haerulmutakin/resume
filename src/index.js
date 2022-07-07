import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const App = React.lazy(() => import('./App'));

const loadingElement = () => {
  return (
    <div className="tunggu">
      <img alt="loading" src={process.env.PUBLIC_URL + '/img/loading.gif'} />
      <span>Loading...</span>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={loadingElement()}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
