import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Header, Item, Label, Input, Content, Text } from 'native-base';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-paper';
import Color from '../../global/style/Color';

export class Login extends Component {
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

    if (name === 'username') {
      if (!this.state.username) {
        this.setState({ colorUsername: "#bbb" })
      }
    }
    if (name === 'password') {
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
            Masuk
          </Text>
        </Header>

        <Content>
          <View style={{ paddingHorizontal: 20 }}>
            <Item floatingLabel style={{ marginTop: 18, borderColor: this.state.colorUsername }}>
              <Label style={{ color: this.state.colorUsername, fontSize: 12 }}>Email</Label>
              <Input
                onFocus={() => this.changeColorFocus('username')}
                onBlur={() => this.changeColorBlur('username')}
                onChangeText={(username) => this.setState({ username })}
                style={{ borderBottomColor: 'red' }}
              />
            </Item>

            <Item floatingLabel style={{ marginTop: 15, borderColor: this.state.colorPassword }}>
              <Label style={{ color: this.state.colorPassword, fontSize: 12 }}>Password</Label>
              <Input
                onFocus={() => this.changeColorFocus('password')}
                onBlur={() => this.changeColorBlur('password')}
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
              <Text style={{ color: 'white' }}> LOGIN </Text>
            </Button>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity>
                <Text style={{ color: Color.primary, fontWeight: 'bold' }}>
                  {' '}
                  Lupa Password?{' '}
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 18, color: '#a5a5a5', bottom: 5 }}> | </Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('register')}>
                <Text style={{ color: Color.primary, fontWeight: 'bold' }}>
                  {' '}
                  Belum memiliki akun?{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{ alignItems: 'center', marginTop: 25, flexDirection: 'row', paddingHorizontal: 10 }}>
            <Text style={{ color: '#a5a5a5' }}>
              - - - - - - - - - - - - - - - - - - -{' '}
            </Text>
            <Text style={{ fontFamily: 'Roboto' }}> ATAU </Text>
            <Text style={{ color: '#a5a5a5' }}>
              - - - - - - - - - - - - - - - - - - - -
            </Text>
          </View>

          <TouchableOpacity
            iconLeft
            style={{
              backgroundColor: '#4267B2',
              borderRadius: 5,
              marginHorizontal: 10,
              paddingVertical: 0,
              marginTop: 25,
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40 }}>
              <IconEntypo color={'#fff'} size={30} name="facebook" style={{ position: 'absolute', left: 0, marginLeft: 5 }} />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  marginVertical: 5,
                  marginLeft: 30,
                }}>
                Login dengan Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </Content>
      </>
    );
  }
}

export default Login;
