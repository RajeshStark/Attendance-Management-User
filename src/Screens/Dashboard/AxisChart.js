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

 
export default class YAxisExample extends React.PureComponent {
 
    render() {
 
    
        return (
            
         <View>
             <View style={{ height: 240,padding:10}}>
  <Text style={{fontSize:22, paddingLeft:20}}>Attendance Graph</Text>
  <LineChart
    data={{
      labels: ["1-jan", "2-jan", "3-janh", "4-jan", "5-jan", "6-jan", "7-jan"],
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
    width={(Dimensions.get("window").width)-20} // from react-native
    height={220}
 
    // yAxisLabel="$"
    // yAxisSuffix="k"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
     backgroundColor: "#fff",
      backgroundGradientFrom: "#ffffff", //"#FFEFBA"
      backgroundGradientTo: "#FFFFFF",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
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
 