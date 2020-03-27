import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import { RadioButton } from 'react-native-paper';
import GlobalStyles from '../../Styles/MainStyles';

export default class LeaveApply extends Component {

    state = {
        checked: 'first',
    };
    render() {
        const { checked } = this.state;
        return (
            <View>
                <KeyboardAvoidingView>
                    <View >
                        <View style={styles.row}>
                            <View style={styles.row}>
                                <Text style={styles.text}>Full Day</Text>
                                <RadioButton
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'first' }); }}
                                />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.text}>Half Day</Text>
                                <RadioButton
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ checked: 'second' }); }}
                                />
                            </View>
                        </View>
                        <Text style={styles.text}>Purpose :</Text>
                        <TextInput
                            style={styles.textinput}
                            multiline={true}
                            textAlignVertical="top"
                            type='outlined'
                        />

                        <View style={GlobalStyles.center}>
                            <TouchableOpacity style={styles.touchable}>
                                <Text style={styles.touchabletext}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
        padding: 10
    },

    textinput: {
        width: (DEVICE_WIDTH) - 20,
        marginLeft: 10,
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        borderRadius: 5
    },
    touchabletext: {
        fontSize: 18,
        marginLeft: 10,
       
        color: '#fff',
       
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
})