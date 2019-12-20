import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Header, CheckBox, Item, Label, Input, Content, Text } from 'native-base';
import IconFeather from 'react-native-vector-icons/Feather';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { Button } from 'react-native-paper';
import Color from '../../global/style/Color';

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {

            colorUsername: '#bbb',
            colorFullname: '#bbb',
            colorPassword: '#bbb',
            colorKonfirmasi: '#bbb',
            username: '',
            fullname: '',
            password: '',
            konfirmasi: '',
            checkbox: false,
            colorcheck: '#bbb',

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

    changeColorFocus(name) {
        if (name === 'username') {
            this.setState({ colorUsername: Color.primary })
        }
        if (name === 'fullname') {
            this.setState({ colorFullname: Color.primary })
        }
        if (name === 'password') {
            this.setState({ colorPassword: Color.primary })
        }
        if (name === 'konfirmasi') {
            this.setState({ colorKonfirmasi: Color.primary })
        }
    }

    changeColorBlur(name) {

        if (name === 'username') {
            if (!this.state.username) {
                this.setState({ colorUsername: "#bbb" })
            }
        }
        if (name === 'fullname') {
            if (!this.state.fullname) {
                this.setState({ colorFullname: "#bbb" })
            }
        }
        if (name === 'password') {
            if (!this.state.password) {
                this.setState({ colorPassword: "#bbb" })
            }
        }
        if (name === 'konfirmasi') {
            if (!this.state.konfirmasi) {
                this.setState({ colorKonfirmasi: "#bbb" })
            }
        }
    }

    goBacks() {
        const { goBack } = this.props.navigation;
        goBack()
    }

    loginSubmit() {
        console.log(this.state.username)
        console.log(this.state.fullname)
        console.log(this.state.password)
        console.log(this.state.konfirmasi)
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
                        Daftar
          </Text>
                </Header>

                <Content>
                    <View>
                        <Text style={{ textAlign: "center", paddingHorizontal: 10, color: '#666', paddingVertical: 10, fontFamily: 'Roboto-Bold' }}>Isi data diri Anda secara lengkap dan nikmati berbagai promo khusus member!</Text>
                        <Text style={{ textAlign: "center", paddingHorizontal: 20, color: '#999', fontFamily: 'Roboto' }}>Dapatkan juga PePePoin yang bisa Anda gunakan sebagai diskon untuk transaksi berikutnya.</Text>
                    </View>

                    <View style={{ paddingHorizontal: 20 }}>
                        <Item floatingLabel style={{ marginTop: 8, borderColor: this.state.colorUsername }}>
                            <Label style={{ color: this.state.colorUsername, fontSize: 16 }}>Email</Label>
                            <Input
                                onFocus={() => this.changeColorFocus('username')}
                                onBlur={() => this.changeColorBlur('username')}
                                onChangeText={(username) => this.setState({ username })}
                                style={{ borderBottomColor: 'red' }}
                            />
                        </Item>

                        <Item floatingLabel style={{ marginTop: 18, borderColor: this.state.colorFullname }}>
                            <Label style={{ color: this.state.colorFullname, fontSize: 16 }}>Nama lengkap (tanpa gelar)</Label>
                            <Input
                                onFocus={() => this.changeColorFocus('fullname')}
                                onBlur={() => this.changeColorBlur('fullname')}
                                onChangeText={(fullname) => this.setState({ fullname })}
                                style={{ borderBottomColor: 'red' }}
                            />
                        </Item>
                        <Text style={{ fontSize: 12, color: '#bbb' }}> Sesuai kartu identitas (KTP/SIM/paspor) </Text>

                        <Item floatingLabel style={{ marginTop: 5, borderColor: this.state.colorPassword }}>
                            <Label style={{ color: this.state.colorPassword, fontSize: 16 }}>Password</Label>
                            <Input
                                onFocus={() => this.changeColorFocus('password')}
                                onBlur={() => this.changeColorBlur('password')}
                                onChangeText={(password) => this.setState({ password })}
                            />
                        </Item>
                        <Text style={{ fontSize: 12, color: '#bbb' }}> 6-20 karakter mengandung huruf dan angka </Text>

                        <Item floatingLabel style={{ marginTop: 5, borderColor: this.state.colorKonfirmasi }}>
                            <Label style={{ color: this.state.colorKonfirmasi, fontSize: 16 }}>Konfirmasi Password</Label>
                            <Input
                                onFocus={() => this.changeColorFocus('konfirmasi')}
                                onBlur={() => this.changeColorBlur('konfirmasi')}
                                onChangeText={(konfirmasi) => this.setState({ konfirmasi })}
                            />
                        </Item>

                        <View style={{ flexDirection: 'row', paddingVertical: 20, marginTop: 20, right: 10 }}>
                            <CheckBox checked={this.state.checkbox} onPress={this.checkedChange} color={this.state.colorcheck} />
                            <View style={{ flexDirection: 'row', bottom: 5 }}>
                                <Text style={{ color: '#333', fontFamily: 'Roboto', fontSize: 12, paddingLeft: 20 }}>
                                    Saya setuju dengan
                </Text>
                                <Text style={{ color: Color.primary, fontFamily: 'Roboto', fontSize: 12, paddingLeft: 5 }}>
                                    Kebijakan Privasi
                </Text>
                                <Text style={{ color: '#333', fontFamily: 'Roboto', fontSize: 12, paddingLeft: 5 }}>
                                    dan
                </Text>
                                <Text style={{ color: Color.primary, fontFamily: 'Roboto', fontSize: 12, paddingLeft: 5 }}>
                                    Ketentuan
                </Text>
                            </View>
                        </View>
                        <View >
                            <View style={{ flexDirection: 'row', bottom: 30 }}>
                                <Text style={{ color: Color.primary, fontFamily: 'Roboto', fontSize: 12, paddingLeft: 30 }}>
                                    Penggunaan
                </Text>
                                <Text style={{ color: '#333', fontFamily: 'Roboto', fontSize: 12, paddingLeft: 5 }}>
                                    PegiPegi
                </Text>
                            </View>
                        </View>

                        <Button onPress={this.loginSubmit}
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
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginTop: 20,
                            }}>
                            <Text style={{ color: '#333' }}>
                                {' '}
                                Sudah memiliki akun?{' '}
                            </Text>
                            <Text style={{ color: Color.primary, fontWeight: 'bold' }}>Masuk</Text>
                            <Text style={{ color: '#333' }}>
                                {' '}
                                di sini{' '}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{ alignItems: 'center', marginTop: 25, flexDirection: 'row', paddingHorizontal: 5 }}>
                        <Text style={{ color: '#a5a5a5' }}>
                            - - - - - - - - - - - - - - - - - - - -{' '}
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
                            marginBottom: 25
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
                                Register dengan Facebook
              </Text>
                        </View>
                    </TouchableOpacity>
                </Content>
            </>
        );
    }
}

export default Register;
