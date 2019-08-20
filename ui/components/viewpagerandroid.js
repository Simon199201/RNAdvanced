/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    ViewPagerAndroid,
    Text,
    View,
} from 'react-native';
export class ViewPagerAndroidScreen extends React.Component {

    render() {
        return (
            <ViewPagerAndroid style={styles.viewPager}>
                <View style={styles.pageStyle} key={1}>
                    <Text style={{color: 'red'}}>First Page</Text>
                </View>
                <View style={styles.pageStyle} key={2}>
                    <Text style={{color: 'red'}}>Second Page</Text>
                </View>
            </ViewPagerAndroid>
        );
    }

}

const styles = {
    viewPager: {
        flex: 1,
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    },
};
