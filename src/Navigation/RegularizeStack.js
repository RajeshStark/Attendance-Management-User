import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import RegularizationMain from '../Screens/Regularization/Regularization.Main';
import RegularizeApply from '../Pages/Regularize/RegularizeEdit';
import RegularizeView from '../Pages/Regularize/RegularizeView';



const Stack = createStackNavigator();

function RegularizeStack() {
  return (
    <Stack.Navigator headerMode="none" mode="card" >
      <Stack.Screen name="regularizeHome" component={RegularizationMain} />
      <Stack.Screen name="regularizeApply" component={RegularizeApply}/>
      <Stack.Screen name="regularizeView" component={RegularizeView}/>
    </Stack.Navigator>
  );
}

export default RegularizeStack;