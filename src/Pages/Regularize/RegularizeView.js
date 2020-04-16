import React from 'react'
import { Text, View } from 'react-native'
import { Appbar } from 'react-native-paper'
import styles from './DataStyles';

export default function RegularizeView({ route, navigation }) {


    const { check_in_date } = route.params;
    const { shortfall_hrs } = route.params;
    const { rm_comments } = route.params;

    return (
        <View>
            <Appbar.Header style={{ backgroundColor: '#fff' }}>
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
                <Appbar.Content
                    title="Apply For Regularize"
                />
            </Appbar.Header>
            <View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.text}>Date :  {check_in_date}</Text>
                    <Text style={styles.text}>Shortfall : {shortfall_hrs}</Text>
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