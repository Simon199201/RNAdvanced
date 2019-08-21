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
    InteractionManager,
} from 'react-native';

export class InteractionManagerScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Button
                    onPress={this._afterInteraction}
                    title="Screen"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"//残障人士用来读屏的
                    touchSoundDisabled={false}
                />
            </View>
        );
    }

    _afterInteraction = function () {
        InteractionManager.runAfterInteractions(() => {
            // ...耗时较长的同步执行的任务...
            setTimeout(() => {
                console.log('runAfterInteractions ');
            }, 5 * 1000);
        });
    };
}

