import React, { useState } from 'react'
import { Text, View, KeyboardAvoidingView, StyleSheet, ToastAndroid, Dimensions, TouchableOpacity, TextInput, Picker } from 'react-native'
import { Checkbox } from 'react-native-paper';
import GlobalStyles from '../../Styles/MainStyles';
import AsyncStorage from '@react-native-community/async-storage';


export default function LeaveApply (){
    const [isSelected, setSelection] = useState(false);
    const [isSelected1, setSelection1] = useState(false);
    const [pickerValue, setPickerValue] = useState("Casual Leave");
    const [text, onChangeText] = useState('');

  const submit =  async  ()  => {
 console.log("reason  " + text) 
        var DATA =   JSON.stringify({
               leave_from_date:"2020:02:06",
               leave_from_time:"11:05",
               leave_to_date  :"2020:02:08",
               leave_to_time  :"4:00PM",
               leave_no_days  :"2 DAYS",
               leave_reason   : pickerValue
           })
   
            console.log("Submitted")
            const User_Authkey = await AsyncStorage.getItem('User_Authkey');
            const emp_id = await AsyncStorage.getItem('emp_id');
            console.log("Token CheckIn LeaveApply "+" user authkey "+ User_Authkey + " ID " + emp_id)
            return fetch('http://myworkday.nutantek.com/emp_applyforleave.php?emp_id='+emp_id ,{
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: User_Authkey,
              },
               body: DATA
   
          }).then((response) => response.text())
          .then((responseJson) => {
            console.log(responseJson)
                   if(responseJson == `1"recived"`){
                    ToastAndroid.show('Submitted Successfuly', ToastAndroid.LONG);
                   }
                   else{
                    ToastAndroid.show('Try Again', ToastAndroid.LONG);
                   }
        })
              .catch((error) => {
                  console.error(error);
              });
          
       }

    return(
         <View>
                <KeyboardAvoidingView>
                    <View >
                        <View style={styles.row}>
                            <View style={styles.row}>
                                <Text style={styles.text}>Half Day</Text>
                                <Checkbox
                                    status={isSelected ? 'checked' : 'unchecked'}
                                    onPress={setSelection}
                                />
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.text}>Half Day</Text>
                                <Checkbox
                                    status={isSelected1 ? 'checked' : 'unchecked'}
                                    // onPress={() => setSelection1 ? 'unchecked' : 'checked'}
                                />
                            </View>
                        </View>
                        <View style={{marginLeft:20}}>
                        <View style={styles.row}>
          <Text style={{fontSize:18}}>Leave Type :-</Text>
          <Picker
        selectedValue={pickerValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setPickerValue(itemValue)}
      >
        <Picker.Item label="Casual Leave" value="Casual Leave" />
          <Picker.Item label="Personal Leave" value="Personal Leave" />
          <Picker.Item label="Sick Leave" value="Sick Leave" />
          <Picker.Item label="Business Leave" value="Business Leave" />
      </Picker>
      </View>
                        </View>
                        <Text style={styles.text}>Notes :</Text>
                        <TextInput
                            style={styles.textinput}
                            multiline={true}
                            onChangeText={text => onChangeText(text)}
                            value={text}
                            textAlignVertical="top"
                            type='outlined'
                        />
                        
                        <View style={GlobalStyles.center}>
                            <TouchableOpacity style={styles.touchable} onPress={submit}>
                                <Text style={styles.touchabletext}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
    )
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