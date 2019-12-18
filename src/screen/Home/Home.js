import React, { Component } from 'react'
import { Text, View, StatusBar, Image } from 'react-native';
import { Header } from 'native-base';
import Color from '../../global/style/Color';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor={Color.primary} />
                <Header androidStatusBarColor={Color.primary} style={{ backgroundColor: Color.acent, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <View style={{ width: 120, height: 44 }}>
                        <Image source={require('../../global/asset/logo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain', flex:1 }} />
                    </View>
                    <IconMaterial name='person' size={24} color={Color.primary} />
                </Header>
                <View style={{ width: '100%', backgroundColor: '#bbb', height: 214 }}>
                    <Image source={require('../../global/asset/hero1-edited.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', }} />
                </View>
                <View style={{ height: 245 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 10, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold' }}>Promo</Text>
                        <Text style={{ color: Color.primary, fontFamily: 'Roboto', fontSize: 15, fontWeight: '600' }}>Lihat Semua</Text>
                    </View>
                    <View></View>
                </View>
            </>
        )
    }
}


export default Home
