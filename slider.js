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
    Slider,
} from 'react-native';

export class SliderScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Slider style={{width: 100, height: 50}}
                />
            </View>
        );
    }
}

