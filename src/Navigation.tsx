import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Release from '~/screens/Release';
import Art from '~/screens/Art';
import Artist from '~/screens/Artist';
import Login from '~/screens/Login';
import Home from '~/screens/Home';
import My from '~/screens/My';



const Tab = createBottomTabNavigator();

const Navigation = ()=> {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator  screenOptions={{ headerShown: false }}>         */}
      <Tab.Navigator  
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Artist') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } 
          else if (route.name === 'Notice') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          else if (route.name === 'Home') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          else if (route.name === 'Art') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }
          else if (route.name === 'My') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}>
        <Tab.Screen name="Artist" component={Artist} />
        <Tab.Screen name="Release" component={Release} />        
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Art" component={Art} />
        <Tab.Screen name="My" component={My} />       
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;