import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/warr_list';
import AddForm from './components/add_form';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {loadState, saveState} from './localStorage';
import throttle from 'lodash/throttle';


const persistentState = loadState();
const store = createStore(reducers, persistentState);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/add' component={AddForm} />
          <Route path='/' component={List} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
