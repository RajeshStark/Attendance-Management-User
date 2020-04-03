import React from 'react';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation  } from '@react-navigation/native';



class BelliconClass extends React.Component {

    render() {
        return (
            <View>
                <MaterialCommunityIcons name="bell" size={25} color='#fff' onPress={() => this.props.navigation.navigate('Notification')} />
            </View>
        )
    }
}


export default function(props) {
    const navigation = useNavigation();
  
    return <BelliconClass {...props} navigation={navigation} />;
  }