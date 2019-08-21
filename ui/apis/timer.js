/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Button,
    View,
    ToastAndroid,
} from 'react-native';

export class TimerScreen extends React.Component {
    componentDidMount(): void {
        this.timer = setTimeout(() => {
            console.log('timeout!!!')
        }, 3000);
    }

    componentWillUnmount(): void {
        if (this.timer && clearTimeout(this.timer)) {
            console.log('timer is clear')
        }
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}

