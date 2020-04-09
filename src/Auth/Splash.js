import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default class Splash extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#FFF', height:DEVICE_HEIGHT, alignItems:'center', justifyContent: 'center', }}>
                <Image
                    source={require('../assets/logoNutantek.png')}
                    style={{ width: (DEVICE_WIDTH) - 20, height: (DEVICE_WIDTH) / 5 }}
                />
            </View>
        )
    }
}
