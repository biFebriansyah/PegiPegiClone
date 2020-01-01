import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class Listbandara extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const data = {
            code: this.props.code,
            city: this.props.name
        }
        this.props.setTheData(data)
    }

    render() {
        const theWidth = Dimensions.get('window').width - 10
        const shadowOpt = {
            width: theWidth, height: 151, color: '#ffffff', border: 0, radius: 5, opacity: 0, x: 0, y: 0,
            style: { marginVertical: 5, marginHorizontal: 6, flex: 1 },
        };

        return (
            <>
                <TouchableOpacity onPress={this.handleClick}>
                    <View style={{ flex: 1, marginTop: 20 }}>
                        <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Roboto-Bold' }}>{this.props.name}, Indonesia </Text>
                                <Text style={{ color: '#888' }}>{this.props.code} - {this.props.airport} </Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ backgroundColor: "#F1F1F1", flexDirection: "row", alignItems: "center", borderRadius: 5, paddingHorizontal: 5, paddingVertical: 1 }} >
                                    <Icon name="location-city" size={28} color="#D9D9D9" />
                                    <Text style={{ fontSize: 12, marginLeft: 6, color: '#969696' }}>Kota</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
}

export default Listbandara
