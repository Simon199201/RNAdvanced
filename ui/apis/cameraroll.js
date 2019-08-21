/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    View,
    BackHandler, Button, ScrollView, Image, CameraRoll, StyleSheet, PermissionsAndroid
} from 'react-native';

async function requestCameraPermission() {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: '申请读取内容权限',
                message:
                    '一个很牛逼的应用想借用您的存储信息，' +
                    '然后你就可以拍出酷炫的皂片啦。',
                buttonNeutral: '等会再问我',
                buttonNegative: '不行',
                buttonPositive: '好吧',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('现在你获得摄像头权限了');
        } else {
            console.log('用户并不屌你');
        }
    } catch (err) {
        console.warn(err);
    }
}

export class CameraRollScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: new Array(0)

        }
    }

    componentDidMount(): void {
        let promise = requestCameraPermission();
    }

    _handleButtonPress = () => {
        console.log('_handleButtonPress')
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                console.log('r is ' + r.edges.length)
                this.setState({photos: r.edges});
            })
            .catch((err) => {
                console.log('err is ' + err)
                //Error Loading Images
            });
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column'}}>
                <Button style={styles.button} title={'打开相册'} onPress={this._handleButtonPress}/>
                <ScrollView>
                    {this.state.photos.map((p, i) => {
                        return (
                            <Image
                                key={i}
                                style={{
                                    width: 300,
                                    height: 100,
                                }}
                                source={{uri: p.node.image.uri}}
                            />
                        );
                    })}
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        backgroundColor: 'blue'
    }
});
