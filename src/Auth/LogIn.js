import React, { Component } from 'react'
import { Text, View, Button, Image, Dimensions, StatusBar ,ImageBackground, Alert } from 'react-native'
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      user_password: ''
    } 
  }
  // data = { user_id:this.user_id,
  //   user_password:this.user_password}
    

  submit = () => {
    const { user_id }  = this.state ;
    const { user_password }  = this.state ;

    console.log(" user_id " + user_id)
    return fetch('http://myworkday.nutantek.com/empLogin.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: user_id,
        user_password: user_password
       
      }),
      }).then((response) => response.json())
        .then((responseJson) => {
          // console.log(responseJson)
          let Auth = responseJson

          if( Auth.message == "datamatched"){
             this.props.navigation.navigate('BottomTabs')
          }
         else {
           Alert.alert("Invalid User name or Password")
         }
        })
        .catch((error) => {
            console.error(error);
        });
  };

    render() {
        return (
            <View>
               <View >
      <StatusBar  barStyle="dark-content" backgroundColor="#78C4E6"/>
    <View style={{alignItems: 'center', height: (DEVICE_WIDTH) }}>
    <ImageBackground 
    source={{uri: 'https://nutantek.com/images/home.jpg'}}
    imageStyle={{width:(DEVICE_WIDTH),height:(DEVICE_WIDTH)/2, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
    style={{width:(DEVICE_WIDTH),height:(DEVICE_WIDTH)/2}}>
    </ImageBackground>
      <View style={{padding:30, marginTop:-80,backgroundColor:'#fff', width: (DEVICE_WIDTH)-60 , height: (DEVICE_WIDTH)-80 ,borderRadius:10,borderWidth:0.1}}>
        <View style={{ paddingBottom: 10 }}>
          <TextInput
            placeholder="Employee Id"
            // value={username}
            onChangeText={user_id => this.setState({user_id})}
            type='outlined'
            underlineColor='red'
            style={{ backgroundColor: "transparent", height: 40 }}
           // keyboardType='numeric'
          />
        </View>

        <View style={{ paddingBottom: 10 }}>
          <TextInput
            placeholder="Password"
            // value={password}  
            onChangeText={user_password => this.setState({user_password})}
            type='outlined'
            underlineColor='red'
            style={{ backgroundColor: "transparent", height: 40 }}
            
          />
        </View>

        <Button title="Submit"  onPress={this.submit}/>
        <Text style={{fontSize:18,textAlign:'center',marginTop:10}}>Forgot Password ?</Text>
      </View>
      <Text style={{fontSize:18,textAlign:'center'}}>Designed and developed By</Text>
    <Image 
     source={require('../assets/logoNutantek.png')}
     style={{width: (DEVICE_WIDTH)-20,height: (DEVICE_WIDTH)/5}}
    />
    </View> 
    </View>
            </View>
        )
    }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

export default LogIn

// function HomeScreen({ navigation }) {
//   return (
//         navigation.navigate('Details')
//   );
// }

// export default function ({props}) {
//   const navigation = useNavigation();

//   return <LogIn {...props} navigation={navigation} />;
// }