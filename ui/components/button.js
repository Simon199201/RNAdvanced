/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Button
  } from 'react-native';
function onPressLearnMore() {
  alert('click')
}
export class ButtonScreen extends React.Component {

  render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,flexDirection:'column'}}>
          <Button
              onPress={onPressLearnMore}
              title="Learn More"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"//残障人士用来读屏的
              touchSoundDisabled={false}
          />
        </View>
    );
  }
}

