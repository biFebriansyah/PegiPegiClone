import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import Color from '../../global/style/Color'

class Terbang extends Component {
    render() {
        return (
            <View style={{ marginTop: 18 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 16, }}>
                    <Text style={{ color: Color.DarkAcent, fontSize: 20, fontFamily: 'Roboto-Bold', marginBottom: 5, fontWeight: 'bold' }}>Terbang Ke Luar Negri</Text>
                    <Text style={{ color: Color.DarkAcent, marginBottom: 8, fontFamily: 'Roboto', fontSize: 13, fontWeight: '600', paddingVertical: 2, }}>Temukan inspirasi Liburan mancanegara</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", backgroundColor: "white", paddingHorizontal: 16, }}>
                        <View style={{ marginRight: 8, width: 165, height: 110, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 2, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 24, }} >Jepang</Text>
                            </View>
                            <Image source={require('../../global/asset/jepang.jpg')} style={{ width: null, zIndex: -1, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                        <View style={{ marginRight: 8, width: 165, height: 110, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 2, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 24 }} >Malaysia</Text>
                            </View>
                            <Image source={require('../../global/asset/malaysia.jpg')} style={{ width: null, zIndex: -1, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                        <View style={{ marginRight: 8, width: 165, height: 110, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 2, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 24 }} >Singapore</Text>
                            </View>
                            <Image source={require('../../global/asset/singapore.jpg')} style={{ width: null, zIndex: -1, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                        <View style={{ marginRight: 8, width: 165, height: 110, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 2, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 24 }} >Australia</Text>
                            </View>
                            <Image source={require('../../global/asset/australia.jpg')} style={{ width: null, zIndex: -1, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                        <View style={{ marginRight: 8, width: 165, height: 110, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 24 }} >thailand</Text>
                            </View>
                            <Image source={require('../../global/asset/thailand.jpg')} style={{ width: null, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    }
}

export default Terbang
