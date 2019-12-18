import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

export class test extends Component {
    render() {
        return (
            <View style={{ width: 165, height: 116, borderRadius: 10 }}>
                <Image source={require('./src/global/asset/hero1.jpg')} style={{ width: null, height: null, resizeMode: 'cover', flex: 1 }} />
            </View>
        )
    }
}


export default test
