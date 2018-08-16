import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Components/MainComponent';
import { Provider } from 'react-redux';  //Provider is a component that have only one purpose to provide a store to its child component
import { ConfigureStore } from './redux/ConfigureStore';
import { BrowserRouter } from 'react-router-dom';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
              <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
