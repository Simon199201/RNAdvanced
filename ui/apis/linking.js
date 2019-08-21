/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Button,
    Linking,
    View
} from 'react-native';

export class LinkingScreen extends React.Component {
    componentDidMount(): void {
        Linking.addEventListener('url', this._handleOpenURL);

    }

    componentWillUnmount(): void {
        Linking.removeEventListener('url', this._handleOpenURL);

    }

    render() {
        return (
            <View>
                <Button title={'打开链接'} onPress={this.openURL}/>
                <Button title={'打开设置'} onPress={Linking.openSettings}/>
                <Button title={'打开应用'} onPress={this.openApp}/>
            </View>
        );

    }

    openURL() {
        Linking.openURL('http://www.baidu.com').catch(err => {
            'An error occurred', err;
        });
    }
    openApp(){
        Linking.sendIntent('android.intent.action.VIEW')
    }
    _handleOpenURL() {
        console.log('_handleOpenURL');
    }
}

