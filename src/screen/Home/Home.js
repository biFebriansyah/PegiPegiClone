import React, { Component } from 'react'
import { Text, View, StatusBar, Image, ScrollView } from 'react-native';
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
                        <Image source={require('../../global/asset/logo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain', flex: 1 }} />
                    </View>
                    <IconMaterial name='person' size={24} color={Color.primary} />
                </Header>
                <View style={{ width: '100%', backgroundColor: '#bbb', height: 214 }}>
                    <Image source={require('../../global/asset/hero1-edited.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', }} />
                </View>
                <View style={{ height: 245, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold' }}>Promo</Text>
                        <Text style={{ color: Color.primary, fontFamily: 'Roboto', fontSize: 15, fontWeight: '600' }}>Lihat Semua</Text>
                    </View>
                    <ScrollView horizontal>
                        <View style={{ alignItems: 'center', marginTop: 25, flexDirection: 'row' }}>
                            <View style={{ backgroundColor: '#bbb', width: 294, height: 158, borderRadius: 10, marginRight: 50 }}>
                                <Image source={require('../../global/asset/Promo1.jpg')} style={{ width: null, height: null, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
                            </View>
                            <View style={{ backgroundColor: '#bbb', width: 294, height: 158, borderRadius: 10 }}>
                                <Image source={require('../../global/asset/Promo1.jpg')} style={{ width: null, height: null, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}


export default Home
