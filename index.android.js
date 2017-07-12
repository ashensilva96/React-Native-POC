import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppReducer from './reducers';
import AppWithNavigationState from './navigators/AppNavigator';

export default class myFirstApp extends Component {
  store = createStore(AppReducer, applyMiddleware(thunk));

  render() {
    return (
      <Provider store={this.store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('myFirstApp', () => myFirstApp)


