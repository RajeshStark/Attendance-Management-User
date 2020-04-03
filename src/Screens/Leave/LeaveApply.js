import React, { Component, useState } from 'react'
import { Text, View, KeyboardAvoidingView, StyleSheet, Dimensions, TouchableOpacity, TextInput, Picker } from 'react-native'
import { Checkbox } from 'react-native-paper';
import GlobalStyles from '../../Styles/MainStyles';


 function PickerComponent() {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
      <View style={styles.row}>
          <Text style={{fontSize:18}}>Leave Type :-</Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Casual Leave" value="CL" />
          <Picker.Item label="Personal Leave" value="PL" />
          <Picker.Item label="Sick Leave" value="SL" />
          <Picker.Item label="Business Leave" value="BL" />
        </Picker>
      </View>
    );
  }

export default class LeaveApply extends Component {

    state = {
        Fchecked: false,
        Tchecked: false,
    };

    render() {
        const { Fchecked, Tchecked } = this.state;
        return (
            <View>
                <KeyboardAvoidingView>
                    <View >
                        <View style={styles.row}>
                            <View style={styles.row}>
                                <Text style={styles.text}>Half Day</Text>
                                <Checkbox
                                    status={Fchecked ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ Fchecked: !Fchecked }); }}
                                />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.text}>Half Day</Text>
                                <Checkbox
                                    status={Tchecked ? 'checked' : 'unchecked'}
                                    onPress={() => { this.setState({ Tchecked: !Tchecked }); }}
                                />
                            </View>
                        </View>
                        <View style={{marginLeft:20}}><PickerComponent/></View>
                        <Text style={styles.text}>Notes :</Text>
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
        alignItems: 'center',
        justifyContent:'space-between',
        marginEnd:10
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
        padding: 10,
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
    picker:{
        height:50,
        width:(DEVICE_WIDTH)/2,
     
    },
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
})