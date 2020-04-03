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
 
export default class AttendanceGraph extends React.PureComponent {

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
 