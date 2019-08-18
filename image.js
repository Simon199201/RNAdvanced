/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    View,
    Image,
    ImageBackground
} from 'react-native';

export class ImageScreen extends React.Component {

    render() {
        return (
            <ImageBackground source={{uri:'http://pic25.nipic.com/20121117/9252150_165726249000_2.jpg'}} style={{width: '100%',height:'100%',alignItems: 'center', flexDirection: 'column'}}>
                <Image
                    source={require('./img/baihui.jpg')
                    } blurRadius={1} onLoadEnd={() => {
                    console.log('onLoadEnd');
                }} resizeMode={'cover'}/>
                <Image style={{width: 50, height: 50}}
                       source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                {/*<Image style={{width:50,height:50}} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566121244293&di=c6beab3e0c6b8c559d9a4789510f488b&imgtype=0&src=http%3A%2F%2Fgss0.bdstatic.com%2F5eR1dDebRNRTm2_p8IuM_a%2Fres%2Fr%2Fimage%2F2014-06-10%2F406f1dfaa27b2c52f508533d6828c60c.gif'}}/>*/}
                <Image style={{width: 50, height: 50}} source={require('./img/timg.gif')}/>
            </ImageBackground>
        );
    }
}

