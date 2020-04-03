import React from 'react';
import { View, Text, Dimensions,ScrollView , StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Appbar, Divider} from 'react-native-paper'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Settings({ navigation }) {
  return (
    <View>
         <Appbar.Header style={{ backgroundColor: '#fff' }}>
             <Appbar.BackAction
                 onPress={() => navigation.goBack()}
             />
             <Appbar.Content
                 title="Settings"
             />
         </Appbar.Header>
            <ScrollView>
                <View>
                    <TouchableOpacity style={styles.viewcontainer}  onPress={() => navigation.navigate('Notification')}>
                       <MaterialCommunityIcons name="bell-outline" size={25} color= '#000' />
                       <Text style={styles.txt}>Notification</Text>
                    </TouchableOpacity>
                    <Divider style={styles.divider}/>

                    <TouchableOpacity style={styles.viewcontainer} onPress={() => navigation.navigate('EditProfile')}>
                       <MaterialCommunityIcons name="pencil-outline" size={25} color= '#000' />
                       <Text style={styles.txt}>Edit Profile</Text>
                    </TouchableOpacity>
                    <Divider style={styles.divider}/>

                    <TouchableOpacity style={styles.viewcontainer}>
                       <MaterialCommunityIcons name="cellphone" size={25} color= '#000' />
                       <Text style={styles.txt}>Phone Mapping</Text>
                    </TouchableOpacity>
                    <Divider style={styles.divider}/>
                    
                    <TouchableOpacity style={styles.viewcontainer}>
                       <MaterialCommunityIcons name="logout" size={25} color= '#000' />
                       <Text style={styles.txt}>Log Out</Text>
                    </TouchableOpacity>
                    <Divider style={styles.divider}/>

                </View>
            </ScrollView>
     </View>
  );
}


const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  viewcontainer:{
    flexDirection:'row',
    padding:10
  },
  txt:{
   fontSize:18,
   marginLeft:20
  },
  divider:{
    height:0.4,
    backgroundColor:'#000', 
    width:(DEVICE_WIDTH)- 40,
    marginLeft:20
  }

})