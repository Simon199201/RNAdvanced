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
    Switch,
} from 'react-native';

export class SwitchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            isShow: false,
        });
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Switch onValueChange={(value) => {
                    console.log('onValueChange' + value);
                    this.setState({isShow: value});
                }} value={this.state.isShow} thumbColor={'blue'} trackColor={'red'} tintColor={'yellow'}
                />
            </View>
        );
    }
}

