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

 
export default class RegularizeBar extends React.PureComponent {
    
    render() {
        const data = {
            labels: ["Apply", "Approved", "Pending", "Rejected"],
            datasets: [
              {
                data: [3, 8, 0, 2]
              }
            ]
          };

        return (
         <View>
             <View style={{ height: 210,padding:10}}>
  {/* <Text style={{fontSize:18, paddingLeft:20}}>Regularize Graph</Text> */}
  <BarChart
//   style={graphStyle}
  data={data}
  width={(Dimensions.get("window").width)-20} 
  height={200}
  chartConfig={{
    // backgroundColor: "#e26a00",
    // backgroundGradientFrom: "#8E2DE2",
    // backgroundGradientTo: "#4A00E0",
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
      decimalPlaces: 1, 
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
 // verticalLabelRotation={30}
/>
</View>
            </View>
        )
    }
 
}
 