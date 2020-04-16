import * as React from 'react';
import { Text, View, StyleSheet, Dimensions,FlatList } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class ProfileDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          userInfo: [],
          // User_Authkey:'',
          
        } 
      }

    async componentDidMount() {
   
        const User_Authkey = await AsyncStorage.getItem('User_Authkey');
        const emp_id = await AsyncStorage.getItem('emp_id');
    
        console.log("Token from Dashboard "+" user authkey "+  User_Authkey + " ID " + emp_id)
    
        return fetch('http://myworkday.nutantek.com/emp_completeprofileview.php?emp_id='+emp_id ,{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              Authorization: User_Authkey,
          }
      }).then((response) => response.json())
      .then((json) => {
        return json.data 
      })
      // .then(json => console.log( " response "+ json))
     .then(data => this.setState({ userInfo: data}))
          .catch((error) => {
              console.error(error);
          });
    };

    render() {
        const User = this.state.userInfo;
        // console.log(User.emp_fname)
        return (
            <View>
<FlatList
      data={this.state.userInfo}
      renderItem={({ item }) =>
      <View style={styles.main}>
      <Text>{User.emp_mobile_number}</Text>
                 <View style={{margin:10}}>
                <View style={{ alignItems: 'center', padding: 10 }}>
                    <Text style={{ fontSize: 18 }}>RM Details</Text>
                </View>
                <View >
                <View style={styles.ListView}>
                      <Text style={styles.text}>RM Name: </Text>
                      <Text style={styles.text}>{item.emp_manager_name}</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>RM Number: </Text>
                      <Text style={styles.text}>{item.emp_manager_number}</Text>
                </View>
                </View>
            </View> 
            <View style={{margin:10}}>
                <View style={{ alignItems: 'center', padding: 10 }}>
                    <Text style={{ fontSize: 18 }}>My Details</Text>
                </View>
                <View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Employee Code: </Text>
                      <Text style={styles.text}>{item.emp_id}</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Gender: </Text>
                      <Text style={styles.text}>{item.emp_gender}</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Maritial Status: </Text>
                      <Text style={styles.text}>{item.emp_marrtial_status}</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Date Of Birth: </Text>
                      <Text style={styles.text}>{item.emp_dob}</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Date Of Joining: </Text>
                      <Text style={styles.text}>{item.emp_doj}</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Mobile Number: </Text> 
                      <Text style={styles.text}>{item.emp_mobile_number}</Text>
                </View>
                <View style={styles.ListView}>
                      <Text style={styles.text}>Work: </Text> 
                      <Text style={styles.text}>{item.emp_office_email}</Text>
                </View>
                <View style={styles.ListView}>
                <Text style={styles.text}>Personal: </Text>
                <Text style={styles.text}>{item.emp_personal_email}</Text>
                </View>
                </View>
            </View>
            </View>
                }
                keyExtractor={item => item.id}
              />
          
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