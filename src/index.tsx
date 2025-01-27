import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-7gggirimwo7nq7y6.us.auth0.com"
    clientId="loEWMrMBv5DKLTJrczSOa2icJzJMa5cD"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    >
    <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
