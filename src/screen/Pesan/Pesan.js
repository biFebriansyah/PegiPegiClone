import React, { Component } from 'react'
import { Text, View, Button, Dimensions } from 'react-native';
import { Header } from 'native-base';
import Color from '../../global/style/Color';

export class Pesan extends Component {

    render() {
        return (
            <>
                <Header androidStatusBarColor={Color.primary} style={{ backgroundColor: Color.primary, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Pesanan</Text>
                </Header>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text> pesan here </Text>
                    <Button onPress={() => this.props.navigation.navigate('tiket')} title="Press Me">
                        test
                    </Button>
                </View>
            </>
        )
    }
}

export default Pesan
