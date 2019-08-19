/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    View,
    StatusBar,
} from 'react-native';
export class StatusBarScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <StatusBar hidden={false} barStyle={'dark-content'} translucent={false}
                />
            </View>
        );
    }
}

