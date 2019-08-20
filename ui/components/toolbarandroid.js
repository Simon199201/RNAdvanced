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
    ToolbarAndroid,
} from 'react-native';

export class ToolBarScreen extends React.Component {

    render() {
        return (
            <ToolbarAndroid
                navIcon={require('../../img/ic_launcher1.png')}
                title={'simon'}
                titleColor={'red'}
                subtitle={'sub_simon'}
                subtitleColor={'yellow'}
                onActionSelected={(position) => {
                    console.log('position is ' + position);
                }}
                actions={[{title: 'Settings', icon: require('../../img/ic_launcher1.png'), show: 'never'}, {
                    title: 'back',
                    icon: require('../../img/ic_launcher1.png'),
                    show: 'never',
                }]}
                style={{backgroundColor: '#e9eaed', height: 60}}
            />
        );
    }
}

