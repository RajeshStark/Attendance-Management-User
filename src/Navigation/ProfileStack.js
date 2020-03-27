import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';


import ProfileMain from '../Screens/Profile/Profile.Main';
import EditProfile from '../Pages/Profile/EditProfile';



const Stack = createStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator headerMode="none" mode="card" >
      <Stack.Screen name="ProfileHome" component={ProfileMain} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

export default ProfileStack;