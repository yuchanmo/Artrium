import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  Alert
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CountDown from 'react-native-countdown-component';

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',    
    height:200,
    margin: 3,
    marginBottom:50
  },
  releaseInfoContainer:{
    height:40,
    flexDirection:'row'
  },
  releaseTitle:{

  },
  button2: {
    width:'100%',
    height:'100%',
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
    rect8Filler: {
      flex: 1
    },
    rect8: {
      height: 27,
      backgroundColor: "rgba(21,19,19,0.5)",
      justifyContent: "center"
    },
  
    text22: {
      color: "rgba(247,252,253,1)",
      fontSize: 14,
      alignSelf: "center"
    },
    countDown: {                 
      width: 100,
      height: 80,      
      position:'absolute',
     bottom:0,
     right:70
    },
    titleText: {
      color: "black",
      fontSize: 20,        
    },
    dateText:{
      alignContent:'flex-end',
      justifyContent:'flex-end',
      alignItems:'flex-end'
    }
  });
  
interface Props{
    ArtInfo : ArtDisplayInfo;
    onPress :()=>{}|undefined;
    
};

// {ArtInfo}:Props

const ReleaseThumnail = ({ArtInfo,onPress}:Props) =>{
  let timeNumber:number = 100;
    useEffect(()=>{
      timeNumber = (Math.floor(Math.random() * 1001));
    },[]);
    let imgPressFunction = onPress !== undefined ? onPress : () => {};
    return (
        <>
        <View style={styles.container}>
          <View style={styles.releaseInfoContainer}>
            <Text style={styles.titleText}>{ArtInfo.artist_name_kor}</Text>
            <Text style={styles.dateText}>{ArtInfo.auction_date}</Text>
          </View>
        <TouchableOpacity style={styles.button2} onPress={imgPressFunction}>       
           
              <ImageBackground
                source={{uri:ArtInfo.image_url}}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
              >          
              </ImageBackground>
              <View>
                <CountDown style={styles.countDown}
                    until={timeNumber}
                    
                    size={20}
                  />
                </View>
             
            </TouchableOpacity>
        </View>
        </>
        
    );
}


export default ReleaseThumnail;