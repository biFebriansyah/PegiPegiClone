/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
import { Header, Icon, Badge, Button } from 'native-base';
import { BoxShadow } from 'react-native-shadow';
import Color from '../../global/style/Color';

export class TransferMandiri extends Component {
    render() {
        const theWidth = Dimensions.get('window').width - 10;
        const shadowOpt = {
            width: theWidth, height: 201, color: '#333', border: 2, radius: 5, opacity: 0.2, x: 0, y: 5,
            style: { marginVertical: 5, marginHorizontal: 6, flex: 1 },
        };
        const shadowKupon = {
            width: theWidth, height: 50, color: '#333', border: 2, radius: 5, opacity: 0.2, x: 0, y: 5,
            style: { marginVertical: 5, marginHorizontal: 6, flex: 1 },
        };
        const shadowRincian = {
            width: theWidth, height: 50, color: '#333', border: 2, radius: 5, opacity: 0.2, x: 0, y: 5,
            style: { marginVertical: 5, marginHorizontal: 6, flex: 1 },
        };
        return (
            <>
                <Header androidStatusBarColor={Color.primary} style={style.Header}>
                    <Icon name="arrowleft" type="AntDesign" onPress={this.goBack} style={style.Icon} />
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Transfer Mandiri</Text>
                    <Icon name="dots-three-horizontal" type="Entypo" size={24} style={style.Dot} />
                </Header>

                <ScrollView style={{ flex: 1 }}>
                    <View style={{ backgroundColor: '#ddd', flex: 1 }}>
                            <View style={{ flexDirection: 'row', backgroundColor: Color.primary, height: 30 }}>
                                <Text style={{ borderWidth: 1, borderColor: '#ddd', borderRadius: 100, paddingHorizontal: 10, display:'flex', paddingTop: 5, bottom: 1, left: 10, color: '#ddd' }}>1</Text>
                                <Text style={{ paddingLeft: 15, color: '#ddd', top: 5 }}>Data Pesanan</Text>
                                <Text style={{ bottom: 1, left: 5, color: '#eee' }}> __ </Text>
                                <Text style={{ borderWidth: 1, borderRadius: 100, paddingHorizontal: 10, paddingTop: 5, display: 'flex', bottom: 1, left: 10, color: '#fff', borderColor: '#fff' }}>2</Text>
                                <Text style={{ paddingLeft: 15, color: '#fff', top: 5 }}>Bayar</Text>
                            </View>

                            <View style={{ backgroundColor: '#fff', height: 100, flex:1  }}>
                                <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ fontFamily: "Roboto-Medium", fontSize: 16 }}>Pesanan Anda</Text>
                                    <Badge style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: Color.primary, borderRadius: 3, justifyContent: "center" }}>
                                        <Text style={{ color: Color.primary, fontFamily: "Roboto-Medium" }}>Detail</Text>
                                    </Badge>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={require('../../../Global/asset/Image/components/lion.png')} style={style.Lion} />
                                        <Badge style={style.BadgeInit}>
                                            <Text style={style.BadgeText}>CGK</Text>
                                        </Badge>
                                        <Text style={style.DeparText}>Jakarta</Text>
                                        <Icon name="long-arrow-alt-right" type="FontAwesome5" style={style.arrowRight} />
                                        <Badge style={style.BadgeInit2}>
                                            <Text style={style.BadgeText}>SUB</Text>
                                        </Badge>
                                        <Text style={style.DeparText2}>Surabaya</Text>
                                    </View>
                                    <View style={{flexDirection: "row", paddingLeft: 60 }}>
                                            <Text style={{ color: '#888' }}> Sab, 21 Des 2019</Text>
                                            <Icon name="dot-single" type="Entypo" style={{ bottom: 4, right: 5, color: '#888' }} />
                                            <Text style={{ color: '#888', right: 10 }}>19:35</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{flex:1}}>
                                    <BoxShadow setting={shadowOpt}>
                                        <View style={{ flex: 1 }}>
                                            <View style={{ justifyContent: 'space-between', backgroundColor: '#fff', height: 200, paddingLeft: 10, marginVertical: 5, borderRadius: 5 }}>
                                                <Text style={{ top: 10 }}>Metode Pembayaran</Text>
                                                <View style={{ flexDirection: 'row', top: 10, justifyContent: 'space-between' }}>
                                                    <Text>Transfer Bank (Bank Mandiri) </Text>
                                                    <Image source={require('../../../Global/asset/Image/components/Mandiri.png')} style={style.mandiri} />
                                                </View >
                                                <Text style={{ bottom: 10, color: '#bbb' }}>.............................................................................................</Text>
                                                <Text  style={{color:'#666'}}>
                                                    Name Pemilik Rekening
                                                </Text>
                                                <Text>
                                                    Budi Setiawan
                                                </Text>
                                                <Text style={{ bottom: 15 }}>
                                                    __________________________________________________
                                                </Text>
                                                <Text style={{color:'#666'}}>
                                                    Perhatian:
                                                </Text>
                                                <Text style={{ bottom: 8, color:'#666' }}>
                                                    Anda bisa transfer dari layanan perbankan apapun (internet banking, SMS/M-Banking, ATM)
                                                </Text>
                                            </View>
                                        </View>
                                    </BoxShadow>
                            </View>

                            <View style={{flex:1}}>
                                <BoxShadow setting={shadowKupon}>
                                        <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 49, paddingHorizontal: 10, marginVertical: 5, borderRadius: 5, justifyContent: 'space-between' }}>
                                            <Icon name="ticket-percent" type="MaterialCommunityIcons" style={{ paddingVertical: 10, color: '#bbb' }}/>
                                            <Text style={{ top: 15, paddingRight: 150 }}> Kode Kupon </Text>
                                            <Text style={{ top: 15, color: Color.primary }}> Pakai </Text>
                                        </View>
                                </BoxShadow>
                            </View>

                            <View style={{flex:1}}>
                                <BoxShadow setting={shadowRincian}>
                                    <View style={{ flex: 1 }}>
                                        <View style={{ backgroundColor: '#fff', height: 160, paddingHorizontal: 10, marginVertical: 5, borderRadius: 5 }}>
                                            <Text style={{ top: 15 }}>Rincian Harga</Text>
                                            <Text> ............................................................................................ </Text>
                                            <Text>Lion Air CGK - SUB</Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>Penumpang</Text>
                                                <Text>x1</Text>
                                                <Text>Rp1.014.000</Text>
                                            </View>
                                            <Text> ............................................................................................ </Text>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text>Asuransi</Text>
                                                <Text>x1</Text>
                                                <Text>Rp19.000</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f9cc42' }}>
                                                <Text>Harga Total</Text>
                                                <Text style={{fontWeight: "bold"}}>Rp1.033.000</Text>
                                            </View>
                                            <Text style={{fontSize:12}}>*Jumlah akan dikurangi kode unik di halaman intruksi </Text>
                                        </View>
                                    </View>
                                </BoxShadow>
                            </View>

                            <View style={{ paddingHorizontal: 10, flex:1, marginTop: 120, marginBottom: 10 }}>
                                <Button style={{ backgroundColor: Color.primary, borderRadius: 0, width: "100%", alignContent: 'center' }}>
                                    <Text style={{ color: 'white', paddingHorizontal: 130, fontSize: 20 }}> BAYAR </Text>
                                </Button>
                            </View>
                    </View>
                </ScrollView>
            </>
        );
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
        color: "#fff"
    },
    Dot: {
        position: 'absolute',
        right: 0,
        marginRight: 10,
        color: '#fff'
    },
    Lion: {
        width: 25,
        height: 25,
        left: 25,
    },
    BadgeText: {
        color: '#888'
    },
    BadgeInit: {
        left: 40,
        bottom: 10,
        borderRadius: 5,
        backgroundColor: '#eee',
        justifyContent: 'center',
    },
    BadgeInit2: {
        left: 85,
        bottom: 10,
        borderRadius: 5,
        backgroundColor: '#eee',
        justifyContent: 'center',
    },
    DeparText: {
        left: 45,
        bottom: 5,
        color: '#666'
    },
    DeparText2: {
        left: 90,
        bottom: 5,
        color: '#666'
    },
    arrowRight: {
        fontSize: 12,
        color: '#ccc',
        left: 70,
    },
    mandiri: {
        width: 50,
        height: 50,
        bottom: 10,
        right: 10,
        resizeMode: 'contain'
    },
});

export default TransferMandiri;