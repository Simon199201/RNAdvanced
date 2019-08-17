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
  Button
  } from 'react-native';

 export class WidgetScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>组件</Text>
          <Button title={'ActivityIndicator'} onPress={()=>{
              this.props.navigation.navigate("ActivityIndicator")
          }}/>
        </View>
    );
  }
}

