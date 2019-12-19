import React, { Component } from 'react';
import { Text, View, Image, Dimensions, } from 'react-native';
import Color from '../../global/style/Color';
import { BoxShadow } from 'react-native-shadow';

export class TiketCard extends Component {


    render() {
        const theWidth = Dimensions.get('window').width - 10
        const shadowOpt = {
            width: theWidth, height: 151, color: '#333', border: 2, radius: 5, opacity: 0.2, x: 0, y: 5,
            style: { marginVertical: 5 },
        };

        return (
            <BoxShadow setting={shadowOpt}>
                <View style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#fff', height: 150, marginVertical: 5, borderRadius: 5, }}>
                        <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
                            <Image source={require('../../../Global/asset/Image/components/lion.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ fontSize: 16, marginLeft: 6 }}> Lion Air </Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginRight: 50, marginTop: 5 }}>
                            <Text>04:30</Text>
                            <Text>1j 30m</Text>
                            <Text>06:00</Text>
                            <Text style={{ textDecorationLine: 'line-through', fontSize: 13, marginRight: 5 }}>Rp.967.600</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginRight: 50 }}>
                            <Text style={{ color: '#888' }}>CGK</Text>
                            <Text style={{ color: '#888' }}>Langsung</Text>
                            <Text style={{ color: '#888' }}>SUB</Text>
                            <Text style={{ color: '#f9b142', fontWeight: 'bold' }}>Rp.932.600</Text>
                        </View>

                        <View style={{ alignItems: 'flex-end', marginRight: 87 }}>
                            <Text style={{ color: '#888' }}> per orang</Text>
                        </View>

                        <View style={{ alignItems: 'flex-end', marginVertical: 10, paddingRight: 10 }}>
                            <Text style={{ color: Color.primary, fontFamily: 'Roboto-Bold', fontSize: 14 }}> DETAIL</Text>
                        </View>
                    </View>
                </View>
            </BoxShadow>
        )
    }
}

export default TiketCard
