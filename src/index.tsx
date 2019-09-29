import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";

import App from "./App";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById("root"));
registerServiceWorker();
