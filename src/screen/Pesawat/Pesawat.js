import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, View, Dimensions, Switch } from 'react-native'
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
                                <Text style={{ fontWeight: 'bold' }}>Pulang Pergi</Text>
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
                            <View style={{ backgroundColor: 'red', height: '26%', marginTop: 9, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 60 }}>
                                <View style={{}}>
                                    <Text>Asal</Text>
                                    <Text>JKT</Text>
                                    <Text>Jakarta</Text>
                                </View>
                                <View>
                                    <Text>Asal</Text>
                                    <Text>JKT</Text>
                                    <Text>Jakarta</Text>
                                </View>
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
