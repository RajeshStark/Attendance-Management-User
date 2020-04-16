import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class RmDetails extends React.Component {
    render() {
        return (
            <View style={{margin:10}}>
                <View style={{ alignItems: 'center', padding: 10 }}>
                    <Text style={{ fontSize: 18 }}>RM Details</Text>
                </View>
                <View >
                <View style={styles.ListView}>
                      <Text style={styles.text}>RM Name: </Text>
                      <Text style={styles.text}>Suresh Gupta</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>RM Number: </Text>
                      <Text style={styles.text}>+91-9876543210</Text>
                </View>
                </View>
            </View> 
        );
    }
}

export default RmDetails;

const styles = StyleSheet.create({
    ListView: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        padding:10,
        marginBottom:5,
        borderRadius:10,
       
    },
    text:{
      fontSize:16,
      paddingHorizontal:10
    }

});   