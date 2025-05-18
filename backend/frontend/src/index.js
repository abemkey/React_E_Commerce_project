import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router } from 'react-router-dom';
import { PayPalScriptProvider } from "@paypal/react-paypal-js"; // ✅ NEW
import './index.css';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <PayPalScriptProvider
        options={{
          "client-id": "Ad3uk8qfV-LI2dkGxPp-RoCOqKPyr8QKxWfSeW8LLHACzpIycDyT-xt7jNWW81Hbod7Pf5c3Ym-zhdvy",
          currency: "USD"
        }}
      >
        <App />
      </PayPalScriptProvider>
    </Router>
  </Provider>
);

reportWebVitals();



// "NAME": "hospital",
//         "USER": "postgres",
//         "PASSWORD": "1234",
//         "PORT": "5432",