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
    SectionList,
    Text,
} from 'react-native';

const arr = [
    {title: 'Title1', data: ['item1', 'item2']},
    {title: 'Title2', data: ['item3', 'item4']},
    {title: 'Title3', data: ['item5', 'item6']},
    {title: 'Title4', data: ['item7', 'item8']},
    {title: 'Title5', data: ['item9', 'item10']},
    {title: 'Title6', data: ['item11', 'item12']},
    {title: 'Title7', data: ['item13', 'item14']},
    {title: 'Title8', data: ['item15', 'item16']},
    {title: 'Title9', data: ['item17', 'item18']},
];

export class SelectionListScreen extends React.Component {

    render() {
        return (
            <SectionList initialNumToRender={0} keyExtractor={(item, index) => item + index}
                         sections={arr}
                         renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
                         renderSectionHeader={({section: {title}}) => (
                             <Text style={{fontWeight: 'bold',height:80}}>{title}</Text>
                         )}/>
        );
    }
}

