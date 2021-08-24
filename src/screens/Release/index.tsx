import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ReleaseList from '~/screens/Release/ReleaseList';
import ReleaseDetail from '~/screens/Release/ReleaseDetail';
import { SearchBar } from 'react-native-elements';


const styles = StyleSheet.create(
    ({
        searchbox:{
            flex:1

          },
        contentsbox:{
            flex:8

          },

    })
);


const Stack = createNativeStackNavigator<ReleaseStackParamList>();
const Tab = createMaterialTopTabNavigator<ReleaseStackParamList>();

const TabRoot = ()=>{
    let [serachingName,setSearchingName] = useState<string>('');
    return (
        <>
        <View style={styles.searchbox}>            
            <Tab.Navigator>
                <Tab.Screen name="Upcoming" component={ReleaseList} />
                <Tab.Screen name="Past" component={ReleaseList} />                
            </Tab.Navigator>
        </View>
        </>
    );
};



const Artist = ({}) =>{
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabRoot" component={TabRoot} options={{headerShown:false}}/>
            <Stack.Screen name="ReleaseDetail" component={ReleaseDetail} />         
        </Stack.Navigator> 
        
    );
}


export default Artist;