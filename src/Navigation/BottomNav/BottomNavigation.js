import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
//My Imports
import DashboardMain from '../../Screens/Dashboard/Dashboard.Main';
import RegularizationMain from '../../Screens/Regularization/Regularization.Main';
import LeaveMain from '../../Screens/Leave/Leave.Main';
import ProfileMain from '../../Screens/Profile/Profile.Main';
import DashBoardStack from '../DashStack/DashboardStack';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        //activeTintColor: '#e91e63',
        activeTintColor: '#2B65EC',
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashBoardStack}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused }) => (
            <MaterialCommunityIcons name="view-dashboard" size={25} color={focused ? '#2B65EC' : '#808080'} />
          ),
        }}
      />
      <Tab.Screen
        name="Regularisation"
        component={RegularizationMain}
        options={{
            tabBarLabel: 'Regularisation',
            tabBarIcon: ({focused }) => (
              <MaterialCommunityIcons name="comment-text" size={25} color={focused ? '#2B65EC' : '#808080'} />
            ),
          }}
      />
      <Tab.Screen
        name="Leave"
        component={LeaveMain}
        options={{
            tabBarLabel: 'Leave',
            tabBarIcon: ({focused }) => (
              <MaterialCommunityIcons name="calendar-text-outline" size={25} color={focused ? '#2B65EC' : '#808080'} />
            ),
          }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileMain}
        options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({focused }) => (
              <MaterialCommunityIcons name="account" size={25} color={focused ? '#2B65EC' : '#808080'} />
            ),
          }}
      />
    </Tab.Navigator>
  );
}
