import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as ReactRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ReactRouter>
    <Auth0Provider
      domain="dev-3lvkdqbc3j1pnkha.us.auth0.com"
      clientId="VvBddBP2dCKLe9wx8b4gHRGOzJZYabUT"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </ReactRouter>
);
