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
    Text,
    StyleSheet
} from 'react-native';

export class TextScreen extends React.Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <MyAppHeaderText/>
                <Text style={styles.titleText} ellipsizeMode={'middle'} numberOfLines={1} >
                    这个属性通常和下面的 numberOfLines 属性配合使用，表示当 Text 组件无法全部显示需要显示的字符串时如何用省略号进行修饰。
                    该属性有如下 4 种取值:
                    <Text style={{color: 'red'}}>
                        and blue
                    </Text>
                </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    baseText: {
        color: 'red'
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
    },
});

class MyAppHeaderText extends React.Component {
    render() {
        return (<Text style={{color: 'yellow', fontSize: 24,textAlign: 'center'}}>
            I'm Header!
        </Text>);
    }

}

