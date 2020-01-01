import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { Header } from 'native-base';
import Color from '../../global/style/Color';
import IconAnt from 'react-native-vector-icons/AntDesign';
import TicketCard from '../../components/TiketCard/TiketCard';
import AsyncStorage from '@react-native-community/async-storage';


export class TiketPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      asal: {
        code: 'PLW',
        city: 'Palu'
      },
      tujuan: {
        code: 'JKT',
        city: 'Jakarta'
      }
    };
    this.goBack = this.goBack.bind(this);
    this.tiketOnPress = this.tiketOnPress.bind(this);

  }

  tiketOnPress() {
    this.props.navigation.navigate('formdata')
  }

  goBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  componentWillUnmount() {
    this.subs.forEach(sub => sub.remove());
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

  render() {
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

        <View style={{ flex: 1, alignItems: 'center' }}>
          <TicketCard asal={this.state.asal.code} tujuan={this.state.tujuan.code} press={this.tiketOnPress} />
        </View>
      </>
    );
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

export default TiketPlan;
