import React, {Component} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  Header,
  Form,
  Item,
  Label,
  Input,
  Content,
  Text,
  CheckBox,
  Picker,
} from 'native-base';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {Button} from 'react-native-paper';
import Color from '../../global/style/Color';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
        checkbox: false,
        colorcheck: '#bbb',
        colorpassname: '#bbb',
        nama: '',
      selected: 'key0',
    };
    this.checkedChange = this.checkedChange.bind(this);
    this.changeColorFocus = this.changeColorFocus.bind(this);
    this.changeColorBlur = this.changeColorBlur.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
    this.goBacks = this.goBacks.bind(this);
  }

  checkedChange() {
      if (!this.state.checkbox) {
        this.setState({
            checkbox: true,
            colorcheck: Color.primary
            })
      } else {
        this.setState({
            checkbox: false,
            colorcheck: '#bbb'
            })
      }
  }

  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }

  changeColorFocus(name) {
    if (name === 'passname') {
      this.setState({colorpassname: Color.primary});
    }
  }

  changeColorBlur(name) {
    if (name === 'passname') {
      if (!this.state.passname) {
        this.setState({colorpassname: '#bbb'});
      }
    }
  }

  goBacks() {
    const {goBack} = this.props.navigation;
    goBack();
  }

  loginSubmit() {
    console.log(this.state.passname);
  }

  render() {
    return (
      <>
        <Header
          androidStatusBarColor={Color.primary}
          style={{
            backgroundColor: Color.primary,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <TouchableOpacity>
            <IconFeather
              name="x"
              size={24}
              color={'#eaeaea'}
              onPress={this.goBacks}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#FFF',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
            }}>
            Data Penumpang
          </Text>
        </Header>

        <Content>
          <View style={{ backgroundColor: '#eaeaea', height: 50, justifyContent: 'center', paddingLeft: 10 }}>
            <Text style={{color: '#888', fontFamily: 'Roboto-Bold', fontSize: 14}}>
              {' '}
              Data Penumpang{' '}
            </Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingVertical: 20, paddingHorizontal: 20}}>
            <CheckBox checked={this.state.checkbox} onPress={this.checkedChange} color={this.state.colorcheck} />
            <Text style={{ color: '#888', fontFamily: 'Roboto', fontSize: 14, paddingLeft: 20}}>
              Samakan dengan data pemesan
            </Text>
          </View>

          <View style={{paddingHorizontal: 10}}>
            <Text style={{fontSize: 14, color: '#888'}}>Titel</Text>
            <Form>
              <Item picker>
                <Picker
                mode="dropdown"
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Tuan" value="key0" />
                  <Picker.Item label="Nyonya" value="key1" />
                  <Picker.Item label="Nona" value="key2" />
                </Picker>
              </Item>
            </Form>
          </View>

          <View style={{paddingHorizontal: 10}}>
            <Item
              floatingLabel
              style={{marginTop: 18, borderColor: this.state.colorpassname}}>
              <Label style={{color: this.state.colorpassname, fontSize: 12}}>
                Nama Penumpang
              </Label>
              <Input
                onFocus={() => this.changeColorFocus('passname')}
                onBlur={() => this.changeColorBlur('passname')}
                onChangeText={passname => this.setState({passname})}
                style={{borderBottomColor: 'red'}}
              />
            </Item>
            <Text style={{fontSize: 14, color: '#888'}}> Sesuai kartu identitas</Text>
          </View>

          <View style={{ backgroundColor: '#eaeaea', height: 50, justifyContent: 'center', paddingLeft: 10, marginTop: 20}}>
            <Text style={{ color: '#888', fontFamily: 'Roboto-Bold'}}> Fasilitas </Text>
          </View>

          <Text style={{fontSize: 20, paddingTop: 20, paddingLeft: 10, fontFamily: 'Roboto-Bold'}}>
            {' '}
            Bagasi Pesawat{' '}
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20, paddingLeft: 10 }}>
            <Text style={{fontFamily: 'Roboto'}}> Pesawat pergi</Text>
            <Form style={{padding: 0}}>
              <Picker 
                mode="dropdown"
                style={{width: 85, height: 10}}
                //   selectedValue={this.state.selected}
                //   onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="20 Kg (gratis)" value="key0" />
              </Picker>
            </Form>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
            <Text style={{fontSize: 14, color: '#888', fontFamily: 'Roboto'}}>
              {' '}
              Garuda Indonesia GA 306
            </Text>
            <Text style={{fontFamily: 'Roboto', fontSize: 14, color: '#888', paddingRight: 21}}> Gratis </Text>
          </View>

        <View style={{backgroundColor:'#eaeaea', paddingTop: 10, marginTop: 20, height: 110}}>
          <Button
            onPress={this.loginSubmit}
            style={{ backgroundColor: Color.primary, alignContent: 'center', marginTop: 20, marginHorizontal: 15, borderRadius: 0, width: '90%', paddingVertical: 5}}>
            <Text style={{color: 'white'}}> simpan </Text>
          </Button>
         </View>
        </Content>
      </>
    );
  }
}

export default Login;
