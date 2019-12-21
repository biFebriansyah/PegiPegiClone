import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Header } from 'native-base';
import Color from '../../../Global/style/Color';

export class FormData extends Component {
    render() {
        return (
            <View>
                <Header
                    androidStatusBarColor={Color.primary}
                    style={style.Header}>
                    <IconAnt name="arrowleft" size={24} color="#FFE0D5" onPress={this.goBack} style={style.Icon} />
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
                        Pembayaran
                    </Text>
                    <IconEntypo name="dots-three-horizontal" size={24} color="#fff" style={style.Dot} />
                </Header>
            </View>
        )
    }
}

const style = StyleSheet.create({
    Header: {
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icon: {
        position: 'absolute',
        left: 0,
        marginLeft: 10,
    },
    Dot: {
        position: 'absolute',
        right: 0,
        marginRight: 10,
    },
})

export default FormData
