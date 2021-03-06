import React, { Component } from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  View
} from 'react-native';
import { Appbar, Button } from 'react-native-paper'; 
import Geolocation from 'react-native-geolocation-service';
import AsyncStorage from '@react-native-community/async-storage';


export default class MarkAttendance extends Component {
//  watchId = null;

  state = {
    date: '',
    curTime: '',
    nowArea: ''
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({

        curTime: new Date().toDateString(),
        date: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
      })
   
    }, 1000)
    this.getLocation();

  }

// Permisson
  hasLocationPermission = async () => {
    if (Platform.OS === 'ios' ||
      (Platform.OS === 'android' && Platform.Version < 23)) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (hasPermission) return true;

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
    }

    return false;
  }


// Getting  Location
  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({ location: position, loading: false });
         // console.log(Math.floor(position.coords.latitude * 10000) / 10000)
          // if (Math.floor(position.coords.latitude * 10000) / 10000 == "17.5164") {

          //   // ToastAndroid.show('You Are In NutanTek', ToastAndroid.LONG);
          //   this.setState({
          //     nowArea: 'You Are Within Range Of Nutantek',
          //     checkOut:true
          //   })
          // } else {
          //   // ToastAndroid.show('You Are Not In NutanTek', ToastAndroid.LONG);
          //   this.setState({
          //     nowArea: 'You Are Not In Range Of Nutantek',
          //     checkIn:true,
          //     checkOut:true
          //   })
          // }
  
        },
        (error) => {
          this.setState({ location: error, loading: false });
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
      );
    });
  }

  // Handling CheckIn
 async CheckinHandler ()  {
   // this.setState({checkIn:true,checkOut:false})
    const User_Authkey = await AsyncStorage.getItem('User_Authkey');
    const emp_id = await AsyncStorage.getItem('emp_id');
    console.log("Token CheckIn MarkAttendance "+" user authkey "+ User_Authkey + " ID " + emp_id)

    return fetch('http://myworkday.nutantek.com/em_checkin.php?emp_id='+emp_id ,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Authorization: User_Authkey,
      }
  }).then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson)
           if(responseJson == "sucess"){
            ToastAndroid.show('Checkin Successfuly', ToastAndroid.LONG);
           }
           else{
            ToastAndroid.show('Try Again', ToastAndroid.LONG);
           }
})
      .catch((error) => {
          console.error(error);
      });

  }

  // Handling CheckOut
 async CheckoutHandler ()  {
   // this.setState({checkIn:false,checkOut:true});
    const User_Authkey = await AsyncStorage.getItem('User_Authkey');
    const emp_id = await AsyncStorage.getItem('emp_id');
    console.log("Token CheckOut Dashboard "+" user authkey "+ User_Authkey + " ID " + emp_id)

    return fetch('http://myworkday.nutantek.com/em_checkout.php?emp_id='+emp_id ,{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Authorization: User_Authkey,
      }
  }).then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson)
    if(responseJson == "sucess"){
      ToastAndroid.show('Checkout Successfuly', ToastAndroid.LONG);
     }
     else{
      ToastAndroid.show('Try Again', ToastAndroid.LONG);
     }
})
      .catch((error) => {
          console.error(error);
      });
  }



  render() {
 
    return (
      <View style={{paddingTop:10}}>
        <View>
          {/* <View>
            <Text style={{ fontSize: 22, textAlign: 'center' }}>Punch In Now</Text>
          </View> */}
          <Text style={{ fontSize: 18, textAlign: 'center' }}>{this.state.curTime}</Text>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>{this.state.date}</Text>
          <Text style={{ fontSize: 16, textAlign: 'center' }}>{this.state.nowArea}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <Button color="#2B65EC" icon="checkbox-marked-circle-outline" mode="contained" disabled={this.state.checkIn} onPress={this.CheckinHandler}>
          Check In
        </Button>
        <Button color="#2B65EC" icon="logout" mode="contained" disabled={this.state.checkOut} onPress={this.CheckoutHandler}>
          Check Out
        </Button>
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 12
  },
  result: {
    borderWidth: 1,
    borderColor: '#666',
    width: '100%',
    paddingHorizontal: 16
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 12,
    width: '100%'
  }
});