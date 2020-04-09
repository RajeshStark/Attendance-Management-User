import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';

class ProfileDetails extends React.Component {
    render() {
        return (
            <View style={{margin:10}}>
                <View style={{ alignItems: 'center', padding: 10 }}>
                    <Text style={{ fontSize: 18 }}>My Details</Text>
                </View>
                <View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Employee Code: </Text>
                      <Text style={styles.text}>NS052</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Gender: </Text>
                      <Text style={styles.text}>Male</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Maritial Status: </Text>
                      <Text style={styles.text}>Unmarried</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Date Of Birth: </Text>
                      <Text style={styles.text}>25/10/1998</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Date Of Joining: </Text>
                      <Text style={styles.text}>10/09/2019</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Mobile Number: </Text> 
                      <Text style={styles.text}>+91-9398838327</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Work: </Text> 
                      <Text style={styles.text}>rajesh.s@nutantek.com</Text>
                </View>
                <View style={styles.ListView}>
                <Text style={styles.text}>Personal: </Text>
                <Text style={styles.text}>sangapogurajesh@gmail.com</Text>
                </View>
                </View>
            </View>
        
        );
    }
}

export default ProfileDetails;

 const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

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
      paddingHorizontal:5,
    
    }

});   