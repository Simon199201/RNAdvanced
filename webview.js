/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import {WebView} from 'react-native-webview'
export class WebViewScreen extends React.Component {
    render() {
        return (
            <WebView source={{uri: 'https://github.com/facebook/react-native'}} style={{marginTop: 20}}>
            </WebView>
        );
    }
}

