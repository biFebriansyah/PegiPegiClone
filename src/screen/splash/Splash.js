import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, } from 'react-native';

class Splash extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        setTimeout(() =>{
            this.props.navigation.navigate('navi')
        }, 1000)
    }

    render() {
        return (
            <>
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../Global/asset/Image/Splash.jpg')} style={{ width: '100%', height: '200%', resizeMode: 'contain', }} />
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({
  
})




export default Splash
