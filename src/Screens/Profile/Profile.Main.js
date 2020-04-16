import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StyleSheet, FlatList } from 'react-native';
import ProfileDetails from './profiledetails';
import { ScrollView } from 'react-native-gesture-handler';
import RmDetails from './Rmdetails';
import { Button, IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default class ProfileMain extends Component {
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
        
        return (
            <FlatList
            data={this.state.userInfo}
            renderItem={({ item }) =>
            
            <ScrollView
             showsVerticalScrollIndicator={false}
            >
                <View style={styles.main}>
                <View>
                    <View style={styles.mainView}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={{ uri: (item.emp_profile) }}
                                style={{ height: 100, width: 100 , borderRadius:50}}
                            />
                            <View style={{ justifyContent: 'space-evenly', marginLeft: 10 }}>
                                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
                                    <Text style={{ fontSize: 18, color: '#fff' }}>{item.emp_fname} {item.emp_lname}</Text>
                                    <IconButton icon='pencil' size={25} style={{marginLeft:30}} color="#fff" onPress={() => this.props.navigation.navigate('EditProfile')}/>
                                </View>
                                <Text style={{ fontSize: 16, color: '#fff' }}>{item.user_role}</Text>
                                <Text style={{ fontSize: 16, color: '#fff' }}>Nutantek Solutions</Text>
                            </View>
                        </View>
                        <Button icon="settings" style={styles.button} mode="contained" onPress={() => this.props.navigation.navigate('Settings')}>
                            Settings
                        </Button>
                    </View>
      
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
                      <Text style={styles.text}>Unmarried</Text>
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
             
                </View>
            </ScrollView>
               }
               keyExtractor={item => item.id}
             />
        )
    }
}


const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#2B65EC',
        width: (DEVICE_WIDTH),
        height: 180,
        justifyContent: 'center',
        paddingLeft: 10,
        
    },
    iconbutton: {
        marginRight: 50,
    },
    button: {
    margin:10
    },
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