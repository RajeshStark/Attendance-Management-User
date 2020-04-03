import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import ProfileDetails from './profiledetails';
import { ScrollView } from 'react-native-gesture-handler';
import RmDetails from './Rmdetails';
import { Button, IconButton } from 'react-native-paper';

export default class ProfileMain extends Component {
    render() {
        return (
            <ScrollView
             showsVerticalScrollIndicator={false}
            >
                <View>
                    <View style={styles.mainView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={{ uri: 'https://i.ya-webdesign.com/images/funny-png-avatar-2.png' }}
                                style={{ height: 100, width: 100 }}
                            />
                            <View style={{ justifyContent: 'space-evenly', marginLeft: 10 }}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                                    <Text style={{ fontSize: 18, color: '#fff' }}>Rajesh Sangapogu</Text>
                                    <IconButton icon='pencil' size={25} style={{marginLeft:30}} color="#fff" onPress={() => this.props.navigation.navigate('EditProfile')}/>
                                </View>
                                <Text style={{ fontSize: 16, color: '#fff' }}>React Native Developer</Text>
                                <Text style={{ fontSize: 16, color: '#fff' }}>Nutantek Solutions</Text>
                            </View>
                        </View>
                        <Button icon="settings" style={styles.button} mode="contained" onPress={() => this.props.navigation.navigate('Settings')}>
                            Settings
                        </Button>
                    </View>
                    <RmDetails />
                    <ProfileDetails />
                </View>
            </ScrollView>
        )
    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#2B65EC',
        width: (DEVICE_WIDTH),
        height: 180,
        justifyContent: 'center',
        paddingLeft: 10,
        
    },
    iconbutton: {
        marginRight: 50,
    },
    button: {
    margin:10
    }

});   