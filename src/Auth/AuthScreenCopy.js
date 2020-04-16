import * as React from 'react';
import { Button, Text, View, Dimensions, ImageBackground, StatusBar, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import Splash from './Splash';
import EntryStack from "../Navigation/EntryStack";


const AuthContext = React.createContext();

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export function SignInScreen({navigation}) {

  const [dimensions] = React.useState({ window, screen });
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function NavAction() {
    
    console.log(" NavAction Token "+ AsyncStorage.getItem('User_Authkey'))

    navigation.navigate('SignIn');
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

const Stack = createStackNavigator();

export default function Authentication({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
  
      try {
        userToken = await AsyncStorage.getItem('User_Authkey');
        console.log("Token from effecct "+ userToken)
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: userToken });
        //  dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        dispatch({ type: 'SIGN_IN', token: userToken });
        // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
        <Stack.Navigator headerMode="none">
          {state.isLoading ? (
            // We haven't finished checking for the token yet
            <Stack.Screen name="Splash" component={Splash} />
          ) : state.userToken == null ? (
            // No token found, user isn't signed in
            <Stack.Screen
              name="SignIn"
              component={SignInScreen}
              options={{
                title: 'Sign in',
                // When logging out, a pop animation feels intuitive
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',
              }}
            />
          ) : (
                // User is signed in
                <Stack.Screen name="EntryStack" component={EntryStack} />
              )}
        </Stack.Navigator>

    </AuthContext.Provider>
  );
}
