import React, { useState, useEffect } from 'react';
import { View, Button, Platform, TextInput, Dimensions, StyleSheet, Text } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { IconButton, Colors, Checkbox } from 'react-native-paper';
import GlobalStyles from '../../Styles/MainStyles';

const PickingDate = (props) => {
    return(
      <View>
      <View style={styles.mainrow}>
        <FromDatePicker/>
        <Text style={styles.text}>-</Text>
        <ToDatePicker/>
      </View>
      </View>
    )
  }
  export default  PickingDate;

const FromDatePicker = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [fromdate, setFromdate] = useState('From Date');

  const onChangeF = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setFromdate(currentDate.toLocaleDateString());
 
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showFDatepicker = (props) => {
    showMode('date');
  };

  return (
    <View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <View style={styles.row}>
        <IconButton
          icon="calendar"
          color={Colors.red500}
          size={20}
          onPress={showFDatepicker}
        />
        <Text style={styles.text} onPress={showFDatepicker}>{fromdate}</Text>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          minimumDate={date}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeF}
        />
      )}
      </View>
      </View>
    </View>
  );
};



const ToDatePicker = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [todate, setTodate] = useState('To Date')

  const onChangeT = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate);
    setTodate(currentDate.toLocaleDateString());
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };
  const showTDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      
      <View style={styles.row}>
        <IconButton
          icon="calendar"
          color={Colors.red500}
          size={20}
          onPress={showTDatepicker}
        />
        <Text style={styles.text} onPress={showTDatepicker}>{todate}</Text>
        {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          minimumDate={date}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChangeT}
        />
      )}
      </View>
   
    </View>
  );
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainrow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    width: (DEVICE_WIDTH) -10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    width: (DEVICE_WIDTH) / 3
  },
  text: {
    fontSize: 18,
    padding: 5,

  },
  touchabletext: {
    fontSize: 18,
    marginLeft: 10,
    padding: 10,
    color: '#fff',
    paddingBottom: -20
  },
  textinput: {
    width: (DEVICE_WIDTH) - 20,
    marginLeft: 10,
    backgroundColor: 'transparent',
    borderWidth: 0.5,
    borderRadius: 5
  },
  touchable: {
    width: (DEVICE_WIDTH) - 20,
    justifyContent: 'center',
    backgroundColor: '#2B65EC',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
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