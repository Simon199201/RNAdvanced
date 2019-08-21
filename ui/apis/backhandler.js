/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    View,
    BackHandler
} from 'react-native';


export class BackHandlerScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress',this.handlerBackPress);
    }
    componentWillUnmount(): void {
        this.backHandler.remove();
    }

    render() {
        return (
            <View style={{flex: 1,  justifyContent:'center',flexDirection: 'column'}}>

            </View>
        );
    }

    handlerBackPress() {
        console.log('hardwareBackPress');
        return false;

    }
}

