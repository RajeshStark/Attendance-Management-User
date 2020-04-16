import * as React from 'react';
import { Button, Text, View, Dimensions, ImageBackground, StatusBar, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import Splash from './Splash';
import EntryStack from "../Navigation/EntryStack";


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function SignInScreen({navigation}) {

  const [dimensions] = React.useState({ window, screen });
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function NavAction() {
    
    console.log(" NavAction Token "+ AsyncStorage.getItem('User_Authkey'))

    navigation.navigate('EntryStack');
  }

  function SignIn({ navigation }) {
    fetch('http://myworkday.nutantek.com/empLogin.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: username,
        user_password: password

      }),
    }).then((response) => response.json())
      .then((responseJson) => {
     
        let Auth = responseJson
        console.log(Auth)

        if (Auth.message == "datamatched") {

        
          let Token = Auth.User_Authkey;
          let ID = Auth.emp_id;
          console.log("ID " + ID, "UserAuthKey "+ Token)

          AsyncStorage.setItem('User_Authkey', Token);
          AsyncStorage.setItem('emp_id', ID);
          
          NavAction()
          // navigation.navigate('EntryStack');
        }
        else {
          Alert.alert("Invalid User name or Password")
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }



  return (
    <View >
      <StatusBar barStyle="dark-content" backgroundColor="#78C4E6" />
      <View style={{ alignItems: 'center', height: (dimensions.window.height) }}>
        <ImageBackground
          source={{ uri: 'https://nutantek.com/images/home.jpg' }}
          imageStyle={{ width: (dimensions.window.width), height: (dimensions.window.width) / 2, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
          style={{ width: (dimensions.window.width), height: (dimensions.window.width) / 2 }}>
        </ImageBackground>
        <View style={{ padding: 30, marginTop: -80, backgroundColor: '#fff', width: (dimensions.window.width) - 60, height: (dimensions.window.width) - 80, borderRadius: 10, borderWidth: 0.1 }}>
          <View style={{ paddingBottom: 10 }}>
            <TextInput
              placeholder="User Id"
              value={username}
              onChangeText={setUsername}
              type='outlined'
              underlineColor='red'
              style={{ backgroundColor: "transparent", height: 40 }}
            // keyboardType='numeric'
            />
          </View>

          <View style={{ paddingBottom: 10 }}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              type='outlined'
              underlineColor='red'
              style={{ backgroundColor: "transparent", height: 40 }}

            />
          </View>

          {/* <Button title="Submit" onPress={() => SignInScreen()} /> */}
          <Button title="Submit" onPress={() => SignIn({ username, password })} />
          <Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 }}>Forgot Password ?</Text>
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>Designed and developed By</Text>
        <Image
          source={require('../assets/logoNutantek.png')}
          style={{ width: (dimensions.window.width) - 20, height: (dimensions.window.width) / 5 }}
        />
      </View>
    </View>

  );
}
