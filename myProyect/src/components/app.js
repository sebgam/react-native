import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '/home';


export default const nativeShop = StackNavigator({
  Home: { screen: HomeScreen },
});

export default nativeShop;