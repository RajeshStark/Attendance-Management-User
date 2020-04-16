import React, { useEffect, useState } from 'react'
import { Text, View, TextInput, TouchableOpacity, ToastAndroid, Alert } from 'react-native'
import { Appbar, Button,Dialog, Portal} from 'react-native-paper'
import styles from './DataStyles';
import AsyncStorage from '@react-native-community/async-storage';


export default function RegularizeApply({ route, navigation }) {
  const [value, onChangeText] = React.useState('');

  
    // useEffect(() => {
    //   // You need to restrict it at some point
    //   // This is just dummy code and should be replaced by actual
  
    //       // getToken();
      
    // }, []);
    const { check_in_date } = route.params;
    const { shortfall_hrs } = route.params;
    const { rm_comments } = route.params;


    const submit = async () => {

        // console.log("Submitted")
        // console.log("check_in_date "+ `"${route.params.check_in_date}"`)
        const User_Authkey = await AsyncStorage.getItem('User_Authkey');
        const emp_id = await AsyncStorage.getItem('emp_id');
        console.log("Token CheckIn LeaveApply "+" user authkey "+ User_Authkey + " ID " + emp_id)

        return fetch('http://myworkday.nutantek.com/emp_applyforregularization.php?emp_id='+emp_id ,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: User_Authkey,
          },
           body: JSON.stringify({

            check_in_date: route.params.check_in_date,
            shortfall_hrs: route.params.shortfall_hrs,
            justifications: value
            
          })

      }).then((response) => response.text())
      .then((responseJson) => {
        console.log(responseJson)
               if(responseJson == `1"recived"`){
                Alert.alert("Succefully Submitted")
               }
               else{
                ToastAndroid.show('Try Again', ToastAndroid.LONG);
               }
    })
          .catch((error) => {
              console.error(error);
          });
    
      
   }
  


   return (
    <View>
          <Appbar.Header style={{ backgroundColor: '#fff' }}>
            <Appbar.BackAction
                onPress={() => navigation.goBack()}
            />
            <Appbar.Content
                title="Apply For Regularize"
            />
        </Appbar.Header>
        <View>
        <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={styles.text}>Date :  {check_in_date}</Text>
      <Text style={styles.text}>Shortfall : {shortfall_hrs}</Text>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <Text style={styles.text}>Status:</Text>
      <View style={[rm_comments == "Apply"? styles.btnA : styles.btnR]}> 
      <Text style={styles.btntxt}>{rm_comments}</Text>
      </View>
      </View>
      </View>
      <Text style={styles.text}>Justification :</Text>
      <TextInput
        style={styles.textinput}
        multiline={true}
        onChangeText={text => onChangeText(text)}
        value={value}
        textAlignVertical="top"
        type='outlined'
      />
      <TouchableOpacity style={styles.submit} onPress={submit}>
        <Text style={styles.touchabletext}>Submit </Text>
      </TouchableOpacity>
        </View>
    </View>
)
  }