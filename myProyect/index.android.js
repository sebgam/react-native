/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';


//components

const Login = require('./src/components/loginView');
const Dashboard = require('./src/components/dashboardView');



export default class myProyect extends Component {
  render() {
    return (

       <Login />
        
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('myProyect', () => myProyect);
