/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    FlatList, Text
} from 'react-native';

export class FlatListScreen extends React.Component {

    render() {
        return (
            <FlatList
                data={[{key: 'a'}, {key: 'b'}]}
                renderItem={({item}) => <Text>{item.key}</Text>}
                refreshing={true}
            />
        );
    }
}

