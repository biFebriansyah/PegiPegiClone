import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { Header } from 'native-base';
import Color from '../../global/style/Color';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo'
import { BoxShadow } from 'react-native-shadow'

export class Pembayaran extends Component {
    render() {
        const theWidth = Dimensions.get('window').width - 50
        const shadowOpt = {
            width: theWidth, height: 50, color: '#333', border: 2, radius: 5, opacity: 0.2, x: 0, y: 5,
            style: { marginVertical: 5, marginHorizontal: 6, flex: 1 },
        };
        const shadowOptt = {
            width: theWidth, height: 70, color: '#333', border: 2, radius: 5, opacity: 0.2, x: 0, y: 5,
            style: { marginVertical: 5, marginHorizontal: 6, flex: 1 },
        };
        const shadowOpttt = {
            width: theWidth, height: 50, color: '#333', border: 2, radius: 5, opacity: 0.2, x: 0, y: 5,
            style: { marginHorizontal: 6, flex: 1 },
        };
        const shadowOptttt = {
            width: theWidth, height: 50, color: '#333', border: 2, radius: 5, opacity: 0.2, x: 0, y: 0,
            style: { marginHorizontal: 6, flex: 1 },
        };
        return (
            <>
                <Header
                    androidStatusBarColor={Color.primary}
                    style={style.Header}>
                    <IconAnt name="arrowleft" size={24} color="#FFE0D5" onPress={this.goBack} style={style.Icon} />
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
                        Pembayaran
                    </Text>
                    <IconEntypo name="dots-three-horizontal" size={24} color="#fff" style={style.Dot} />
                </Header>

                <ScrollView>
                    <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                        <View style={{ paddingBottom: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', color: "#999", fontSize: 20 }}>
                                Transfer Bank
                            </Text>
                            <BoxShadow setting={shadowOpt}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#fff', height: 49, paddingLeft: 10, marginVertical: 5, borderRadius: 5, borderBottomEndRadius: 0, borderBottomStartRadius: 0, }}>
                                        <Text style={{ top: 15 }}>Bank Mandiri</Text>
                                        <Image source={require('../../../Global/asset/Image/components/Mandiri.png')} style={{ left: 70, top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                    </View>
                                </View>
                            </BoxShadow>
                            
                            <BoxShadow setting={shadowOpttt}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 49, paddingLeft: 10, marginVertical: 0, borderRadius: 0, justifyContent: 'center' }}>
                                        <Text style={{ top: 15 }}>Bank Central Asia</Text>
                                        <Image source={require('../../../Global/asset/Image/components/bca.png')} style={{ left: 50, top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                    </View>
                                </View>
                            </BoxShadow>
                            
                            <BoxShadow setting={shadowOpttt}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 49, paddingLeft: 10, marginVertical: 0, borderRadius: 0, justifyContent: 'center' }}>
                                        <Text style={{ top: 15 }}>Bank Rakyat Indonesia</Text>
                                        <Image source={require('../../../Global/asset/Image/components/BRI.png')} style={{ left: 30, top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                    </View>
                                </View>
                            </BoxShadow>
                            
                            <BoxShadow setting={shadowOptttt}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 49, paddingLeft: 10, marginVertical: 0, borderRadius: 5, borderTopEndRadius: 0, borderTopStartRadius: 0, justifyContent: 'center' }}>
                                        <Text style={{ top: 15 }}>Bank Negara Indonesia</Text>
                                        <Image source={require('../../../Global/asset/Image/components/BNI.png')} style={{ left: 40, top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                    </View>
                                </View>
                            </BoxShadow>
                        </View>

                        <View style={{ paddingBottom: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', color: "#999", fontSize: 20 }}>
                                Kartu Kredit
                        </Text>
                            <BoxShadow setting={shadowOpt}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 49, paddingLeft: 10, marginVertical: 5, borderRadius: 5 }}>
                                        <Text style={{ top: 15 }}> Kartu Kredit </Text>
                                        <Image source={require('../../../Global/asset/Image/components/visa.png')} style={{ top: 15, left: 90, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                        <Image source={require('../../../Global/asset/Image/components/mastercard.png')} style={{ left: 30, top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                    </View>
                                </View>
                            </BoxShadow>
                        </View>

                        <View style={{ paddingBottom: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', color: "#999", fontSize: 20 }}>
                                Transfer ATM
                        </Text>
                            <BoxShadow setting={shadowOpt}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 49, paddingLeft: 10, marginVertical: 5, borderRadius: 5, justifyContent: 'center' }}>
                                        <Text style={{ top: 15 }}> ATM </Text>
                                        <Image source={require('../../../Global/asset/Image/components/atmbersama.png')} style={{ left: 60, top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                        <Image source={require('../../../Global/asset/Image/components/logo.png')} style={{ left: 30, top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                        <Image source={require('../../../Global/asset/Image/components/prima.png')} style={{ top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                        <Image source={require('../../../Global/asset/Image/components/PermataBank.png')} style={{ right: 10, top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                    </View>
                                </View>
                            </BoxShadow>
                        </View>

                        <View style={{ paddingBottom: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', color: "#999", fontSize: 20 }}>
                                Virtual Account
                        </Text>
                            <BoxShadow setting={shadowOpt}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 49, paddingLeft: 10, marginVertical: 5, borderRadius: 5, justifyContent: 'center' }}>
                                        <Text style={{ top: 15 }}> Virtual Account BCA </Text>
                                        <Image source={require('../../../Global/asset/Image/components/bca.png')} style={{ left: 40, top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                    </View>
                                </View>
                            </BoxShadow>
                        </View>

                        <View style={{ paddingBottom: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', color: "#999", fontSize: 20 }}>
                                Internet Banking
                        </Text>
                            <BoxShadow setting={shadowOpt}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 49, paddingLeft: 10, marginVertical: 5, borderRadius: 5, justifyContent: 'center' }}>
                                        <Text style={{ top: 15 }}>KlikBCA </Text>
                                        <Image source={require('../../../Global/asset/Image/components/klikbca.jpg')} style={{ left: 100, top: 10, width: 30, height: 30, flex: 1, resizeMode: 'contain' }} />
                                    </View>
                                </View>
                            </BoxShadow>
                        </View>

                        <View style={{ paddingBottom: 10 }}>
                            <Text style={{ fontFamily: 'Roboto-Bold', color: "#999", fontSize: 20 }}>
                                Bayar di Minimarket
                        </Text>
                            <BoxShadow setting={shadowOptt}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 69, paddingLeft: 10, marginVertical: 5, borderRadius: 5, justifyContent: 'center' }}>
                                        <View style={{ top: 15 }}>
                                            <Text>Indomaret </Text>
                                            <Text style={{ fontSize: 12, bottom: 2, right: 2 }}> Jam layanan 08:00 - 20:00 (WIB) </Text>
                                        </View>
                                        <Image source={require('../../../Global/asset/Image/components/indomaret.png')} style={{ left: 20, top: 10, width: 40, height: 40, flex: 1, resizeMode: 'contain' }} />
                                    </View>
                                </View>
                            </BoxShadow>
                        </View>

                        <View>
                            <Text style={{ fontFamily: 'Roboto-Bold', color: "#999", fontSize: 20 }}>
                                Cicilan Tanpa Kartu
                        </Text>
                            <BoxShadow setting={shadowOpt}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 49, paddingLeft: 10, marginVertical: 5, borderRadius: 5, justifyContent: 'center' }}>
                                        <Text style={{ top: 15 }}>Kredivo </Text>
                                        <Image source={require('../../../Global/asset/Image/components/kredivo.png')} style={{ left: 90, top: 15, width: 20, height: 20, flex: 1, resizeMode: 'contain' }} />
                                    </View>
                                </View>
                            </BoxShadow>
                        </View>

                    </View>
                </ScrollView>
            </>
        )
    }
}

const style = StyleSheet.create({
    Header: {
        backgroundColor: Color.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Icon: {
        position: 'absolute',
        left: 0,
        marginLeft: 10,
    },
    Dot: {
        position: 'absolute',
        right: 0,
        marginRight: 10,
    },
    Card: {
        width: 394,
        height: 155,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
});

export default Pembayaran;
