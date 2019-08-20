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
    Alert,
    Animated,
} from 'react-native';


export class AnimatedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0.5),  // 透明度初始值设为0
        };
    }

    componentDidMount(): void {
        console.log('componentDidMount');

        // Animated.timing(this.state.fadeAnim, {
        //     toValue: 1, // 目标值
        //     duration: 2500, // 动画时间
        // }).start();
    }

    render() {
        console.log('fadeAnim is ' + this.state.fadeAnim);
        return (
            < Animated.View style={{
                flex: 1,
                opacity: this.state.fadeAnim,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
            }}>
                <Button
                    onPress={() => {
                        // this.state = {
                        //     fadeAnim: new Animated.Value(0.5),  // 透明度初始值设为0
                        // };
                        console.log('click！！！');
                        Animated.timing(this.state.fadeAnim,
                            {
                                toValue: 1,
                                duration: 2500,
                            }).start();
                    }}

                    title="Show Animated"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"//残障人士用来读屏的
                    touchSoundDisabled={false}
                />
            </Animated.View>
        );
    }
}

