import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

const RootStack = StackNavigator(
  {
    login: {screen: Login},
    register: {screen:Register},
    home: {screen:Dashboard}
  },
  {
    initialRouteName: 'login',
  }
);

class App extends Component {
  render() {
    return (<RootStack />);
  }
}

export default App;
