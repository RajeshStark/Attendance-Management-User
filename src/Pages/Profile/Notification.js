import React from 'react';
import { View, Text,  ScrollView  } from 'react-native';
import { Appbar, Divider} from 'react-native-paper'
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Bellicon from './Bellicon';

export default function Notification({navigation}) {
  return (
    <View>
      <Appbar.Header style={{ backgroundColor: '#fff' }}>
             <Appbar.BackAction
                 onPress={() => navigation.goBack()}
             />
             <Appbar.Content
                 title="Notification"
             />
         </Appbar.Header>
      <Text>Notification</Text>
  
     </View>
  );
}


