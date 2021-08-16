import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, ScrollView } from 'react-native';
import ArtistInfo from './ArtistInfo';

const styles = StyleSheet.create(
    ({
        container: {
            backgroundColor: "rgba(20,31,40,1)",
            width: 375,
            height: 644
          },
          tweet: {
            height: 148
          },
          divider: {
            height: 1,
            marginTop: 5
          },
          tweet2: {
            height: 114
          },
          divider2: {
            height: 1,
            marginTop: 10
          },
          tweet3: {
            height: 110
          },
          divider3: {
            height: 1,
            marginTop: 16
          },
          tweet4: {
            height: 149,
            marginTop: 2
          }

    })
);

const ArtistList = ({}) =>{
    return (
        <>
         <ScrollView horizontal={false} style={styles.container}>
         <ArtistInfo
        Content=""
        CommentNumber="30"
        RetweetNumber="2K"
        LikeNumber="50K"
        Username=""
        style={styles.tweet}
         ></ArtistInfo>
        </ScrollView>
        </>
        
    );
}


export default ArtistList;