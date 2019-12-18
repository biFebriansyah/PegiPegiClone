import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../../global/style/Color';

class ContentPromo extends Component {
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

export default ContentPromo
