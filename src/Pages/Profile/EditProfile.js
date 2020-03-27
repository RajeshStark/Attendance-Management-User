import React, { Component } from 'react'
import { Text, View, Image, Dimensions, StyleSheet,ScrollView, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import { Appbar, IconButton, Colors, TextInput } from 'react-native-paper'


export default class EditProfile extends Component {
    state = {
        text: ''
    };

    render() {

        return (
        <ScrollView>
            <View>
                <Appbar.Header style={{ backgroundColor: '#fff' }}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Appbar.Content
                        title="Edit Profile"
                    />

                </Appbar.Header>
                <View style={styles.mainView}>
                    <View style={{ margin: 10 }}>
                        <Image
                            source={{ uri: 'https://i.ya-webdesign.com/images/funny-png-avatar-2.png' }}
                            style={{ marginTop: 30, height: 100, width: 100 }}
                        />
                        <IconButton
                            icon="plus"
                            color={Colors.red500}
                            style={{ marginLeft: 60, marginTop: -30, backgroundColor: "#fff", }}
                            size={30}
                            onPress={() => console.log('Pressed')}
                        />
                    </View>
                </View>
                <KeyboardAvoidingView>
                    <Text style={{ fontSize: 18, textAlign: "center" }}>Edit Your Profile Details</Text>
                    <View style={styles.box}>
                        <TextInput
                            label='Personal Email'
                            value={this.state.text}
                            style={styles.textinput}
                            onChangeText={text => this.setState({ text })}
                        />
                          <TextInput
                            label='Mobile Number'
                            value={this.state.text}
                            style={styles.textinput}
                            onChangeText={text => this.setState({ text })}
                        />

                      
                            <TouchableOpacity style={styles.touchable}>
                                <Text style={styles.touchabletext}>Submit</Text>
                            </TouchableOpacity>
                   
                    </View>
                </KeyboardAvoidingView>
            </View>
        </ScrollView>
        )
    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    mainView: {
        width: (DEVICE_WIDTH),
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        margin: 10
    },
    iconbutton: {
        marginRight: 50,
    },
    button: {
        margin: 10
    },
    box: {
        alignItems: 'center',
        padding: 10
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
        padding: 10
    },
    textinput: {
        width: (DEVICE_WIDTH) - 40,
        margin:20
    },
    touchable: {
        width: (DEVICE_WIDTH) - 20,
        justifyContent: 'center',
        backgroundColor: '#2B65EC',
        alignItems: 'center',
        margin: 10,
        padding:10,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.8,
        },
        shadowOpacity: 0.15,
        shadowRadius: 1.01,
        elevation: 1,

    },
touchabletext: {
    fontSize: 18,
    marginLeft: 10,
   
    color: '#fff',
   
},
});   