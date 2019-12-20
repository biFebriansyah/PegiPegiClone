import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, View, Dimensions, Switch, TouchableHighlight } from 'react-native'
import { Header } from 'native-base';
import Color from '../../global/style/Color';
import IconAnt from 'react-native-vector-icons/AntDesign';

export class Pesawat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pp: null,
            modalPassenger: null,
            modalDeparture: null,
            calendarDeparture: null,
            calendarReturn: null,
            adult: null,
            child: null,
            baby: null
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            pp: false,
            modalPassenger: false,
            modalDeparture: false,
            adult: 1,
            child: 0,
            baby: 0
        });
    }

    onDateChange(date, type) {
        if (type === 'END_DATE') {
            this.setState({
                calendarReturn: date,
            });
        } else {
            this.setState({
                calendarDeparture: date,
                calendarReturn: null,
            });
        }
    }

    render() {
        const theWidth = Dimensions.get('window').width
        const theHeight = Dimensions.get('window').height
        return (
            <>
                <Header
                    androidStatusBarColor={Color.status_second}
                    style={style.Header}>
                    <IconAnt name="arrowleft" size={24} color="#FFE0D5" onPress={this.goBack} style={style.Icon} />
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
                        Titel Pesanan Here
                    </Text>
                </Header>
                <View style={{ flex: 1, backgroundColor: Color.header_second }}>
                    <ImageBackground source={require('../../../Global/asset/Image/components/pesawat.png')} style={{ flex: 1, position: 'relative' }} imageStyle={{ resizeMode: 'contain' }}>
                        <View style={{ width: 359, height: 330, position: 'absolute', borderRadius: 10, left: 17, top: 24 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, height: 50 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pulang Pergi</Text>
                                <Switch
                                    trackColor={{
                                        true: Color.status_second,
                                    }}
                                    thumbColor={Color.status_second}
                                    value={this.state.pp}
                                    onValueChange={
                                        async value => {
                                            await this.setState({
                                                pp: value,
                                            });
                                        }}
                                />
                            </View>
                            <View style={{ height: '26%', marginTop: 9, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 60 }}>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ color: '#898989', fontSize: 15 }}>Asal</Text>
                                    <Text style={{ color: '#4e4e4e', fontSize: 20, fontWeight: 'bold' }}>PLW</Text>
                                    <Text>Palu</Text>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                    <Text style={{ color: '#898989', fontSize: 15 }}>Tujuan</Text>
                                    <Text style={{ color: '#4e4e4e', fontSize: 20, fontWeight: 'bold' }}>JKT</Text>
                                    <Text>Jakarta</Text>
                                </View>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: '15%', marginTop: 5 }}>
                                <Text style={{ color: '#898989', fontSize: 15 }}>Berangkat</Text>
                                <Text style={{ color: '#4e4e4e', fontSize: 15, fontWeight: 'bold' }}>Rab, 18 Des 2019</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: '15%', marginTop: 9 }}>
                                <Text style={{ color: '#898989', fontSize: 15 }}>Penumpang</Text>
                                <Text style={{ color: '#4e4e4e', fontSize: 15, fontWeight: 'bold' }}>1 Dewasa, 0 Anak, 0 Bayi</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', height: '15%', marginTop: 9 }}>
                                <TouchableHighlight style={{ backgroundColor: Color.primary, justifyContent: 'center', width: '90%', height: '80%', borderRadius: 3, alignItems: 'center' }}>
                                    <Text style={{color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Cari Tiket</Text>
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
        justifyContent: 'center',
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
