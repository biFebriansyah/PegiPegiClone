import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'

export class Pesawat extends Component {
    render() {
        return (
            <ImageBackground source={require('../../../Global/asset/Image/components/background.jpeg')} style={{ flex: 1 }}>
                <Text>Hellow</Text>
            </ImageBackground>
        )
    }
}

export default Pesawat
