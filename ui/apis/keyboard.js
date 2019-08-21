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
    Keyboard,
    TextInput,
} from 'react-native';

export class KeyboardScreen extends React.Component {
    componentDidMount(): void {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

    }

    componentWillUnmount(): void {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    render() {
        return (
            <TextInput style={{height: 60,borderColor: 'gray', borderWidth: 1}} onSubmitEditing={Keyboard.dismiss}/>
        );
    }


    _keyboardDidShow() {
        alert('Keyboard Shown');
    }

    _keyboardDidHide() {
        alert('Keyboard Hide');
    }
}

