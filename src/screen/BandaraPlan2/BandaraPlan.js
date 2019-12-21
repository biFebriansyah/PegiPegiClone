import React, { Component } from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import { View, Header, Item, Input, Text } from 'native-base';
import Color from '../../global/style/Color';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconSe from 'react-native-vector-icons/Feather';
import Listbandara from '../../components/ListBandara/Listbandara';
import { get } from '../../utils/axios';
import { Content } from 'native-base';


export class BandaraPlan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
    this.goBack = this.goBack.bind(this);
    this.getData = this.getData.bind(this);
  }

  goBack() {
    const { goBack } = this.props.navigation;
    goBack();
  }

  async getData(data) {
    try {
      await AsyncStorage.setItem("Tujuan", JSON.stringify(data))
      const { goBack } = this.props.navigation;
      goBack();
    } catch (error) {
      console.warn(error)
    }
  }

  async componentDidMount() {
    const { data } = await get('/airport')
    this.setState({ data: data.payload })
  }

  render() {

    return (
      <>
        <Header
          androidStatusBarColor={Color.status_second}
          style={style.Header}>
          <IconAnt name="arrowleft" size={24} color="#FFE0D5" onPress={this.goBack} style={style.Icon} />
          <View>
            <Item style={{ borderRadius: 5, paddingHorizontal: 150, backgroundColor: "#E28D6E", paddingVertical: 20 }}>
              <Input style={{ color: "white", position: "absolute", fontSize: 15 }} placeholderTextColor="#EFCC9B" placeholder="Cari kota atau bandara..."></Input>
            </Item>
          </View>
          <IconSe name="search" style={style.IconSe} size={22} color="#FFE0D5" />
        </Header>
        <View style={{ flex: 1 }}>
          <Content>
            <View
              style={{
                backgroundColor: "#EAEAEA",
                width: "100%",
                paddingVertical: 19,
                paddingHorizontal: 15,
                flexDirection: "row",
                alignItems: "center"

              }}>
              <View >
              </View>
              <View style={{ flex: 1, marginLeft: 10 }} >
                <Text style={{ color: '#8D8D8D', fontSize: 13 }}>Kota atau Bandara Populer </Text>
              </View>

            </View>
            {
              this.state.data.map(post => {

                return <Listbandara key={post.id_airport} id={post.id_city} name={post.name_city} code={post.init_airport} airport={post.name_airport} setTheData={this.getData} />
              })
            }
          </Content>
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
  IconSe: {
    position: 'absolute',
    right: 0,
    marginRight: 20,
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

export default BandaraPlan;
