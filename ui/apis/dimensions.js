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
    Dimensions,
} from 'react-native';

export class DimensionsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Button
                    onPress={this._getWindows}
                    title="Screen"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"//残障人士用来读屏的
                    touchSoundDisabled={false}
                />
            </View>
        );
    }

    _getWindows = function () {
        var {height, width} = Dimensions.get('window');
        console.log('width is ' + width + '\theight is ' + height);
    };
}

