import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ArtDetail from '~/components/ArtDetail';
import ArtistDetail from './ArtistDetail';
import ArtistList from './ArtistList';
import Favorite from './Favorite';
import Analysis from './Analysis';
import EasyPick from './EasyPick';
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


// const Stack = createNativeStackNavigator();
{/* <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Favorite" component={Favorite} />
            <Stack.Screen name="ArtistDetail" component={ArtistDetail} />
            <Stack.Screen name="ArtistList" component={ArtistList} />
            <Stack.Screen name="ArtistDetail" component={ArtistDetail} /> 
</Stack.Navigator> */}

const Stack = createNativeStackNavigator<ArtistStackParamList>();
const Tab = createMaterialTopTabNavigator<ArtistStackParamList>();

const TabRoot = ()=>{
    let [serachingName,setSearchingName] = useState<string>('');
    return (
        <>
        <View style={styles.searchbox}>
            <SearchBar 
            placeholder="작가이름" 
            value={serachingName} 
            onChangeText={(v)=>{setSearchingName(v)}}
            ></SearchBar>
            <Tab.Navigator>
                <Tab.Screen name="Favorite" component={Favorite} />
                <Tab.Screen name="Analysis" component={Analysis} />
                <Tab.Screen name="EasyPick" component={EasyPick} />
            </Tab.Navigator>
        </View>
        </>
    );
};



const Artist = ({}) =>{
    
    return (
        <Stack.Navigator>
            <Stack.Screen name="TabRoot" component={TabRoot} options={{headerShown:false}}/>
            <Stack.Screen name="ArtDetail" component={ArtDetail} />
            <Stack.Screen name="ArtistDetail" component={ArtistDetail} />
            {/* <Stack.Screen name="ArtistList" component={ArtistList} />
            <Stack.Screen name="ArtistDetail" component={ArtistDetail} />  */}
        </Stack.Navigator> 
        
    );
}


export default Artist;