import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, ImageBackground, ScrollView, Alert, TouchableOpacity } from 'react-native';
import ArtDisplayList from '~/components/ArtDisplayList';

const styles = StyleSheet.create(
    ({
        cotainer:{
            flex:3
        },
        imageContainer:{
          flex:3
        },
        descritionContainer:{
          flex:1
        },
        scrollArea: {
          flex:3
        },
        image_imageStyle: {},
        artInfo:{
          margin:20
        },
        artistButton: {           
          backgroundColor: "#1f0938",
          width: 80,
          height: 80,
          borderRadius: 100,
          borderColor: "#1c2a38",
          borderWidth: 0,
          alignContent:'center',
          justifyContent:'center',
          position:'absolute',
          bottom:15,
          right:15          
        },
        overlay: {
          backgroundColor: "rgba(30,26,26,0.4)",
          flex: 1

        },
             
        artTitle: {
          color: "rgba(255,255,255,1)",
          fontSize: 24,            
          alignSelf: "center"
        }, 
        artDescription: {
          color: "rgba(255,255,255,1)",
          fontSize: 16,
        
          alignSelf: "center"
        },
       


        root: {
            flex: 1,
            backgroundColor: "rgb(255,255,255)"
          },
          headerX: {
            height: 80,
            elevation: 15,
            shadowOffset: {
              height: 7,
              width: 1
            },
            shadowColor: "rgba(0,0,0,1)",
            shadowOpacity: 0.1,
            shadowRadius: 5
          },
          body: {
            flex: 1
          },
          headline: {
           flex:1
          },
          image: {
            flex: 1
          },            
          
          text: {
            color: "rgba(31,178,204,1)",
            fontSize: 14,
            alignSelf: "center"
          },
         
          
          scrollViewEntry: {
            height: 100
          },
          scrollViewEntry4: {
            width: 360,
            height: 100
          },
          scrollViewEntry2: {
            width: 360,
            height: 100
          },
          scrollViewEntry3: {
            width: 360,
            height: 100
          }
    })
);


interface Props{   
    // ApiBaseUrl:string;
    route:RouteProp<ReleaseStackParamList,"ReleaseDetail">;     
    navigation:NativeStackScreenProps<ReleaseStackParamList,"ReleaseDetail">;    
}

const ReleaseDetail = ({route,navigation}:Props) =>{
  const {Info} = route.params;
  useEffect(()=>{
    Alert.alert('info',Info.title_kor);
  },[]);

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerTitle:Info.artist_name_kor
    });
  }, [navigation]);

    return (
        <>
        <View style={styles.cotainer}>        
          <View style={styles.imageContainer}>
            <ImageBackground
              source={{uri:Info.image_url}}
              resizeMode="cover"
              style={styles.image}
              imageStyle={styles.image_imageStyle}
            >    
                  <TouchableOpacity style={styles.artistButton}>
                      <Text style={styles.text}>{Info.artist_name_kor}</Text>
                  </TouchableOpacity>         
            </ImageBackground>
          </View>
          
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            
          >
            <View style={styles.descritionContainer}>
              <View style={styles.overlay}>
                    <View style={styles.artInfo}>
                      <Text style={styles.artTitle}>{Info.title_eng}</Text>                                    
                      <Text style={styles.artDescription}>Auction :  {Info.auction_place}</Text>
                      <Text style={styles.artDescription}>Auction Date : {Info.auction_date}</Text>
                      <Text style={styles.artDescription}>Price : {Info.money}</Text>
                    </View>
              </View>
          </View>
          <View>
            <ArtDisplayList Title="Test" navigation={navigation}></ArtDisplayList>
            <ArtDisplayList Title="Test" navigation={navigation}></ArtDisplayList>
            <ArtDisplayList Title="Test" navigation={navigation}></ArtDisplayList>
            <ArtDisplayList Title="Test" navigation={navigation}></ArtDisplayList>
            <ArtDisplayList Title="Test" navigation={navigation}></ArtDisplayList>
          </View>
          </ScrollView>
        </View>
        </View>
        
        </>
        
    );
}


export default ReleaseDetail;