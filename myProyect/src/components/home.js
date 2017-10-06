
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';



export default class home extends Component {
  render() {
    return (

      <Text>hola home</Text>
        
    );
  }
}

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('home', () => home);
