import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import Color from '../../global/style/Color'

class Jelajahi extends Component {
    render() {
        return (
            <View style={{ marginTop: 30, marginBottom: 20 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', paddingHorizontal: 16, }}>
                    <Text style={{ color: Color.DarkAcent, fontSize: 20, fontFamily: 'Roboto-Bold', marginBottom: 5, fontWeight: 'bold' }}>Jelajahi Nusantara</Text>
                    <Text style={{ color: Color.DarkAcent, marginBottom: 8, fontFamily: 'Roboto', fontSize: 13, fontWeight: '600', paddingVertical: 2, }}>Temukan keragaman & keindahan Indonesia</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", backgroundColor: "white", paddingHorizontal: 16, }}>
                        <View style={{ marginRight: 8, width: 240, height: 250, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 2, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 45, fontFamily: 'Tahu' }} >Labuan Bajo</Text>
                            </View>
                            <Image source={require('../../global/asset/jelajahinusa/labuan_bajo.jpg')} style={{ width: null, zIndex: -1, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                        <View style={{ marginRight: 8, width: 240, height: 250, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 2, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 45, fontFamily: 'Tahu' }} >Raja Ampat</Text>
                            </View>
                            <Image source={require('../../global/asset/jelajahinusa/rajaampat.jpg')} style={{ width: null, zIndex: -1, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                        <View style={{ marginRight: 8, width: 240, height: 250, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 2, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 40, fontFamily: 'Tahu' }} >Gili Trawangan</Text>
                            </View>
                            <Image source={require('../../global/asset/jelajahinusa/gilitrw.jpg')} style={{ width: null, zIndex: -1, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                        <View style={{ marginRight: 8, width: 240, height: 250, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 2, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 45, fontFamily: 'Tahu' }} >Belitung</Text>
                            </View>
                            <Image source={require('../../global/asset/jelajahinusa/belitung.jpg')} style={{ width: null, zIndex: -1, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                        <View style={{ marginRight: 8, width: 240, height: 250, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 45, fontFamily: 'Tahu' }} >Ubud</Text>
                            </View>
                            <Image source={require('../../global/asset/jelajahinusa/ubud.jpg')} style={{ width: null, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                        <View style={{ marginRight: 8, width: 240, height: 250, marginTop: 8, borderRadius: 10, position: "relative" }}>
                            <View style={{ width: "100%", height: "100%", position: "absolute", flex: 1, zIndex: 2, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: "white", fontSize: 45, fontFamily: 'Tahu' }} >Nusa Penida</Text>
                            </View>
                            <Image source={require('../../global/asset/jelajahinusa/nusa_penida.jpg')} style={{ width: null, zIndex: -1, borderRadius: 10, height: null, resizeMode: 'cover', flex: 1 }} />
                        </View>
                    </View>
                </ScrollView>
            </View >
        )
    }
}

export default Jelajahi
