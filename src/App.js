import React, { Component } from 'react';
import Home from './components/home/Home';
import { Provider } from 'react-redux';

import store from './redux/store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>

    );
  }
}

export default App;
