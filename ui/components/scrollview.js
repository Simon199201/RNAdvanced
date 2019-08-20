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
    ScrollView,
    RefreshControl
} from 'react-native';

export class ScrollviewScreen extends React.Component {

    constructor(props) {
        super(props);
        console.log('constructor!!!');
        this.state = {
            refreshing: false,
        };
    }

    _onRefresh = () => {
        console.log('_onRefresh')
        this.setState({refreshing: true});
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(
            () => {
                console.log('把一个定时器的引用挂在this上');
                this.setState({refreshing: false})
            },
            5000
        );

    };

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />}
            />
        );
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }
}

