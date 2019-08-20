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
    DrawerLayoutAndroid,
} from 'react-native';


var navigationView = (<View style={{flex: 1, backgroundColor: 'blue'}}>
    <Text style={{margin: 10, fontsize: 15, textAlign: 'center'}}>I'm in the Drawer!</Text>
</View>);
const drawerLayoutAndroid1 = <DrawerLayoutAndroid
    drawerWidth={300}
    drawerPosition={DrawerLayoutAndroid.positions.Left}
    renderNavigationView={() => navigationView}
    statusBarBackgroundColor={'blue'}>
    <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
        <Button onPress={()=>{}
            //todo 如何触发自身的方法
        } title="点击打开抽屉导航栏"/>
    </View>
</DrawerLayoutAndroid>;

export class DrawerLayout extends React.Component {
    render() {
        return (
            drawerLayoutAndroid1
        );
    }
}

