import React, { Component } from 'react'
import { View, StatusBar, Image, ScrollView, StyleSheet, } from 'react-native';
import { Header } from 'native-base';
import Color from '../../global/style/Color';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';


import Terbang from '../../components/TerbangKeluarNegri/Terbang';
import IconHero from '../../components/IconHero/IconHero';
import ContentPromo from '../../components/ContentPromo/ContentPromo';
import Jelajahi from '../../components/JelajahiNusantara/Jelajahi';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <StatusBar backgroundColor={Color.primary} />
                <Header androidStatusBarColor={Color.primary} style={style.shado, { backgroundColor: Color.lightAcent, alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ width: 120, height: 44 }}>
                        <Image source={require('../../global/asset/logo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain', flex: 1 }} />
                    </View>
                    <IconMaterial name='person-outline' size={24} color={Color.primary} onPress={() => this.props.navigation.navigate('login')} />
                </Header>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1 }}>
                        <IconHero />
                        <ContentPromo />
                        <View style={style.shado, { backgroundColor: Color.SoftDark, height: 9, marginTop: 16, }}></View>
                        <Terbang />
                        <Jelajahi />
                    </View>
                </ScrollView>
            </>
        )
    }
}

const style = StyleSheet.create({
    shado: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
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




export default Home
