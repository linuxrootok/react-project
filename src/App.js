import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './common/header/index';
import Footer from './common/footer/index';
import store from './store';

import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Header /> 
          <BrowserRouter>
              <Routes>
                <Route path="/"  element={<Home />}></Route>
                <Route path="/detail"  element={<Detail />}></Route>
              </Routes>
          </BrowserRouter>
          <Footer /> 
      </Provider>
    );
  }
}

export default App;
