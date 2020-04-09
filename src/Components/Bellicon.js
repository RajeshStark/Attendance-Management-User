import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { IconButton } from 'react-native-paper';

export default function BellIcon(props) {
  return (
    <View>
      <MaterialCommunityIcons name="bell" 
        size={25} 
        color='#fff'
        onPress={()=>{props.navigation('Notification')}}
      />
     </View>
  );
}
