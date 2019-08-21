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
    PanResponder,
} from 'react-native';

export class PanResponderScreen extends React.Component {
    componentWillMount(): void {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => {
                return true;
            },
            onMoveShouldSetPanResponder:  (evt, gestureState) => {
                return true;
            },
            onPanResponderGrant: (evt, gestureState) => {
                // this._highlight();
                console.log('onPanResponderGrant')
            },
            onPanResponderMove: (evt, gestureState) => {
            },
            onPanResponderRelease: (evt, gestureState) => {
                console.log('onPanResponderRelease')
            },
            onPanResponderTerminate: (evt, gestureState) => {
            },
        });
    }

    render() {
        return (
                <View
                      {...this._panResponder.panHandlers} style={{flex:1,width:'100%',height:'100%',backgroundColor:'red'}}
                />
        );
    }

}

