import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Appbar } from 'react-native-paper'
import styles from '../Regularize/DataStyles';

export default function LeaveEdit({ route, navigation }) {


    const { check_in_date } = route.params;
    const { shortfall_hrs } = route.params;
    const { rm_comments } = route.params;
    const { leavetype } = route.params;

    return (
        <View>
            <Appbar.Header style={{ backgroundColor: '#fff' }}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
                <Appbar.Content
                   title="Leave Complete Status"
                />
            </Appbar.Header>
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                    <Text style={styles.text}>From Date :  {check_in_date}</Text>
                    <Text style={styles.text}>To Date : {shortfall_hrs}</Text>
                  </View>  
                  <Text style={styles.text}>Leave Type : {leavetype}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.text}>Status:</Text>
                        <View style={styles.btnR}>
                            <Text style={styles.btntxt}>{rm_comments}</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.text}>Justification :</Text>
                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Your Reason Send </Text>
                </View>
                <Text style={styles.text}>Manager's Comments :</Text>
                <View style={styles.viewContainer}>
                    <Text style={styles.text}>Managers Comments On Your Reason</Text>
                </View>
                <TouchableOpacity style={styles.submit} 
                onPress={
                  () =>navigation.navigate("LeaveHome"
                  // ,{
                  //   check_in_date : check_in_date,
                  //   shortfall_hrs : shortfall_hrs, 
                  //   rm_comments : rm_comments
                  // }
                  )
                }
                >
                   <Text style={styles.touchabletext}>Edit </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}