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
    Text, Linking,
} from 'react-native';

let text = '第一步：打包JS代码\n第二步：重写getJSBundleFile方法\n第三步：将 index.android.bundle 文件及打包出的相关资源文件夹放置在SD卡目录下\n第四步：配合服务器下发压缩文件，替换指定目录下的文件，即可实现热更新';

export class BundleJsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column',padding:20}}>
                <Button
                    onPress={this.openURL}
                    title="参考链接"
                    color="#841584"
                    touchSoundDisabled={false}
                />
                <Text style={{flex:1,color: 'blue',width:'100%',height:'50%',marginTop:20}} >{text}</Text>
            </View>
        );
    }
    openURL() {
        Linking.openURL('https://www.jianshu.com/p/9e884f73aec0').catch(err => {
            'An error occurred', err;
        });
    }
}

