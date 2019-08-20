/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    KeyboardAvoidingView,
    Text,
    View,
    TextInput
} from 'react-native';

export class KeyBoardScreen extends React.Component {
    constructor(props) {
        super(props);
        this.setState({text: "Useless Placeholder"})
    }

    render() {
        return (
            <KeyboardAvoidingView>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    value={((text) => {
                        this.setState({text})
                    })}
                />

            </KeyboardAvoidingView>
        );
    }
};

