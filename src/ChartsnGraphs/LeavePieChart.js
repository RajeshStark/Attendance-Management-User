import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import {
    PieChart,
} from "react-native-chart-kit";
import { IconButton } from 'react-native-paper';


export default class LeavePieChart extends React.PureComponent {

    render() {
        return (
            <View>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <Text style={{ fontSize: 18, padding: 10 }}>Leaves</Text>
                    <IconButton icon="file-download" size={25}/>
                </View>
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
                                name: 'Carry Forward',
                                days: 3,
                                color: '#32CD32',
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 14,
                            },
                            {
                                name: 'Eligible',
                                days: 6,
                                color: '#2B65EC',
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 14,
                            },
                            {
                                name: 'Availed',
                                days: 2,
                                color: '#FF0000',
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 14,
                            },
                            {
                                name: 'Balance',
                                days: 4,
                                color: '#FFEC00',
                                legendFontColor: '#7F7F7F',
                                legendFontSize: 14,
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
