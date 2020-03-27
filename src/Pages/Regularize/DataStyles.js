import React from 'react';
import {StyleSheet, Dimensions} from 'react-native'


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
      width: (DEVICE_WIDTH) - 5,
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
      fontSize: 15,
      color: '#696969',
      width: ((DEVICE_WIDTH) / 4) - 10,
    },
    bodytxt: {
      fontSize: 14,
      width: ((DEVICE_WIDTH) / 4) - 15
    },
    btnP: {
            width: ((DEVICE_WIDTH) / 4) - 20,
            height: 30,
            backgroundColor: ColorCodes.info,
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
      fontSize: 18,
      marginLeft: 10,
      padding: 10
    },
    textinput: {
      width: (DEVICE_WIDTH) / 1.5,
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
      width: 100,
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

  export default styles;