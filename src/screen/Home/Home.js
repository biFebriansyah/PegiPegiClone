import React, { Component } from 'react'
import { Text, View, StatusBar, Image, ScrollView, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import { Header } from 'native-base';
import Color from '../../global/style/Color';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeSlide: 0,
            entries: [
                require('../../global/asset/Promo1.jpg'),
                require('../../global/asset/Promo2.jpg'),
                require('../../global/asset/Promo3.jpg'),
                require('../../global/asset/Promo4.jpg'),
                require('../../global/asset/Promo5.jpg'),
                require('../../global/asset/Promo6.jpg'),
            ]
        }
    }

    _renderItem({ item, index }) {
        return (
            <View style={{ width: 290, height: 158 }} >
                <Image source={item} style={{ width: null, height: null, flex: 1, resizeMode: 'cover', borderRadius: 10 }} />
            </View>
        )
    }

    get pagination() {
        const { entries, activeSlide } = this.state;
        return (
            <Pagination
                dotsLength={3}
                activeDotIndex={activeSlide}
                dotStyle={{
                    width: 5,
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: Color.primary
                }}
                inactiveDotStyle={{
                    backgroundColor: Color.DarkAcent
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <StatusBar backgroundColor={Color.primary} />
                    <Header androidStatusBarColor={Color.primary} style={{ backgroundColor: Color.lightAcent, alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ width: 120, height: 44 }}>
                            <Image source={require('../../global/asset/logo.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain', flex: 1 }} />
                        </View>
                        <IconMaterial name='person' size={24} color={Color.primary} />
                    </Header>
                    <View style={{ width: '100%', backgroundColor: '#bbb', height: 214 }}>
                        {/* <Image source={require('../../global/asset/hero1-edited.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', }} /> */}
                        <ImageBackground source={require('../../global/asset/hero1-edited.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', }}>
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
                    <View style={{ height: 245, marginTop: 20 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Roboto-Bold', color: Color.DarkAcent }}>Promo</Text>
                            <Text style={{ color: Color.primary, fontFamily: 'Roboto', fontSize: 15, fontWeight: '600' }}>Lihat Semua</Text>
                        </View>
                        <View style={{ marginTop: 20 }} >
                            <Carousel
                                data={this.state.entries}
                                renderItem={this._renderItem}
                                onSnapToItem={(index) => this.setState({ activeSlide: index })}
                                sliderWidth={400}
                                itemWidth={294}
                            />
                            {this.pagination}
                        </View>
                    </View>
                    <View style={style.shado, { backgroundColor: Color.SoftDark, height: 9, marginTop: 16, }}></View>
                </ScrollView>
            </SafeAreaView>
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

export default Home
