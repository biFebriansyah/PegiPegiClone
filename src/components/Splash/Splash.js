import React, { Component } from 'react';
import { View, Image } from 'react-native';

export class Splash extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('navi')
        }, 1000)
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../Global/asset/Image/components/Splash.jpg')} style={{ width: '100%', height: '200%', resizeMode: 'contain', }} />
            </View>
        )
    }
}

export default Splash
