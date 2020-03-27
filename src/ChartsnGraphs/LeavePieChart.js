import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import {
    PieChart,
} from "react-native-chart-kit";


export default class LeavePieChart extends React.PureComponent {

    render() {
        return (
            <View>
                <View style={{
                height: 240,
                backgroundColor:'#fff',
                 margin: 10,
                 justifyContent:'center',
                 shadowColor: "#000",
                 shadowOffset: {
                     width: 0,
                     height: 1,
                 },
                 shadowOpacity: 0.20,
                 shadowRadius: 1.41,
                 
                 elevation: 2,
            }}>
                    <PieChart
                        data={[
                            {
                                name: 'Attended',
                                days: 19,
                                color: '#2B65EC',
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 15,
                            },
                            {
                                name: 'Absent',
                                days: 1,
                                color: '#FF0000',
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 15,
                            },
                            {
                                name: 'Leave',
                                days: 2,
                                color: '#FFEC00',
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 15,
                            },

                        ]}
                        width={Dimensions.get('window').width - 16}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#1cc910',
                            backgroundGradientFrom: '#eff3ff',
                            backgroundGradientTo: '#efefef',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                        accessor="days"
                        backgroundColor="transparent"
                        paddingLeft="15"
                        absolute //for the absolute number remove if you want percentage
                    />
                </View>
            </View>
        )
    }

}
