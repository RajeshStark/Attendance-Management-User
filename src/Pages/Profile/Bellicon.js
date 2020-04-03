import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function BellIcon({ navigation }) {

    return(
      <View>
         <MaterialCommunityIcons name="bell" size={25} color='#000' onPress={() => navigation.navigate('Notification')} />
      </View>
    )
  }
  

 