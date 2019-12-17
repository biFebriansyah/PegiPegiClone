import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Header } from 'native-base';
import Color from '../../global/style/Color';

export class Inbox extends Component {
    render() {
        return (
            <>
                <Header androidStatusBarColor={Color.primary} style={{ backgroundColor: Color.primary, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Inbox</Text>
                </Header>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text> Inbox Here </Text>
                </View>
            </>
        )
    }
}

export default Inbox
