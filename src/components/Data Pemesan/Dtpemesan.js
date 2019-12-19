import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Header, Form, Item, Label, Input, Content, Text } from 'native-base';
import IconFeather from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native-paper';
import Color from '../../global/style/Color';

export class Dtpemesan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorUsername: '#bbb',
      colorPassword: '#bbb',
      username: '',
      password: ''
    };
    this.changeColorFocus = this.changeColorFocus.bind(this);
    this.changeColorBlur = this.changeColorBlur.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.goBacks = this.goBacks.bind(this);
  }

  changeColorFocus(name) {
    if (name === 'username') {
      this.setState({ colorUsername: Color.primary })
    }
    if (name === 'password') {
      this.setState({ colorPassword: Color.primary })
    }
  }

  changeColorBlur(name) {

    if (name === 'nama pemesan') {
        if (!this.state.username) {
          this.setState({ colorUsername: "#bbb" })
        }
      }
    if (name === 'nomor telepon') {
      if (!this.state.username) {
        this.setState({ colorUsername: "#bbb" })
      }
    }
    if (name === 'email') {
      if (!this.state.password) {
        this.setState({ colorPassword: "#bbb" })
      }
    }
  }

  goBacks() {
    const { goBack } = this.props.navigation;
    goBack()
  }

  loginSubmit() {
    console.log(this.state.username)
    console.log(this.state.password)
  }


  render() {
    return (
      <>
        <Header
          androidStatusBarColor={Color.primary}
          style={{ backgroundColor: Color.primary, alignItems: 'center', justifyContent: 'flex-start' }}>
          <TouchableOpacity>
            <IconFeather name="x" size={24} color={'white'} onPress={this.goBacks} />
          </TouchableOpacity>
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold', marginLeft: 20 }}>
            Data Pemesan
          </Text>
        </Header>

        <Content>
            <View
           
              style={{
                backgroundColor: "#898989",
                width: "100%",
                paddingVertical: 19,
                paddingHorizontal:15,
                flexDirection:"row",
                alignItems:"center"

              }}> 
              <View >
              <Icons name="exclamationcircleo" size={18} color="white"  />
              </View>
              <View style={{flex:1, marginLeft:20}} >
              <Text style={{color: 'white' ,fontSize: 13}}>Semua informasi terkait pemesanan ini akan dikirimkan ke kontak berikut </Text>
            </View>
            
            </View>
          <View style={{ paddingHorizontal: 20 }}>
            <Item floatingLabel style={{ marginTop: 18, borderColor: this.state.colorUsername }}>
              <Label style={{ color: this.state.colorUsername, fontSize: 12 }}>Nama pemesan</Label>
              <Input
                onFocus={() => this.changeColorFocus('nama pemesan')}
                onBlur={() => this.changeColorBlur('nama pemesan')}
                onChangeText={(username) => this.setState({ username })}
                style={{ borderBottomColor: 'red' }}
              />
            </Item>

            <Item floatingLabel style={{ marginTop: 15, borderColor: this.state.colorPassword }}>
              <Label style={{ color: this.state.colorPassword, fontSize: 12 }}>Nomor Telepon</Label>
              <Input
                onFocus={() => this.changeColorFocus('nomor telepon')}
                onBlur={() => this.changeColorBlur('nomor telepon')}
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>

            <Item floatingLabel style={{ marginTop: 15, borderColor: this.state.colorPassword }}>
              <Label style={{ color: this.state.colorPassword, fontSize: 12 }}>Email</Label>
              <Input
                onFocus={() => this.changeColorFocus('email')}
                onBlur={() => this.changeColorBlur('email')}
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>

            <Button onPress={this.loginSubmit}
              style={{
                backgroundColor: Color.primary,
                alignItems: 'center',
                marginTop: 20,
                borderRadius: 0,
                width: "100%",
                paddingVertical: 5,
              }}>
              <Text style={{ color: 'white' }}> Simpan </Text>
              <Text style={{ color: 'white' }}> Simpan </Text>
            </Button>
          </View>
        
        </Content>
      </>
    );
  }
}

export default Dtpemesan;
