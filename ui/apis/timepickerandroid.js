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
    TimePickerAndroid
} from 'react-native';

export class TimePickerAndroidScreen extends React.Component {
    componentDidMount(): void {
        Linking.addEventListener('url', this._handleOpenURL);

    }

    componentWillUnmount(): void {
        Linking.removeEventListener('url', this._handleOpenURL);

    }

    render() {
        return (
            <View>
                <Button title={'显示时间选择器'} onPress={this._showTimePickerAndroid}/>
            </View>
        );

    }
    async _showTimePickerAndroid() {
        try {
            const {action, hour, minute} = await TimePickerAndroid.open({
                hour: 14,
                minute: 0,
                is24Hour: false, // Will display '2 PM'
            });
            if (action !== TimePickerAndroid.dismissedAction) {
                // Selected hour (0-23), minute (0-59)
            }
        } catch ({code, message}) {
            console.warn('Cannot open time picker', message);
        }
    }
}

