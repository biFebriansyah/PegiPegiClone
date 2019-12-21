import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native'
import { Header, } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iconp from 'react-native-vector-icons/SimpleLineIcons';
import Iconm from 'react-native-vector-icons/MaterialCommunityIcons'
import Color from '../../global/style/Color';

export class Profile extends Component {
    render() {
        return (
            <>
                <Header androidStatusBarColor={Color.primary} style={{ backgroundColor: Color.primary, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
                </Header>

                <ScrollView>
                    <View style={style.profcontainer}>
                        <View style={style.profbox}>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ width: 50, height: 50 }}>
                                <Image source={require('../../../Global/asset/Image/components/budisetiawan.jpg')} style={{ width: null, height: null, flex: 1, resizeMode: 'cover', borderRadius: 25 }} />
                            </View>

                            <View style={{ flexDirection: "column" }}>
                                <Text>Budi Setiawan</Text>
                                <Text style={{ color: '#aaa' }}>budisetiawan@buset.com</Text>
                            </View>

                            <View style={{ paddingVertical: 10 }}>
                                <Text style={{ color: Color.primary }}>UBAH</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ color: '#bbb' }}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
                        </View>

                        <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10 }}>
                            <View style={{ width: 20, height: 20 }}>
                                <Image source={require('../../../Global/asset/Image/components/PePePoin.png')} style={{ width: null, height: null, flex: 1, resizeMode: 'cover' }} />
                            </View>
                            <Text style={{ paddingLeft: 10 }}> 0 poin</Text>
                        </View>

                    </View>

                        <View style={style.daftartamu}>  
                        <View style={{ paddingHorizontal: 20, flexDirection: 'row' }}>

                            <View style={{ paddingVertical: 16, paddingRight: 5 }}>
                                <Icons name="user-lock" size={15} style={{ width: 20, height: 20, color: "#dbdbdb" }} />
                            </View>

                            <View style={{ flexDirection: 'column', paddingHorizontal: 5, paddingVertical: 5 }}>
                                <Text style={{ fontSize: 16 }}>Daftar Tamu dan Penumpang</Text>
                                <Text style={{ color: '#888' }}>Isi data teman perjalanan anda</Text>
                            </View>

                            <View style={{ paddingVertical: 15 }}>
                                <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 50 }} />
                            </View>

                        </View>

                    </View>

                        <View style={style.pusatbantuan} >

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Iconp name="earphones-alt" size={15} style={{ width: 20, height: 20, color: "#D8D8D8", marginVertical: 10 }} />
                            </View>
                            <View style={{paddingRight: 90}}>
                                <Text style={{ fontSize: 16 }}>Pusat Bantuan</Text>
                                <Text style={{ color: '#888' }}>Kami siap membantu anda</Text>
                            </View>
                            <View>
                                <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 10}} />
                            </View>
                        </View>
                        
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <View>
                                <Icons name="newspaper" size={15} style={{ width: 20, height: 20, color: "#D8D8D8", marginVertical: 10 }} />
                            </View>

                            <View style={{paddingRight: 90}}>
                                <Text style={{ fontSize: 16 }}>Newsletter</Text>
                                <Text style={{ color: '#888' }}>Berlangganan di newsletter</Text>
                            </View>

                            <View>
                                <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5 }} />
                            </View>

                        </View>

                    </View>

                        <View style={style.keluar}>
                        <View style={{marginVertical: 20, flexDirection:'row', justifyContent: 'space-between'}}>
                            <Iconm name="logout" size={24} color={'#ddd'}/>
                            <Text style={{marginVertical: 3, marginLeft: 10, fontSize: 16, marginRight: 220}}>Keluar</Text>
                        <View>
                                <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 10}} />
                        </View>
                        </View>
                    </View>

                        <View style={style.version}>
                        <Text style={{fontSize: 14}}>
                            Version 2.10.0
                        </Text>
                    </View>
                    </View>
                </ScrollView>
            </>
        )
    }
}

const style = StyleSheet.create({
    profcontainer: { 
        flex: 1, 
        backgroundColor: '#eee' 
    },
    profbox: { 
        height: 130, 
        backgroundColor: '#fff', 
        paddingHorizontal: 10, 
        paddingVertical: 20 
    },
    daftartamu: {
        backgroundColor: "#fff", 
        height: 70, 
        paddingVertical: 10, 
        marginTop: 20
    },
    pusatbantuan: {
        height: 150, 
        backgroundColor: '#fff', 
        marginTop: 20, 
        padding: 20, 
        flexDirection: 'column', 
        justifyContent: 'space-between'
    },
    keluar: {
        backgroundColor: "#fff", 
        height: 70, 
        marginTop: 20, 
        paddingHorizontal:20
    },
    version: {
        height: 80, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
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

export default Profile;
