import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { Header } from 'native-base';
import Color from '../../global/style/Color';

export class Profilee extends Component {
    render() {
        return (
            <>
                <Header androidStatusBarColor={Color.primary} style={{ backgroundColor: Color.primary, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ color: '#FFF', fontSize: 20, fontWeight: 'bold' }}>Profile</Text>
                </Header>
                
                <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                    
                    <View style={{ height: 130, backgroundColor: '#fff', paddingHorizontal: 10, paddingVertical: 20}}>
                        
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <View style={{width: 50, height: 50}}>
                                <Image source = {require('../../../Global/asset/Image/components/budisetiawan.jpg')} style={{width: null, height: null, flex:1, resizeMode: 'cover', borderRadius: 25 }} />
                            </View>

                            <View style={{flexDirection: "column"}}>
                                <Text>Budi Setiawan</Text>
                                <Text style={{color: '#aaa'}}>budisetiawan@buset.com</Text>
                            </View>
                        
                            <View style={{paddingVertical: 10}}>
                                <Text style={{ color: Color.primary}}>UBAH</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{color: '#bbb'}}>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
                        </View>

                        <View style={{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10}}>
                            <View style={{ width: 20, height: 20 }}>
                                <Image source = {require('../../../Global/asset/Image/components/PePePoin.png')} style={{width: null, height: null, flex:1, resizeMode: 'cover' }} />
                            </View>
                                <Text style={{paddingLeft: 10}}> 0 poin</Text>
                        </View>

                    </View>

                </View>
            </>
        )
    }
}

export default Profilee;
