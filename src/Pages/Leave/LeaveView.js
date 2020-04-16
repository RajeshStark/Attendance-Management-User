import React from 'react'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import styles from '../Regularize/DataStyles';

export default function LeaveView({ route, navigation }) {


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
                        <View style={[rm_comments == "Approved"? styles.btnG : styles.btnP]}>
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
            </View>
        </View>
    )
}