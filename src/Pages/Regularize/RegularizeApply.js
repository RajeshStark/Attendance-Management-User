import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Appbar, IconButton, Colors, Button} from 'react-native-paper'

export default class RegularizeApply extends Component {
    render() {
        return (
            <View>
                  <Appbar.Header style={{ backgroundColor: '#fff' }}>
                    <Appbar.BackAction
                        onPress={() => this.props.navigation.goBack()}
                    />
                    <Appbar.Content
                        title="Apply For Regularize"
                    />
                </Appbar.Header>
                <View>
                <View style={{alignItems:'center', justifyContent:'center'}}>
                <Text style={styles.text}>Date : 26/03/2020</Text>
              <Text style={styles.text}>ShortFall : 1 hr</Text>
              </View>
              <Text style={styles.text}>Justification :</Text>
              <TextInput
                style={styles.textinput}
                multiline={true}
                textAlignVertical="top"
                type='outlined'
              />
               <TouchableOpacity style={styles.touchable}>
                <Text style={styles.touchabletext}>Submit</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Manager's Comments :</Text>
              <View style={{borderRadius:5,borderColor:'#000',borderWidth:0.5,margin:10}}>
              <Text style={{fontSize:18, padding:10,margin:10}} >Lorem Ipsum Dolar Summit</Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
              <Text style={styles.text}>Status:</Text>
              <View style={styles.btnR}> 
              <Text style={styles.btntxt}>Rejected</Text>
              </View>
              <Button mode="contained">Edit</Button>
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
    headtxt: {
      fontSize: 16,
      color: '#696969',
      width: ((DEVICE_WIDTH) / 4) - 20,
    },
    bodytxt: {
      fontSize: 12,
      width: ((DEVICE_WIDTH) / 4) - 30,
    },
    btnD: {
      width: ((DEVICE_WIDTH) / 4) - 20,
      height: 30,
      backgroundColor: "#DDD",
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnA: {
      width: ((DEVICE_WIDTH) / 4) - 20,
      height: 30,
      backgroundColor: ColorCodes.warning,
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
      padding: 10
    },
    textinput: {
      width: (DEVICE_WIDTH) -20,
      margin: 10,
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
    }
  
  });   