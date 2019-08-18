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
  StyleSheet,
  } from 'react-native';

 export class WidgetScreen extends React.Component {
  render() {
    return (
        <View style={{ flex: 1}}>
          <Text>组件</Text>
          <Button style={styles._button} title={'ActivityIndicator'} onPress={()=>{
              this.props.navigation.navigate("ActivityIndicator")
          }}/>
            <Button style={styles._button} title={'Button'} onPress={()=>{
                this.props.navigation.navigate("Button")
            }}/>
            <Button style={styles._button} title={'DrawerLayout'} onPress={()=>{
                this.props.navigation.navigate("DrawerLayout")
            }}/>
            <Button style={styles._button} title={'FlatList'} onPress={()=>{
                this.props.navigation.navigate("FlatList")
            }}/>
            <Button style={styles._button} title={'Image'} onPress={()=>{
                this.props.navigation.navigate("Image1")
            }}/>
            <Button style={styles._button} title={'Keyboard'} onPress={()=>{
                this.props.navigation.navigate("Keyboard")
            }}/>
            <Button style={styles._button} title={'Modal'} onPress={()=>{
                this.props.navigation.navigate("Modal")
            }}/>
            <Button style={styles._button} title={'Picker'} onPress={()=>{
                this.props.navigation.navigate("Picker")
            }}/>
            <Button style={styles._button} title={'Progress'} onPress={()=>{
                this.props.navigation.navigate("Progress")
            }}/>
            <Button style={styles._button} title={'RefreshControl'} onPress={()=>{
                this.props.navigation.navigate("RefreshControl")
            }}/>
            <Button style={styles._button} title={'SafeAreaView'} onPress={()=>{
                this.props.navigation.navigate("SafeAreaView")
            }}/>
            <Button style={styles._button} title={'ScrollView'} onPress={()=>{
                this.props.navigation.navigate("ScrollView")
            }}/>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    _button :{flex: 1,backgroundColor:'blue'},
});

