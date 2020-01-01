import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableHighlight, Dimensions } from 'react-native';
import IconEntypo from 'react-native-vector-icons/AntDesign';
import Icontypo from 'react-native-vector-icons/Entypo';
import { Header, Content, } from 'native-base';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Icona from 'react-native-vector-icons/FontAwesome';
import Icone from 'react-native-vector-icons/MaterialCommunityIcons';
import Icond from 'react-native-vector-icons/Feather';
import Color from '../../../Global/style/Color';
import { BoxShadow } from 'react-native-shadow';
export class FormData extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <>
        <View>
          <Header
            androidStatusBarColor={Color.primary}
            style={style.Header}>
            <IconEntypo name="arrowleft" size={24} color="#FFE0D5" onPress={this.goBack} style={style.Icon} />
            <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>
              Lengkapi Data
                    </Text>
            <Icontypo name="dots-three-horizontal" size={24} color="#fff" style={style.Dot} />
          </Header>
        </View>

        <Content>
          <View style={style.shado, { backgroundColor: "#FAFAFA", height: 60 }}>
            <View style={{ flex: 1, paddingVertical: 20 }}>
              <Text style={{ paddingHorizontal: 20, fontSize: 15, }}>Pesanan Anda</Text>
            </View>
          </View>

          <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
            <Icons name="user-lock" size={15} style={{ width: 20, height: 20, color: "#F97432" }} />
            <Text style={{ fontSize: 16, marginLeft: 6 }}>Jakarta </Text>
            <Text style={{ fontSize: 16, marginLeft: 6 }}>-></Text>
            <Text style={{ fontSize: 16, marginLeft: 6 }}>Surabaya </Text>
            <Text style={{ color: "#F97432", paddingVertical: 5, fontWeight: "bold", fontSize: 15, }} >Detail</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Text style={{ color: '#888' }}>Sekali Jalan</Text>
          </View>
          <View style={{ alignItems: "center", }}>
            <Text style={{ fontSize: 15, color: "#a5a5a5" }}>- - - - - - - - - - - - - - - - - - -
               - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
          </View>
          <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row' }}>
            <Icons name="user-lock" size={15} style={{ width: 20, height: 20, color: "#F97432" }} />
            <Text style={{ fontSize: 16, marginLeft: 6 }}>Lion Air </Text>
            <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 270 }} />
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Text style={{ color: '#888' }}>min,22 Des 2019, 20:45(CGK)</Text>
            <Text style={{ color: '#888' }}>-></Text>
            <Text style={{ color: '#888' }}>22:15(SUB)</Text>
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Text style={{ color: '#888' }}>(Langsung)</Text>
          </View>
          <View style={style.shado, { backgroundColor: "#FAFAFA", height: 60 }}>
            <View style={{ flex: 1, paddingVertical: 20 }}>
              <Text style={{ paddingHorizontal: 20, fontSize: 15, }}>Data Pemesan</Text>
            </View>
          </View>
          <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
            <Icons name="user-lock" size={20} style={{ width: 40, height: 20, color: "#F97432" }} />
            <Text style={{ fontSize: 16, marginLeft: 6 }}> Masuk Atau Daftar</Text>
            <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 170 }} />
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 70 }}>
            <Text style={{ color: '#888' }}>Dan nikmati berbagai keuntungan menjadi member Pegipegi</Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
            <Icone name="star-circle-outline" size={20} style={{ width: 20, height: 20, color: "#D8D8D8" }} />
            <Text style={{ fontSize: 16, marginLeft: 6 }}>PepePoin</Text>
            <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 255 }} />
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Text style={{ color: '#888' }}>PepePoin dapat ditukarkar dengan berbagai diskon</Text>
          </View>

          <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
            <Icona name="history" size={20} style={{ width: 20, height: 20, color: "#D8D8D8" }} />
            <Text style={{ fontSize: 16, marginLeft: 6 }}>Histori perjalanan</Text>
            <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 200 }} />
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Text style={{ color: '#888' }}>Semua detail data perjalanan tersimpan dengan aman</Text>
          </View>
          <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
            <Icond name="users" size={15} style={{ width: 20, height: 20, color: "#D8D8D8" }} />
            <Text style={{ fontSize: 16, marginLeft: 6 }}>Daftar tamu & penumpang</Text>
            <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 240 }} />
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Text style={{ color: '#888' }}>Isi data tamu & penumpang lebih mudah</Text>
          </View>

          <View style={style.shado, { backgroundColor: "#FAFAFA", height: 30 }}>

          </View>
          <TouchableHighlight onPress={() => navigate('orderData')}>
            <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
              <Icons name="user-edit" size={15} style={{ width: 20, height: 20, color: "#D8D8D8" }} />
              <Text style={{ fontSize: 16, marginLeft: 8 }}>Isi data pemesanan</Text>
              <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 200 }} />
            </View>
          </TouchableHighlight>
          <View style={style.shado, { backgroundColor: "#FAFAFA", height: 70, marginTop: 16, }}>
            <View style={{ flex: 1, paddingVertical: 20 }}>
              <Text style={{ paddingHorizontal: 20, fontSize: 15, }}>Data Penumpang</Text>
            </View>
          </View>
          <TouchableHighlight onPress={() => navigate('pessanger')}>
            <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
              <Icons name="user-edit" size={15} style={{ width: 20, height: 20, color: "#D8D8D8" }} />
              <Text style={{ fontSize: 16, marginLeft: 8 }}>Isi data penumpang 1</Text>
              <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 170 }} />
            </View>
          </TouchableHighlight>
          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Text style={{ color: '#888' }}>Dewasa</Text>
          </View>
          <View style={style.shado, { backgroundColor: "#FAFAFA", height: 70, marginTop: 16, }}>
            <View style={{ flex: 1, paddingVertical: 20 }}>
              <Text style={{ paddingHorizontal: 20, fontSize: 15, }}>Klaim instan : mudah, cepat dan otomatis</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 22 }}>
              <Text style={{ color: '#888' }}>Asuransi Simas Insurtech-Pasar polis </Text>
            </View>
          </View>

          <TouchableHighlight onPress={this.handleOnpress}>
            <BoxShadow setting={shadowOpt}>
              <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff', height: 70, marginVertical: 1, borderRadius: 5, }}>

                  <View style={{ marginTop: 7, marginLeft: 10, flexDirection: 'row' }}>
                    <Icons name="plane-departure" size={25} style={{ width: 40, height: 20, color: "#F97432" }} />
                    <Text style={{ color: '#888' }}>Keterlambatan Penerbangan Mulai dari 60 menit ke atas kompensasi Rp250 ribu per jam hingga Rp2.5 juta</Text>
                  </View>
                </View>
              </View>
            </BoxShadow>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.handleOnpress}>
            <BoxShadow setting={shadowOpt}>
              <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff', height: 70, marginVertical: 1, borderRadius: 5, }}>
                  <View style={{ marginTop: 7, marginLeft: 10, flexDirection: 'row' }}>
                    <Icona name="calendar-times-o" size={22} style={{ width: 40, height: 20, color: "#F97432" }} />
                    <Text style={{ color: '#888' }}>Pembatalan Perjalanan Ganti rugi hingga Rp10 juta</Text>
                  </View>
                </View>
              </View>
            </BoxShadow>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.handleOnpress}>
            <BoxShadow setting={shadowOpt}>
              <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff', height: 70, marginVertical: 1, borderRadius: 5, }}>
                  <View style={{ marginTop: 7, marginLeft: 10, flexDirection: 'row' }}>
                    <Icone name="alarm-light" size={25} style={{ width: 40, height: 20, color: "#F97432" }} />
                    <Text style={{ color: '#888' }}>Kecelakaan Diri: Biaya pertanggungan hingga Rp100 juta</Text>
                  </View>
                </View>
              </View>
            </BoxShadow>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.handleOnpress}>
            <BoxShadow setting={shadowOpt}>
              <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff', height: 70, marginVertical: 1, borderRadius: 5, }}>
                  <View style={{ marginTop: 7, marginLeft: 10, flexDirection: 'row' }}>
                    <Icons name="luggage-cart" size={25} style={{ width: 40, height: 20, color: "#F97432" }} />
                    <Text style={{ color: '#888' }}>Keterlambatan & Kehilangan Bagasi: Ganti rugi hingga Rp2.5 juta</Text>
                  </View>
                </View>
              </View>
            </BoxShadow>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.handleOnpress}>
            <BoxShadow setting={shadowOpt}>
              <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#fff', height: 70, marginVertical: 1, borderRadius: 5, }}>
                  <View style={{ marginTop: 7, marginLeft: 10, flexDirection: 'row' }}>
                    <Icond name="smartphone" size={20} style={{ width: 40, height: 20, color: "#F97432" }} />
                    <Text style={{ color: '#888' }}>Fitur Klaim Instan: Proses mudah, cepat dan otomatis!</Text>
                  </View>
                </View>
              </View>
            </BoxShadow>
          </TouchableHighlight>
          <View style={style.shado, { backgroundColor: "#FAFAFA", height: 70, marginTop: 16, }}>
            <View style={{ flex: 1, paddingVertical: 20 }}>
              <Text style={{ paddingHorizontal: 20, fontSize: 15, color: "#F97432", fontWeight: "bold" }}>Rp.19.000</Text>
            </View>
          </View>
          <View style={style.shado, { alignItems: "center", backgroundColor: "#FAFAFA", height: 70, marginTop: 16, }}>
            <View style={{ flex: 1, paddingVertical: 20, }}>

              <Button onPress={() => navigate('pembayaran')}
                style={{
                  backgroundColor: Color.primary,
                  alignItems: 'center',
                  marginTop: 5,
                  borderRadius: 2,
                  width: "100%",
                  paddingHorizontal: 140,
                }}>
                <Text style={{ color: 'white' }}> Lanjut </Text>
              </Button>
            </View>
          </View>
        </Content>

      </>
    )
  }
}


const theWidth = Dimensions.get('window').width - 10
const shadowOpt = {
  width: theWidth, height: 67, color: '#333', border: 2, radius: 5, opacity: 0.2, x: 0, y: 5,
  style: { marginVertical: 5, marginHorizontal: 6, flex: 1 },
};

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
})

export default FormData
