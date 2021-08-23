import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, ScrollView } from 'react-native';
import ArtistRank from '~/screens/Artist/Analysis/Tables/ArtistRank';
import FollowingArtist from '~/screens/Artist/Analysis/Tables/FollowingArtist';
import SellRank from '~/screens/Artist/Analysis/Tables/SellRank';


const styles = StyleSheet.create(
    ({
        cotainer:{
            flex:1
        },
        

    })
);

const Analysis = ({}) =>{
    return (
        <>        
        <ScrollView>
            <ArtistRank></ArtistRank>
            <SellRank></SellRank>
            <FollowingArtist></FollowingArtist>
        </ScrollView>        
        </>
        
    );
}


export default Analysis;