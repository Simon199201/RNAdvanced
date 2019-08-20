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
    TouchableOpacity,
} from 'react-native';

export class TouchableOpacityScreen extends React.Component {
    render() {
        return (
            <TouchableOpacity style={{width:50,height:50,flexDirection:'row'}} onPress={() => {
                console.log('TouchableOpacity !!!');
            } }
                              underlayColor={'blue'}
                              activeOpacity={0.5}>
                <Image source={require('../../img/baihui.jpg')} style={{width:'100%',height:'100%',backgroundColor:'yellow'}}/>
            </TouchableOpacity>
        );
    }
}

