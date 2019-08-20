import React from "react";
import {TextInput,View} from 'react-native';

class UselessTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Useless Placeholder'};
    }

    render() {
        return (
            <TextInput
                {...this.props}
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        );
    }
}


export class TextInputScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Useless Multiline Placeholder',
        };
    }

    // 你可以试着输入一种颜色，比如red，那么这个red就会作用到View的背景色样式上
    render() {
        return (
            <View style={{
                backgroundColor: this.state.text,
                borderBottomColor: 'red',
                borderBottomWidth: 1 }}
            >
                <UselessTextInput
                    multiline = {true}
                    numberOfLines = {4}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    returnKeyType='go'
                />
            </View>
        );
    }
}