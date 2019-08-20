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
    TouchableHighlight,
} from 'react-native';

export class TouchableHighlightScreen extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={() => {
                console.log('TouchableHighlight !!!');
            }}
                                underlayColor={'blue'}>
                <Image source={require('../../img/baihui.jpg')} style={{width: 50, height: 50}}/>
            </TouchableHighlight>
        );
    }
}

