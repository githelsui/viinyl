import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// Persist Redux necessary dependencies
import { Provider } from 'react-redux';
import store, {Persistor} from './auth/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
