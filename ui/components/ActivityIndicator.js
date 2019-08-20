/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  ActivityIndicator
  } from 'react-native';

 export class ActivityIndicatorScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,flexDirection:'column'}}>
            <ActivityIndicator size={"large"} color="#0000ff"/>
            <ActivityIndicator size={"small"} color="#0000ff"/>
        </View>
    );
  }
}

