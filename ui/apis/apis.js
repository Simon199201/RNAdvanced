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
                <Button style={styles._button} title={'BackHandler'} onPress={()=>{
                    this.props.navigation.navigate("BackHandler")
                }}/>
                <Button style={styles._button} title={'CameraRoll'} onPress={()=>{
                    this.props.navigation.navigate("CameraRoll")
                }}/>
                <Button style={styles._button} title={'Clipboard'} onPress={()=>{
                    this.props.navigation.navigate("Clipboard")
                }}/>
                <Button style={styles._button} title={'DatePickerAndroid'} onPress={()=>{
                    this.props.navigation.navigate("DatePickerAndroid")
                }}/>
                <Button style={styles._button} title={'Dimensions'} onPress={()=>{
                    this.props.navigation.navigate("Dimensions")
                }}/>
                <Button style={styles._button} title={'InteractionManager'} onPress={()=>{
                    this.props.navigation.navigate("InteractionManager")
                }}/>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    _button :{flex: 1,backgroundColor:'blue'},
});
