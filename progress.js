/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Button,
  ProgressBarAndroid
  } from 'react-native';
export class ProgressScreen extends React.Component {

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,flexDirection:'column'}}>
            <ProgressBarAndroid/>
            <ProgressBarAndroid styleAttr="Horizontal" />
            <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
            <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
            />
        </View>
    );
  }
}

