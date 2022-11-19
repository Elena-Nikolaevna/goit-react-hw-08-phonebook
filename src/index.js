import {App} from 'components/App'; //+
import React from 'react'; //+
import ReactDOM from 'react-dom/client'; //+
import { Provider } from 'react-redux'; //+
//import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import {persistor} from './redux/store';
import {store} from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

//import { persistor, store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading...</h1>} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
