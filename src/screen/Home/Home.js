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
                        <Image source={require('../../global/asset/hero1-edited.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', }} />
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
    }
})

export default Home
