import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from 'native-base';
import Color from '../../global/style/Color';
import { SliderBox } from 'react-native-image-slider-box';

export class Inbox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            images: [
                require('../../global/asset/Promo1.jpg'),
                require('../../global/asset/Promo2.jpg'),
                require('../../global/asset/Promo3.jpg'),
                require('../../global/asset/Promo4.jpg'),
                require('../../global/asset/Promo5.jpg'),
                require('../../global/asset/Promo6.jpg'),
            ]
        }
    }

    onLayout = e => {
        this.setState({
            width: e.nativeEvent.layout.width
        });
    };

    render() {
        return (
            <>
                <Header androidStatusBarColor={Color.primary} style={{ backgroundColor: Color.primary, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Inbox</Text>
                </Header>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text> Inbox Here </Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.container} onLayout={this.onLayout}>
                        <SliderBox
                            images={this.state.images}
                            dotColor="#000"
                            ImageComponent ={
                                <Image  />
                            }
                            onCurrentImagePressed={index =>
                                console.warn(`image ${index} pressed`)
                            }
                            parentWidth={this.state.width}
                        />
                    </View>
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 294,
        height: 158,
        borderRadius: 10
    }
});

export default Inbox
