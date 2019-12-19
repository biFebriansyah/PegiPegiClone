import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Header, Form, Item, Label, Input, Content, Text} from 'native-base';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {Button} from 'react-native-paper';
import Color from '../../global/style/Color';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstColor: '#bbb',
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState({firstColor: Color.primary});
  }

  render() {
    return (
      <>
        <Header
          androidStatusBarColor={Color.primary}
          style={{ backgroundColor: Color.primary, alignItems: 'center',  justifyContent: 'flex-start' }}>
          <TouchableOpacity>
            <IconFeather name="x" size={24} color={'white'} />
          </TouchableOpacity>
          <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
            Masuk
          </Text>
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label style={{color: this.state.firstColor}}>Email</Label>
              <Input onPress={this.changeColor} />
            </Item>

            <Item floatingLabel>
              <Label style={{color: this.state.firstColor}}>Password</Label>
              <Input />
            </Item>

            <TouchableOpacity>
              <Button
                style={{
                  backgroundColor: Color.primary,
                  alignItems: 'center',
                  marginTop: 20,
                  borderRadius: 0,
                  width: 340,
                  marginHorizontal: 10,
                  paddingVertical: 5,
                }}>
                <Text style={{color: 'white'}}> LOGIN </Text>
              </Button>
            </TouchableOpacity>
          </Form>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <TouchableOpacity>
              <Text style={{color: Color.primary, fontWeight: 'bold'}}>
                {' '}
                Lupa Password?{' '}
              </Text>
            </TouchableOpacity>
            <Text style={{fontSize: 18, color: '#a5a5a5', bottom: 5}}> | </Text>
            <TouchableOpacity>
              <Text style={{color: Color.primary, fontWeight: 'bold'}}>
                {' '}
                Belum memiliki akun?{' '}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{alignItems: 'center', marginTop: 25, flexDirection: 'row'}}>
            <Text style={{color: '#a5a5a5'}}>
              - - - - - - - - - - - - - - - - - - -{' '}
            </Text>
            <Text style={{fontFamily: 'Roboto'}}> ATAU </Text>
            <Text style={{color: '#a5a5a5'}}>
              - - - - - - - - - - - - - - - - - - - - -
            </Text>
          </View>

          <TouchableOpacity
            iconLeft
            style={{
              backgroundColor: '#4267B2',
              borderRadius: 5,
              width: 340,
              marginHorizontal: 10,
              paddingVertical: 0,
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              marginTop: 25,
            }}>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <IconEntypo color={'#fff'} size={40} name="facebook" />
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
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
