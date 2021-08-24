import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, ScrollView, Button } from 'react-native';
import { Divider } from 'react-native-elements';
import ArtDisplayList from '~/components/ArtDisplayList';
import {  NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

const styles = StyleSheet.create(
    ({
        cotainer:{
            flex:1
        },
        dividerStyle:{
            color:'gray',
            
        }
    })    
);

interface Props{
    route : RouteProp<ArtistStackParamList,"Favorite">
    navigation:NativeStackScreenProps<ArtistStackParamList,"Favorite">;    
}

const Favorite = ({route,navigation}:Props) =>{
    return (
        <>
        <ScrollView>            
            <ArtDisplayList Title={"My Collection"} navigation={navigation}></ArtDisplayList>            
            <ArtDisplayList Title={"Following Artist"} navigation={navigation}></ArtDisplayList>
            <Divider orientation="horizontal"></Divider>
            <ArtDisplayList Title={"판매리스트"} navigation={navigation}></ArtDisplayList>
            <Divider orientation="horizontal"></Divider>
            <ArtDisplayList Title={"Release"} navigation={navigation}></ArtDisplayList>
            <Divider orientation="horizontal"></Divider>
        </ScrollView>
        </>
        
    );
}


export default Favorite;