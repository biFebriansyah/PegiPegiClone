import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Header, Content, Item, } from 'native-base';
import Color from '../../global/style/Color';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';
import Iconp from 'react-native-vector-icons/SimpleLineIcons';
export class Profile extends Component {

  render() {
    return (
      <>
        <Header androidStatusBarColor={Color.primary} style={{ backgroundColor: Color.primary, alignItems: 'center', justifyContent: 'flex-start' }}>
          <Text style={{ paddingHorizontal: 8, color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
        </Header>

        <Content>

          <View>
            <Text style={{ textAlign: "center", paddingHorizontal: 10, color: '#666', paddingVertical: 10, fontFamily: 'Roboto-Bold' , fontSize: 20}}>Daftar dan nikmati berbagai promo khusus member, sekarang!</Text>
          </View>

          <Button onPress={() => this.props.navigation.navigate('register')}
            style={{
              backgroundColor: Color.primary,
              alignItems: 'center',
              marginTop: 20,
              borderRadius: 0,
              width: "100%",
              paddingVertical: 5,
            }}>
            <Text style={{ color: 'white' }}> REGISTER </Text>
          </Button>
          <View
            style={{ alignItems: 'center', marginTop: 25, flexDirection: 'row', paddingHorizontal: 13 }}>
            <Text style={{ color: '#a5a5a5' }}>
              - - - - - - - - - - - - - - - - - - - - - - - {' '}
            </Text>
            <Text style={{ fontFamily: 'Roboto' }}> ATAU </Text>
            <Text style={{ color: '#a5a5a5' }}>
              - - - - - - - - - - - - - - - - - - - - - - -
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
              <Text style={{ color: Color.primary, fontWeight: 'bold' }}>
                {' '}
                LOGIN{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={style.shado, { backgroundColor: "#FAFAFA", height: 30, marginTop: 16, }}></View>

          <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
            <Icons name="user-lock" size={15} style={{ width: 20, height: 20, color: "#F97432" }} />
            <Text style={{ fontSize: 16, marginLeft: 6 }}> Daftar Tamu dan Penumpang  </Text>
            <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 98 }} />
          </View>

          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Text style={{ color: '#888' }}>Isi data teman perjalanan anda</Text>
          </View>
          <View style={style.shado, { backgroundColor: "#FAFAFA", height: 30, marginTop: 16, }}></View>

          <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
            <Iconp name="earphones-alt" size={15} style={{ width: 20, height: 20, color: "#D8D8D8" }} />
            <Text style={{ fontSize: 16, marginLeft: 6 }}> Pusat Bantuan  </Text>
            <Text style={{ fontSize: 16, }}> Pusat Bantuan  </Text>
            <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 95 }} />
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Text style={{ color: '#888' }}>Kami siap membantu anda</Text>
          </View>

          <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
            <Icons name="newspaper" size={15} style={{ width: 20, height: 20, color: "#D8D8D8" }} />
            <Text style={{ fontSize: 16, marginLeft: 6 }}> Newsletter  </Text>
            <Icon name="right" size={20} color="#F97432" onPress={this.goBack} style={{ paddingVertical: 5, marginLeft: 240 }} />
          </View>
          <View style={{ flexDirection: 'row', marginLeft: 50 }}>
            <Text style={{ color: '#888' }}>Berlangganan di newsletter</Text>
          </View>

          <View style={style.shado, { backgroundColor: "#FAFAFA", height: 70, marginTop: 16, }}>
            <View style={{ alignItems: "center", flex: 1, paddingVertical: 20 }}>
              <Text style={{ fontSize: 15, }}>Version 2.10.0</Text>
            </View>
          </View>
        </Content>
      </>
    )
  }
}

const style = StyleSheet.create({
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
export default Profile
