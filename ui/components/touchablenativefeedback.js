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
    Image,
    TouchableNativeFeedback,
} from 'react-native';

export class TouchableNativeFeedbackScreen extends React.Component {
    render() {
        return (
            <TouchableNativeFeedback onPress={() => {
                console.log('TouchableNativeFeedback !!!');
            }}
                                     underlayColor={'blue'}
                                     background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{width: 150, height: 100, backgroundColor: 'red'}}>
                    <Text style={{margin: 30}}>Button</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

