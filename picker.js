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
    Picker
} from 'react-native';

let selectValue = "Java";

export class PickerScreen extends React.Component {
    // setValue(content) {
    //     this.setState({language1: content});
    // }

    constructor(props) {
        super(props);
        this.setState({language1: 'Java'});
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>

                <Picker
                    mode={'dropdown'}
                    selectedValue={selectValue}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) => {
                        console.log('itemValue is ' + itemValue);
                        selectValue = itemValue;
                        this.setState({language1: {itemValue}});
                    }}>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="JavaScript"/>
                </Picker>
            </View>
        );
    }
}

