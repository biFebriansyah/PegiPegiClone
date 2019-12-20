import React, { Component } from 'react';
import { StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import {
  Container,
  Header,
  Body,
  Left,
  Right,
  Content,
  Button,
  Card,
  CardItem,
  Text,
  Title,
  Icon, View,
} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Color from '../../global/style/Color';
import CalendarPicker from 'react-native-calendar-picker';

class Plane extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pp: null,
      modalPassenger: null,
      modalDeparture: null,
      calendarDeparture: null,
      calendarReturn: null,
      adult: null,
      child: null,
      baby: null
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      pp: false,
      modalPassenger: false,
      modalDeparture: false,
      adult: 1,
      child: 0,
      baby: 0
    });
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

    const { calendarDeparture, calendarReturn } = this.state;
    const date = new Date();
    const minDate = date.setDate(date.getDate());
    const startDate = calendarDeparture ? calendarDeparture.toString().substr(4, 12) : '';
    const endDate = calendarReturn ? calendarReturn.toString().substr(4, 12) : '';

    return (
      <Container>
        <Header
          androidStatusBarColor={Color.primary}
          style={{
            backgroundColor: Color.lightPrimary,
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Left
            style={{
              flex: 0.2,
            }}
          >
            <Button
              iconLeft
              transparent
            >
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body
            style={{
              flex: 1,
            }}
          >
            <Title>
              Pesan Tiket Pesawat
            </Title>
          </Body>
        </Header>
        <Content
          style={{
            backgroundColor: Color.lightPrimary,
          }}
          padder
        >
          <Card
            style={{
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 10,
            }}
          >
            <CardItem
              bordered
              style={{
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <Left>
                <Text
                  style={{
                    color: Color.DarkAcent,
                  }}
                >
                  Pulang Pergi?
                </Text>
              </Left>
              <Right>
                <Switch
                  trackColor={{
                    true: Color.primary,
                  }}
                  thumbColor={Color.primary}
                  value={this.state.pp}
                  onValueChange={
                    async value => {
                      await this.setState({
                        pp: value,
                      });
                    }}
                />
              </Right>
            </CardItem>
          </Card>
          <Card
            style={{
              marginTop: -6,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            }}
          >
            <TouchableOpacity
              onPress={
                () => {
                  this.setState({
                    modalDeparture: true,
                  });
                }
              }
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardItem
                bordered
                style={{
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}
              >
                <Body>
                  <Text
                    style={{
                      fontSize: 12,
                      color: Color.lightDark,
                    }}
                  >
                    Berangkat
                  </Text>
                  {
                    calendarDeparture !== null
                      ? <Text
                        style={{
                          fontSize: 13,
                        }}
                      >
                        {startDate}
                      </Text>
                      : null
                  }
                </Body>
                <Right>
                  {
                    calendarReturn !== null
                      ? <>
                        <Text
                          style={{
                            fontSize: 12,
                            color: Color.lightDark,
                          }}
                        >
                          Pulang
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                          }}
                        >
                          {endDate}
                        </Text>
                      </>
                      : null
                  }
                </Right>
              </CardItem>
            </TouchableOpacity>
            <CardItem
              bordered
              style={{
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    modalPassenger: true,
                  });
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    color: Color.lightDark,
                  }}
                >
                  Penumpang
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                  }}
                >
                  {this.state.adult} Dewasa,&nbsp;
                  {this.state.child} Anak,&nbsp;
                  {this.state.baby} Bayi
                </Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                  block
                  small
                  style={{
                    backgroundColor: Color.primary,
                    borderBottomRightRadius: 8,
                    borderBottomLeftRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                  }}
                  onPress={
                    () => this.props.navigation.navigate('tiket')
                  }
                >
                  <Title>
                    Cari Tiket
                  </Title>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Modal
          isVisible={this.state.modalPassenger}
          onBackdropPress={
            () => this.setState({
              modalPassenger: false,
            })
          }
        >
          <Container>
            <Grid>
              <Col>
                <Text>
                  Dewasa
                </Text>
              </Col>
              <Col>
                <Text>
                  Anak
                </Text>
              </Col>
              <Col>
                <Text>
                  Bayi
                </Text>
              </Col>
            </Grid>
          </Container>
        </Modal>
        <Modal
          isVisible={this.state.modalDeparture}
          onBackdropPress={
            () => this.setState({
              modalDeparture: false,
            })
          }
        >
          <Container>
            <Header
              androidStatusBarColor={Color.primary}
              style={{
                backgroundColor: Color.lightPrimary,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              <Left
                style={{
                  flex: 0.2,
                }}
              >
                <Button
                  iconLeft
                  transparent
                  onPress={
                    () => {
                      this.setState({
                        modalDeparture: false,
                      });
                    }
                  }
                >
                  <Icon name='arrow-back' />
                </Button>
              </Left>
              <Body
                style={{
                  flex: 1,
                }}
              >
                <Title>
                  Calendar
                </Title>
              </Body>
            </Header>
            <Content>
              <Card
                style={{
                  marginLeft: 10,
                  marginRight: 10,
                }}
              >
                <CardItem
                  header
                  bordered
                >
                  <CalendarPicker
                    width={290}
                    startFromMonday={true}
                    allowRangeSelection={true}
                    minDate={minDate}
                    selectedStartDate={this.state.calendarDeparture}
                    selectedEndDate={this.state.calendarReturn}
                    todayBackgroundColor={Color.lightPrimary}
                    selectedDayColor={Color.primary}
                    onDateChange={this.onDateChange}
                  />
                </CardItem>
                <CardItem>
                  <Body>
                    <Button
                      block
                      small
                      style={{
                        backgroundColor: Color.primary,
                        borderBottomRightRadius: 8,
                        borderBottomLeftRadius: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                      onPress={
                        () => this.setState({
                          modalDeparture: false,
                        })
                      }
                    >
                      <Title>
                        Simpan
                      </Title>
                    </Button>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>
        </Modal>
      </Container>
    );
  }
}

export default Plane;
