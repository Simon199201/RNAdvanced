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
  ScrollView
  } from 'react-native';

 export class WidgetScreen extends React.Component {
  render() {
    return (
        <ScrollView style={{ flex: 1}}>
          <Text style={{textAlign:'center'}} >组件</Text>
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
            <Button style={styles._button} title={'KeyboardAvoid'} onPress={()=>{
                this.props.navigation.navigate("KeyboardAvoid")
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
            <Button style={styles._button} title={'SelectionList'} onPress={()=>{
                this.props.navigation.navigate("SelectionList")
            }}/>
            <Button style={styles._button} title={'Slider'} onPress={()=>{
                this.props.navigation.navigate("Slider")
            }}/>
            <Button style={styles._button} title={'StatusBar'} onPress={()=>{
                this.props.navigation.navigate("StatusBar")
            }}/>
            <Button style={styles._button} title={'Switch'} onPress={()=>{
                this.props.navigation.navigate("Switch")
            }}/>
            <Button style={styles._button} title={'Text'} onPress={()=>{
                this.props.navigation.navigate("Text")
            }}/>
            <Button style={styles._button} title={'TextInput'} onPress={()=>{
                this.props.navigation.navigate("TextInput")
            }}/>
            <Button style={styles._button} title={'ToolbarAndroid'} onPress={()=>{
                this.props.navigation.navigate("ToolbarAndroid")
            }}/>
            <Button style={styles._button} title={'TouchableHighlight'} onPress={()=>{
                this.props.navigation.navigate("TouchableHighlight")
            }}/>
            <Button style={styles._button} title={'TouchableNativeFeedback'} onPress={()=>{
                this.props.navigation.navigate("TouchableNativeFeedback")
            }}/>
            <Button style={styles._button} title={'TouchableOpacity'} onPress={()=>{
                this.props.navigation.navigate("TouchableOpacity")
            }}/>
            <Button style={styles._button} title={'ViewPagerAndroid'} onPress={()=>{
                this.props.navigation.navigate("ViewPagerAndroid")
            }}/>
            <Button style={styles._button} title={'WebView'} onPress={()=>{
                this.props.navigation.navigate("WebView")
            }}/>
        </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
    _button :{flex: 1,backgroundColor:'blue'},
});

