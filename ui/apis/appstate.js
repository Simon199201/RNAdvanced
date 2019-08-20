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
    Text,
    AppState, StyleSheet,
} from 'react-native';


export class AppStateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {appState: AppState.currentState};
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Text>Current state is: {this.state.appState}</Text>
            </View>
        );
    }

    componentDidMount(): void {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }
    _handleAppStateChange = (nextAppState) => {
        console.log('nextAppState is ' + nextAppState)
        if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
            console.log('App has come to the foreground!')
        }
        this.setState({appState: nextAppState});
    }

}


