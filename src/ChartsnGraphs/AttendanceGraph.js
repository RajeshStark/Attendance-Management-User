import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
import {Button} from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage';
 
export default class AttendanceGraph extends React.PureComponent {

//   async componentDidMount() {
//     const User_Authkey = await AsyncStorage.getItem('User_Authkey');
//     const emp_id = await AsyncStorage.getItem('emp_id');
//     console.log("Token from Attendance Graph "+" user authkey "+ User_Authkey + " ID " + emp_id)

//     return fetch('http://myworkday.nutantek.com/emp_averageattandancedata.php?emp_id='+emp_id ,{
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           Authorization: User_Authkey,
//       }
//   }).then((response) => response.json())
//   .then((responseJson) => {
           
//     console.log('json response ',responseJson)
// })
//       .catch((error) => {
//           console.error(error);
//       });
// };


    render() {
        return (
         <View>
             <View style={{ height: 220}}>
  <LineChart
    data={{
      labels: ["1-jan", "2-jan", "3-jan", "4-jan", "5-jan", "6-jan", "7-jan"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
          
        }
      ],
    }}
    width={(Dimensions.get("window").width)-20} 
    height={220}
    yAxisInterval={1} 
    chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
      decimalPlaces: 2, 
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 5
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#fff"
      }
      }}
      bezier
      style={{
      marginVertical: 8,
      borderRadius: 5
    }}
  />
</View>
            </View>
        )
    }
 
}
 