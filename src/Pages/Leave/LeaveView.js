import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Appbar, IconButton, Colors, Button} from 'react-native-paper'

export default class LeaveView extends Component {
    render() {
        return (
            <View>
                  <Appbar.Header style={{ backgroundColor: '#fff' }}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Appbar.Content
                        title="Leave View"
                    />
                </Appbar.Header>
                <View>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.text}>Date : 26/03/2020</Text>
              <Text style={styles.text}>Shortfall : 1 hr</Text>
              
              <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={styles.text}>Status:</Text>
              <View style={styles.btnG}> 
              <Text style={styles.btntxt}>Approved</Text>
              </View>
              </View>
              </View>

              <Text style={styles.text}>Justification :</Text>
              <View style={styles.viewContainer}>
              <Text  style={styles.text}>Your Reason Send </Text>
              </View>
              <Text style={styles.text}>Manager's Comments :</Text>
              <View style={styles.viewContainer}>
              <Text style={styles.text}>Managers Comments On Your Reason</Text>
              </View>
     
                </View>
            </View>
        )
    }
}



const ColorCodes = {
    primary: '#0275d8',
    success: '#5cb85c',
    info: '#5bc0de',
    warning: '#f0ad4e',
    red: '#d9534f',
    faded: '#f7f7f7'
  }
  
  const DEVICE_WIDTH = Dimensions.get('window').width;
  
  const styles = StyleSheet.create({
    main: {
      marginLeft: 5,
      width: (DEVICE_WIDTH) - 10,
      padding: 5,
      marginTop: 20
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: (DEVICE_WIDTH) - 20,
      height: 40,
      alignItems: 'center'
    },
    viewContainer:{
        borderRadius:5,
        borderColor:'#000',
        borderWidth:0.5,
        margin:10,
        padding :10
    },
    btnP: {
        width: ((DEVICE_WIDTH) / 4) - 20,
        height: 30,
        backgroundColor: ColorCodes.info,
        justifyContent: 'center',
        alignItems: 'center',
      },
    btnG: {
      width: ((DEVICE_WIDTH) / 4) - 20,
      height: 30,
      backgroundColor: ColorCodes.success,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnR: {
      width: ((DEVICE_WIDTH) / 4) - 20,
      height: 30,
      backgroundColor: ColorCodes.red,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btntxt: {
      color: '#fff'
    },
    text: {
      fontSize: 20,
      marginLeft: 10,
      padding:5
    },

    touchabletext: {
      fontSize: 18,
      marginLeft: 10,
  
      color: '#fff',
  
    },
    touchable: {
      width: (DEVICE_WIDTH) -20,
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
    },
    Editbtn:{
        width:(DEVICE_WIDTH)-20
    }
  
  });   