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



export default class App extends Component {

  watchId = null;

  state = {
    date: '',
    curTime: '',
    nowArea: ''
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({

        curTime: new Date().toLocaleString(),
        date: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds(),
      })
   
    }, 1000)
    this.getLocation();

  }


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

  getLocation = async () => {
    const hasLocationPermission = await this.hasLocationPermission();

    if (!hasLocationPermission) return;

    this.setState({ loading: true }, () => {
      Geolocation.getCurrentPosition(
        (position) => {
          this.setState({ location: position, loading: false });
         // console.log(Math.floor(position.coords.latitude * 10000) / 10000)
          if (Math.floor(position.coords.latitude * 10000) / 10000 == "17.5164") {

            // ToastAndroid.show('You Are In NutanTek', ToastAndroid.LONG);
            this.setState({
              nowArea: 'You Are Within Range Of Nutantek'
            })
          } else {
            // ToastAndroid.show('You Are Not In NutanTek', ToastAndroid.LONG);
            this.setState({
              nowArea: 'You Are Out Of Range Nutantek',
              checkIn:true,
              checkOut:true
            })
          }
  
        },
        (error) => {
          this.setState({ location: error, loading: false });
          console.log(error);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
      );
    });
  }


  render() {
   
    return (
      <View>
        <Appbar.Header style={{ backgroundColor: '#fff' }}>
          <Appbar.BackAction
            onPress={() => this.props.navigation.goBack()}
          />
          <Appbar.Content
            title="Attendance"
          />

        </Appbar.Header>
        <View>
          <View>
            <Text style={{ fontSize: 22, textAlign: 'center' }}>Punch In Now</Text>
          </View>
          <Text style={{ fontSize: 22, textAlign: 'center' }}>{this.state.date}</Text>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>{this.state.nowArea}</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
        <Button icon="checkbox-marked-circle-outline" mode="contained" disabled={this.state.checkIn}  onPress={() => this.setState({checkIn:true,checkOut:false})}>
          Check In
        </Button>
        <Button icon="logout" mode="contained" disabled={this.state.checkOut}  onPress={() => this.setState({checkIn:false,checkOut:true})}>
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