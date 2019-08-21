/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Button,
    Linking,
    View,
    PermissionsAndroid
} from 'react-native';

export class PermissionsAndroidScreen extends React.Component {
    componentDidMount(): void {
        Linking.addEventListener('url', this._handleOpenURL);

    }

    componentWillUnmount(): void {
        Linking.removeEventListener('url', this._handleOpenURL);

    }

    render() {
        return (
            <View>
                <Button title={'申请单一权限'} onPress={this._requestSinglePermission}/>
                <Button title={'申请多个权限'} onPress={this._requestMultiplePermission}/>
            </View>
        );

    }
    async _requestSinglePermission() {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, {
                title: '申请摄像头权限',
                message: '一个很牛逼的应用想借用你的摄像头，' +
                    '然后你就可以拍出酷炫的皂片啦。',
                buttonNegative: '等会儿再问我',
                buttonNeutral: '不行',
                buttonPositive: '好吧',
            });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('现在你获得摄像头权限了');
            } else {
                console.log('用户并不屌你');
            }
        }catch (e) {
            console.log(e);
        }
    }

    async _requestMultiplePermission() {
        try {
            const granteds = await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.CAMERA], {
                title: '申请多个权限',
                message: '一个很牛逼的应用想借用你的摄像头，' +
                    '然后你就可以拍出酷炫的皂片啦。',
                buttonNegative: '等会儿再问我',
                buttonNeutral: '不行',
                buttonPositive: '好吧',
            });
            if (granteds[PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE] === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('现在你获得读取存储权限了');
            } else {
                console.log('用户并不屌你');
            }
            if (granteds[PermissionsAndroid.PERMISSIONS.CAMERA] === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('现在你获得摄像头权限了');
            } else {
                console.log('用户并不屌你');
            }
        }catch (e) {
            console.log(e);
        }

    }
}

