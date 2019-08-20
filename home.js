/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  Colors,
  } from 'react-native/Libraries/NewAppScreen';
import {StackActions, NavigationActions} from 'react-navigation';

/**
 * 首页
 */
export class HomeScreen extends Component {
    render() {
        return (
            <Fragment>
                <StatusBar barStyle="dark-content"/>
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Header/>
                        {global.HermesInternal == null ? null : (
                            <View style={styles.engine}>
                                <Text style={styles.footer}>Engine: Hermes</Text>
                            </View>
                        )}
                        <Button title='组件' onPress={()=>{
                            this.props.navigation.navigate("Widget")
                        }}/>
                        <Button title='APIs' onPress={()=>{
                            this.props.navigation.navigate("APIS")
                        }}/>
                        <View style={styles.body}>
                            <Button title='跳转界面' onPress={() => {
                                //栈的导航
                                this.props.navigation.navigate("Details")
                            }}/>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
        );

    }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.yellow,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
