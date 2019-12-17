import React, { Component } from 'react'
import { Text, View, StatusBar, Image } from 'react-native';
import { Header } from 'native-base';
import Color from '../../global/style/Color';
import SvgUri from 'react-native-svg-uri';

class Home extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor={Color.primary} />
                <Header androidStatusBarColor={Color.primary} style={{ backgroundColor: Color.acent, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <SvgUri width="120" height="44" source={require('../../global/asset/logo.svg')} />
                </Header>
                <View style={{ width: '100%', backgroundColor: '#bbb', height: 214 }}>
                    <Image source={require('../../global/asset/hero1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', }} />
                </View>
                <View style={{ height: 245 }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 10, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Promo</Text>
                        <Text style={{fontWeight: 'bold', color: Color.primary}}>Lihat Semua</Text>
                    </View>
                    <View></View>
                </View>
            </>
        )
    }
}


export default Home
