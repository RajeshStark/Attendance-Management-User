import React, { Component } from 'react';
import { Text, View, Dimensions, Platform, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { IconButton, Divider } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../Regularize/DataStyles'
import AttendanceReportData from '../../../Services/Dashboard/AttendanceReportData';
export default class CMonthIndex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: []
    }
  }

  //  async componentDidMount(){
  //     const User_Authkey = await AsyncStorage.getItem('User_Authkey');
  //     const emp_id = await AsyncStorage.getItem('emp_id');
  //     console.log("Token from AttenceReport "+" user authkey "+ User_Authkey + " ID " + emp_id)

  //     return fetch('http://myworkday.nutantek.com/emp_attandancemonthwise.php?emp_id='+emp_id, {
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json',
  //             Authorization: User_Authkey, 
  //         }
  //     }).then((response) => response.json())
  //     //   .then((json) => {
  //     //     return json.data 
  //     //   })
  //     .then(data => this.setState({ data: data }))
  //     .catch((error) => {
  //         console.error(error);
  //     }); //to catch the errors if any
  //     }



  render() {
    console.log("this.state.dataSource " + this.state.dataSource)
    return (
      <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 20, padding: 10 }}>Your Attendance:- </Text>
            <IconButton
              icon="file-excel"
              size={25}
              onPress={() => console.log('Pressed')}
            />
          </View>
          <View style={styles.main}>

            <View style={styles.hrow}>
              <Text style={styles.headtxt}>Date</Text>
              <Text style={styles.headtxt}>CheckIn</Text>
              <Text style={styles.headtxt}>CheckOut</Text>
              <Text style={styles.headtxt}>Cloack Hrs</Text>
            </View>
            <Divider style={{ backgroundColor: '#000' }} />
            <FlatList
            data={AttendanceReportData}
            // data={this.state.data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                  <Text style={styles.bodytxt}>{item.Date}</Text>
                  <Text style={styles.bodytxt}>{item.CheckIn}</Text>
                  <Text style={styles.bodytxt}>{item.CheckOut}</Text>
                  <TouchableOpacity
                    style={styles.btnG}
                  >
                    <Text style={styles.btntxt}> {item.Cloack_hrs} </Text>
                  </TouchableOpacity>
            </View>
            )}
          />
           

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

const Instyles = StyleSheet.create({
  lagging: {
    backgroundColor: ColorCodes.red,
    marginLeft: 20,
    marginRight: -10,
    justifyContent: 'center'
  },

  great: {
    backgroundColor: ColorCodes.success,
    marginLeft: 20,
    marginRight: -10,
    justifyContent: 'center'
  },

  sLag: {
    backgroundColor: ColorCodes.warning,
    marginLeft: 20,
    marginRight: -10,
    justifyContent: 'center'
  },

})
