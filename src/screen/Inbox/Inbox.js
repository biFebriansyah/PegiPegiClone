import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Inbox extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Inbox Here </Text>
            </View>
        )
    }
}

export default Inbox
