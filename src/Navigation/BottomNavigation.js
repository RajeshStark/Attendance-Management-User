import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


//My Imports
import DashBoardStack from './DashboardStack';
import LeaveStack from './LeaveStack';
import RegularizeStack from './RegularizeStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
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
        component={RegularizeStack}
        options={{
            tabBarLabel: 'Regularisation',
            tabBarIcon: ({focused }) => (
              <MaterialCommunityIcons name="comment-text" size={25} color={focused ? '#2B65EC' : '#808080'} />
            ),
          }}
      />
      <Tab.Screen
        name="Leave"
        component={LeaveStack}
        options={{
            tabBarLabel: 'Leave',
            tabBarIcon: ({focused }) => (
              <MaterialCommunityIcons name="calendar-text-outline" size={25} color={focused ? '#2B65EC' : '#808080'} />
            ),
          }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
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
