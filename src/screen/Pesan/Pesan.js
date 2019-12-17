import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Pesan extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> pesan here </Text>
            </View>
        )
    }
}

export default Pesan
