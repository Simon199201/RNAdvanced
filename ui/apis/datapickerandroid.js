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
    DatePickerAndroid,
} from 'react-native';

export class DatePickerAndroidScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <Button
                    onPress={this.showDatePicker}
                    title="showDatePicker"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"//残障人士用来读屏的
                    touchSoundDisabled={false}
                />
            </View>
        );
    }

    showDatePicker = async function () {
        try {
            const {action, year, month, day} = await DatePickerAndroid.open({
                date: new Date(2020,9,12),
            });
            if (action != DatePickerAndroid.dismissedAction) {
                console.log('year is ' + year + '\tmonth is ' + month + '\tday is ' + day);
            }
        } catch ({code, message}) {
            console.log('Connot open data picker', message);
        }
    };

}

