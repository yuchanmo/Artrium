import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import Release from '~/screens/Release';
import Art from '~/screens/Art';
import Artist from '~/screens/Artist';
import Login from '~/screens/SignIn';
import Home from '~/screens/Home';
import My from '~/screens/My';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '~/screens/SignIn';
import SignUp from './screens/SignUp';
import { SignContext } from '~/context/SignContext';

const RootStack = createNativeStackNavigator();
const SignStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

//회원가입 / 로그인관련
const StackSign = ()=>{
  return (
    <>
    <SignStack.Navigator>
      <SignStack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
      <SignStack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
    </SignStack.Navigator>
    </>
  )
}

//Program Main
const TabMain = ()=>{
  return (
    <>
    <MainTab.Navigator  
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Artist') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } 
          else if (route.name === 'Release') {
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
        <MainTab.Screen name="Artist" component={Artist} />
        <MainTab.Screen name="Release" component={Release} />        
        {/* <MainTab.Screen name="Home" component={Home} /> */}
        <MainTab.Screen name="Art" component={Art} />
        <MainTab.Screen name="My" component={My} />  
      </MainTab.Navigator>
    </>
  )
}

const Navigation = ()=> {
  const {isSigned,trySignIn} = React.useContext<ISignContext>(SignContext);
  let [isSignedIn,setSignedIn] = React.useState<boolean>(false);
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {
          !isSigned ?(       
            <RootStack.Screen name="StackSign" component={StackSign} options={{headerShown:false}}/>        
          ) : (        
            <RootStack.Screen name="TabMain" component={TabMain} options={{headerShown:false}}/>        
          )
          }      
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;