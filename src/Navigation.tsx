import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      <Tab.Navigator>        
        <Tab.Screen name="Notice" component={Release} />
        <Tab.Screen name="Artist" component={Artist} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Art" component={Art} />
        <Tab.Screen name="My" component={My} />       
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;