import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Header} from 'native-base';
import Color from '../../global/style/Color';
import IconAnt from 'react-native-vector-icons/AntDesign';
import TicketCard from '../../components/TicketCard/TicketCard'


export class TiketPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    const {goBack} = this.props.navigation;
    goBack();
  }

  render() {
    const shadowOpt = {
      width: 348,
      height: 151,
      color: '#333',
      border: 2,
      radius: 5,
      opacity: 0.2,
      x: 0,
      y: 5,
      style: {marginVertical: 5, marginHorizontal: 6},
    };
    return (
      <>
        <Header
          androidStatusBarColor={Color.status_second}
          style={style.Header}>
          <IconAnt
            name="arrowleft"
            size={24}
            color="#FFE0D5"
            onPress={this.goBack}
            style={style.Icon}
          />
          <Text style={{color: '#FFF', fontSize: 20, fontWeight: 'bold'}}>
            Titel Pesanan Here
          </Text>
        </Header>

        <View style={{flex: 1}}>
            <TicketCard />
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
