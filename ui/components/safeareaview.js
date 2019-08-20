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
    Text,
    SafeAreaView
} from 'react-native';

export class SafeAreaViewScreen extends React.Component {

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{flex: 1}}>
                    <Text>Hello World!</Text>
                </View>
            </SafeAreaView>
        );
    }
}

