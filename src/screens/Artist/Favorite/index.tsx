import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, ScrollView } from 'react-native';
import Divider from '~/components/Divider';
import ArtDisplayList from '~/components/ArtDisplayList';

const styles = StyleSheet.create(
    ({
        cotainer:{
            flex:1
        },
    })    
);

const Favorite = ({navigation}) =>{
    return (
        <>
        <ScrollView>
            <ArtDisplayList Title={"My Collection"}></ArtDisplayList>
            <Divider></Divider>
            <ArtDisplayList Title={"Following Artist"}></ArtDisplayList>
            <Divider></Divider>
            <ArtDisplayList Title={"판매리스트"}></ArtDisplayList>
            <Divider></Divider>
            <ArtDisplayList Title={"Release"}></ArtDisplayList>
            <Divider></Divider>
        </ScrollView>
        </>
        
    );
}


export default Favorite;