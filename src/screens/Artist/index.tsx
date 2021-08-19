import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ArtistDetail from './ArtistDetail';
import ArtistList from './ArtistList';

const styles = StyleSheet.create(
    ({

    })
);


const Stack = createNativeStackNavigator();



const Artist = ({}) =>{
    return (
        <>
        <Stack.Navigator 
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="ArtistList" component={ArtistList} />
            <Stack.Screen name="ArtistDetail" component={ArtistDetail} />
        </Stack.Navigator>
        </>
        
    );
}


export default Artist;