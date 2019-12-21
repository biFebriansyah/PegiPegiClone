import React, { Component } from 'react'
import { Text, StyleSheet, ImageBackground, View, Dimensions, Switch, TouchableHighlight, AsyncStorage } from 'react-native'
import { Header } from 'native-base';
import Color from '../../global/style/Color';
import IconAnt from 'react-native-vector-icons/AntDesign';

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
            }
        };
        this.onDateChange = this.onDateChange.bind(this);
        this.goBack = this.goBack.bind(this);


    }

    componentDidMount() {
        this.subs = [
            this.props.navigation.addListener("didFocus", () => {
                // this.setState({ isFocused: true })
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
            if (valueAsal) {
                const dataValue = JSON.parse(valueAsal)
                this.setState({ asal: dataValue })
            }
            if (valueTujuan) {
                const dataValue = JSON.parse(valueTujuan)
                this.setState({ tujuan: dataValue })
            }
        } catch (error) {
            console.warn(error)
        }
    }

    goBack() {
        const { goBack } = this.props.navigation;
        goBack();
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
                        <View style={{ width: 359, height: 330, position: 'absolute', borderRadius: 10, left: "8%", top: '7%' }}>
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
                                <TouchableHighlight underlayColor='white' onPress={() => this.props.navigation.navigate('listbandara')}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ color: '#898989', fontSize: 15 }}>Asal</Text>
                                        <Text style={{ color: '#4e4e4e', fontSize: 20, fontWeight: 'bold' }}>{this.state.asal.code}</Text>
                                        <Text>{this.state.asal.city}</Text>
                                    </View>
                                </TouchableHighlight>
                                <TouchableHighlight underlayColor='white' onPress={() => this.props.navigation.navigate('bandara2')}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                                        <Text style={{ color: '#898989', fontSize: 15 }}>Tujuan</Text>
                                        <Text style={{ color: '#4e4e4e', fontSize: 20, fontWeight: 'bold' }}>{this.state.tujuan.code}</Text>
                                        <Text>{this.state.tujuan.city}</Text>
                                    </View>
                                </TouchableHighlight>
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
