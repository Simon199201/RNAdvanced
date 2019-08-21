/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Button,
    Linking,
    View,
    ToastAndroid,
} from 'react-native';

export class ToastAndroidScreen extends React.Component {

    render() {
        return (
            <View>
                <Button title={'显示Toast'} onPress={this._showGravity}/>
            </View>
        );

    }

    _showGravity() {
        ToastAndroid.showWithGravity('你好', ToastAndroid.LONG, ToastAndroid.BOTTOM);
    }
}

