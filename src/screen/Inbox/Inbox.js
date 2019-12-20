import React, { Component } from 'react'
import { Text, View, TouchableHighlight,ImageBackground } from 'react-native'
import { Header } from 'native-base';
import Color from '../../global/style/Color';

export class Inbox extends Component {


    render() {
        return (
            <>
                <Header androidStatusBarColor={Color.primary} style={{ backgroundColor: Color.primary, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Inbox</Text>
                </Header>
                <ImageBackground source={require('../../../Global/asset/Image/inb.png')} style={{ flex: 1 }}>
            </ImageBackground>
                    
            </>
        )
    }
}

export default Inbox