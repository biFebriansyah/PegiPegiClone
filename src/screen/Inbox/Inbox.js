import React, { Component } from 'react'
import { Text, View, TouchableHighlight,Image } from 'react-native'
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
                <Image source={require('../../../Global/asset/Image/components/121.png')} style={{ width: '100%', height: '200%', resizeMode: 'contain', }} />
            </View>
            </>
        )
    }
}

export default Inbox