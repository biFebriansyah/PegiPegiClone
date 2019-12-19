import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ImageBackground, Button } from 'react-native';
import Color from '../../global/style/Color';

class IconHero extends Component {
    render() {
        return (
            <View style={{ width: '100%', backgroundColor: '#bbb', height: 214 }}>
                <ImageBackground source={require('../../../Global/asset/Image/hero1-edited.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <View style={{ backgroundColor: Color.lightAcent, width: 70, height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../global/asset/train.png')} style={{ width: 40, height: 40 }} />
                            </View>
                            <Text style={style.textShadwo} >KERETA API</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <View style={{ backgroundColor: Color.lightAcent, width: 70, height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../global/asset/plan.png')} style={{ width: 40, height: 40 }} />
                            </View>
                            <Text style={style.textShadwo} >PESAWAT</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <View style={{ backgroundColor: Color.lightAcent, width: 70, height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../global/asset/hotel.png')} style={{ width: 40, height: 40 }} />
                            </View>
                            <Text style={style.textShadwo} >HOTEL</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', }} >
                            <View style={{ backgroundColor: Color.lightAcent, width: 70, height: 70, borderRadius: 50, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ position: 'absolute', top: -10, width: 38, height: 19, backgroundColor: '#FE874D', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#fff', fontSize: 10 }} >BARU</Text>
                                </View>
                                <Image source={require('../../global/asset/bus.png')} style={{ width: 40, height: 40 }} />
                            </View>
                            <Text style={style.textShadwo}>BUS</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const style = StyleSheet.create({
    shado: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textShadwo: {
        color: '#fff',
        fontWeight: '600',
        textShadowColor: '#000',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        fontFamily: 'Roboto-Bolditalic',
        fontSize: 16,
        marginTop: 10,
    }
})

export default IconHero
