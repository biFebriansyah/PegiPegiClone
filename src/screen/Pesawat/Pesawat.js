import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, View, Dimensions, Switch, TouchableHighlight, } from 'react-native'
import { Header } from 'native-base';
import Color from '../../global/style/Color';
import AsyncStorage from '@react-native-community/async-storage';
import IconAnt from 'react-native-vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class Pesawat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isFocused: null,
            asal: {
                code: 'PLW',
                city: 'Palu'
            },
            tujuan: {
                code: 'JKT',
                city: 'Jakarta'
            },
            pp: '',
            date: ''
        };
        this.goBack = this.goBack.bind(this);


    }

    componentDidMount() {
        this.setDate()
        this.subs = [
            this.props.navigation.addListener("didFocus", () => {
                this._retriveData()
            }),
            this.props.navigation.addListener("willBlur", () => {
                this.setState({ isFocused: false })
            })
        ];
    }

    componentWillUnmount() {
        this.subs.forEach(sub => sub.remove());
    }


    async _retriveData() {
        try {
            const valueAsal = await AsyncStorage.getItem('Asal');
            const valueTujuan = await AsyncStorage.getItem('Tujuan');
            const valueDate = await AsyncStorage.getItem('date');
            if (valueAsal) {
                const dataValue = JSON.parse(valueAsal)
                this.setState({ asal: dataValue })
            }
            if (valueTujuan) {
                const dataValue = JSON.parse(valueTujuan)
                this.setState({ tujuan: dataValue })
            }
            if (valueDate) {
                this.setState({ date: valueDate })
            }
        } catch (error) {
            console.warn(error)
        }
    }

    goBack() {
        const { goBack } = this.props.navigation;
        goBack();
    }

    setDate = () => {
        const hariList = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
        const bulanList = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nob', 'Des']
        const date = new Date().getDate()
        const day = new Date().getDay()
        const Month = new Date().getMonth()
        const Year = new Date().getFullYear()
        const newDate = hariList[day] + ', ' + date + ' ' + bulanList[Month] + ' ' + Year
        this.setState({ date: newDate })
    }


    render() {
        return (
            <>
                <Header
                    androidStatusBarColor={Color.status_second}
                    style={style.Header}>
                    <IconAnt name="arrowleft" size={24} color="#FFE0D5" onPress={this.goBack} style={style.Icon} />
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
                        Pesan Tiket Pesawat
                    </Text>
                </Header>
                <View style={{ flex: 1, backgroundColor: Color.header_second }}>
                    <ImageBackground source={require('../../../Global/asset/Image/components/pesawat.png')} style={{ width: wp('100%'), height: hp('100%'), position: 'relative' }} imageStyle={{ resizeMode: 'contain' }}>
                        <View style={{ width: wp('92%'), height: hp('42.7%'), position: 'absolute', borderRadius: 5, left: wp('4%'), top: hp('6.6%'), }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, height: '17.1%', }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pulang Pergi</Text>
                                <Switch
                                    trackColor={{
                                        true: Color.status_second,
                                    }}
                                    thumbColor={Color.status_second}
                                    value={this.state.pp}
                                    onValueChange={
                                        value => {
                                            this.setState({
                                                pp: value,
                                            });
                                        }}
                                />
                            </View>
                            <View style={{ height: '26%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 60, }}>
                                <TouchableHighlight underlayColor='white' onPress={() => this.props.navigation.navigate('listbandara')} style={{ width: '30%' }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
                                        <Text style={{ color: '#898989', fontSize: 15 }}>Asal</Text>
                                        <Text style={{ color: '#4e4e4e', fontSize: 20, fontWeight: 'bold' }}>{this.state.asal.code}</Text>
                                        <Text>{this.state.asal.city}</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight underlayColor='white' onPress={() => this.props.navigation.navigate('bandara2')} style={{ width: '30%' }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }} >
                                        <Text style={{ color: '#898989', fontSize: 15 }}>Tujuan</Text>
                                        <Text style={{ color: '#4e4e4e', fontSize: 20, fontWeight: 'bold' }}>{this.state.tujuan.code}</Text>
                                        <Text>{this.state.tujuan.city}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <TouchableHighlight underlayColor='white' onPress={() => this.props.navigation.navigate('calendar')} style={{ height: '15%', marginTop: 5 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                    <Text style={{ color: '#898989', fontSize: 15 }}>Berangkat</Text>
                                    <Text style={{ color: '#4e4e4e', fontSize: 15, fontWeight: 'bold' }}>{this.state.date}</Text>
                                </View>
                            </TouchableHighlight>
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: '15%', marginTop: 7 }}>
                                <Text style={{ color: '#898989', fontSize: 15 }}>Penumpang</Text>
                                <Text style={{ color: '#4e4e4e', fontSize: 15, fontWeight: 'bold' }}>1 Dewasa, 0 Anak, 0 Bayi</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: '15%', marginTop: 15 }}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate('tiket')} style={{ backgroundColor: Color.primary, justifyContent: 'center', width: '90%', height: '80%', borderRadius: 3, alignItems: 'center' }}>
                                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Cari Tiket</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({
    Header: {
        backgroundColor: Color.header_second,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 70
    },
    Icon: {
        position: 'absolute',
        left: 0,
        marginLeft: 10,
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

export default Pesawat
