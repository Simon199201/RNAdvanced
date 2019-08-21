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
    Button,
    ScrollView,
    StyleSheet,
} from 'react-native';

export class APIScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <Text style={{textAlign:'center'}} >APIS</Text>
                <Button title={'alert'} onPress={() => {
                    this.props.navigation.navigate('Alert')
                }}/>
                <Button title={'Animated'} onPress={() => {
                    this.props.navigation.navigate('Animated')
                }}/>
                <Button style={styles._button} title={'AppState'} onPress={()=>{
                    this.props.navigation.navigate("AppState")
                }}/>
                <Button style={styles._button} title={'AsyncStorage'} onPress={()=>{
                    this.props.navigation.navigate("AsyncStorage")
                }}/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    _button :{flex: 1,backgroundColor:'blue'},
});

