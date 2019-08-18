/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    View,
    Image
} from 'react-native';

export class ImageScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'column'}}>
                <Image
                    source={require('./img/baihui.jpg')}/>
                <Image style={{width:50,height:50}} source={{uri:'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
            </View>
        );
    }
}

