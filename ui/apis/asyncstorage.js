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
    AsyncStorage,
    AppState,
    StyleSheet
} from 'react-native';


export class AsyncStorageScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {appState: AppState.currentState};
    }

    render() {
        return (
            <View style={{flex: 1,  justifyContent:'center',flexDirection: 'column'}}>
                <Button style={styles.button} title={'存储数据'} onPress={this._storeData}/>
                <Button style={styles.button} title={'获取数据'} onPress={this._retrieveData}/>
                <Button style={styles.button} title={'删除数据'} onPress={this._clear}/>
            </View>
        );
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it .')
        } catch (e) {
            console.log(e);
        }
    };
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            if (value != null) {
                console.log('value is ' + value)
            }
        } catch (error) {

        }
    };
    _clear = async () => {
        try {
            await AsyncStorage.clear();
            console.log('clear success');
        } catch (error) {

        }
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor:'blue'
    }
});

