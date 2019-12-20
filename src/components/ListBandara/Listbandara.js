import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Content } from 'native-base';

export class Listbandara extends Component {


    render() {
        const theWidth = Dimensions.get('window').width - 10
        const shadowOpt = {
            width: theWidth, height: 151, color: '#ffffff', border: 0, radius: 5, opacity: 0, x: 0, y: 0,
            style: { marginVertical: 5, marginHorizontal: 6, flex: 1 },
        };

        return (

            <Content>
                <View
                    style={{
                        backgroundColor: "#EAEAEA",
                        width: "100%",
                        paddingVertical: 19,
                        paddingHorizontal: 15,
                        flexDirection: "row",
                        alignItems: "center"

                    }}>
                    <View >
                    </View>
                    <View style={{ flex: 1, marginLeft: 10 }} >
                        <Text style={{ color: '#8D8D8D', fontSize: 13 }}>Kota atau Bandara Populer </Text>
                    </View>

                </View>

                <TouchableOpacity>
                    <View style={{ flex: 1 }}>
                        <View style={{ backgroundColor: '#fff', height: 150, marginVertical: 5, borderRadius: 5, }}>
                            <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold', marginLeft: 6 }}>Jakarta, Indonesia </Text>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ marginRight: 170 }}>
                                    </View>
                                    <View style={{backgroundColor: "#F1F1F1", flexDirection:"row", alignItems:"center", borderRadius:5,paddingHorizontal:5,paddingVertical:1 }} >
                                    <Icon name="location-city" size={28} color="#D9D9D9" />
                                    <Text style={{  fontSize: 12, marginLeft: 6 ,color: '#969696'}}>Kota</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginLeft: 20, flexDirection: 'row' }}>
                                <Text style={{ color: '#888', marginLeft: 6 }}>JKT - Semua Bandara</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </Content>
        )
    }
}

export default Listbandara
