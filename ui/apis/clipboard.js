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
    Alert,
    Clipboard
} from 'react-native';

function showAlert() {
    Alert.alert('Alert Title', 'My Alert Msg', [{
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
    },
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')}], {cancelable: false});
}

export class ClipboardScreen extends React.Component {
    async getClipboard() {
        var content = await Clipboard.getString();
        console.log('content is ' + content)
    };

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Button
                    onPress={this._copy}
                    title="put Clipboard"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"//残障人士用来读屏的
                    touchSoundDisabled={false}
                />
                <Button
                    onPress={this.getClipboard}
                    title="get Clipboard"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"//残障人士用来读屏的
                    touchSoundDisabled={false}
                />
            </View>
        );
    }

    _copy = function () {
        Clipboard.setString("content is 1234")
    }
}

