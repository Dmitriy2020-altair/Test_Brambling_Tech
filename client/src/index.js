import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import './index.css';
import { store } from './redux/store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/:name?/:age?/:direction?/:view?/:id?">
            <App />
          </Route>
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));