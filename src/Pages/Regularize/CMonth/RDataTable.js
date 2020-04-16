import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput , FlatList} from 'react-native';
import { Button, Paragraph, Dialog, Portal, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../DataStyles';
import RegulrizeData from '../../../Services/Regularize/RegularizeData';

class RDataTable extends Component { 
  constructor(props) {
    super(props);
    this.state = { 
      userInfo: [],
      visible: false,
      // User_Authkey:'',
      
    } 
  }


//   async componentDidMount() {
   
//     const User_Authkey = await AsyncStorage.getItem('User_Authkey');
//     const emp_id = await AsyncStorage.getItem('emp_id');

//     console.log("Token from Dashboard "+" user authkey "+  User_Authkey + " ID " + emp_id)

//     return fetch('http://myworkday.nutantek.com/emp_regularizationview.php?emp_id='+emp_id ,{
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',
//           Authorization: User_Authkey,
//       }
//   }).then((response) => response.json())
//   // .then((json) => {
//   //   return json.data 
//   // })
//   // .then(json => console.log( " response "+ json))
//  .then(data => this.setState({ userInfo: data}))
//       .catch((error) => {
//           console.error(error);
//       });
// };


  // _showDialog = () => this.setState({ visible: true });

  // _hideDialog = () => this.setState({ visible: false });

  render() { 

    return (
    
      <View style={styles.main}>

        <View style={styles.hrow}>
          <Text style={styles.headtxt}>Date</Text>
          <Text style={styles.headtxt}>Cloack Hrs</Text>
          <Text style={styles.headtxt}>Shortfall</Text>
          <Text style={styles.headtxt}>Regularize</Text>
        </View>
        <Divider style={{ backgroundColor: '#000' }} />
        <FlatList
      data={RegulrizeData}
      // data={this.state.userInfo}
      renderItem={({ item }) =>
      <View>
        <View style={styles.row}>
          <Text style={styles.bodytxt}>{item.check_in_date}</Text>
          <Text style={styles.bodytxt}>{item.Cloack_hrs}</Text>
          <Text style={styles.bodytxt}>{item.shortfall_hrs}</Text>
          <TouchableOpacity
            style={ [ (item.rm_comments == "Apply")? styles.btnA : (item.rm_comments == "Approved")? styles.btnG  : (item.rm_comments == "Rejected")? styles.btnR : (item.rm_comments == "Pending")? styles.btnP : ""]}
           
            onPress= {()=>
              {
                 let destination = (item.rm_comments === "Apply")? "regularizeApply" : (item.rm_comments === "Rejected") ? "regularizeEdit" : (item.rm_comments === "Approved" || "Pending") ? "regularizeView" : ""
                 this.props.navigation.navigate(destination,{
                   check_in_date : (item.check_in_date),
                   shortfall_hrs : (item.shortfall_hrs), 
                   rm_comments : (item.rm_comments)
                 });
               } 
          }
          >
            <Text style={styles.btntxt}> {item.rm_comments} </Text>
          </TouchableOpacity>
        </View>
        <Divider style={{ backgroundColor: '#000' }} />
      </View> 
          }
          keyExtractor={item => item.id}
        />
      </View>
     
    )
  }
}


export default function (props) {
  const navigation = useNavigation();

  return <RDataTable {...props} navigation={navigation} />;
}