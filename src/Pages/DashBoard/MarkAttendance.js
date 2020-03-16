// import React, { Component } from 'react'
// import { Text, View } from 'react-native'

// export default class MarkAttendance extends Component {
//     render() {
//         return (
//             <View>
//                 <Text> MarkAttendance </Text>
//             </View>
//         )
//     }
// }

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

const LOCATION_TASK_NAME = 'background-location-task';

export default class Component extends React.Component {
  onPress = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.Balanced,
      timeInterval: 5000,
    });
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress} style={{marginTop: 100}}>
        <Text>Enable background location</Text>
      </TouchableOpacity>
    );
  }
}

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    alert(error)
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data; 
    alert(JSON.stringify(locations)); //will show you the location object
    //lat is locations[0].coords.latitude & long is locations[0].coords.longitude
    // do something with the locations captured in the background, possibly post to your server with axios or fetch API 
  }
});