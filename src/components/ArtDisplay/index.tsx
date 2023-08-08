import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";


const styles = StyleSheet.create({
  container:{
    margin: 3,
  },
  button2: {
    width: 150,
    height: 150,
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
  });
  
interface Props{
    ArtInfo : ArtDisplayInfo;
    onPress :()=>{}|undefined;
    navigation:NativeStackScreenProps<ArtistStackParamList,"Favorite">;    

};

// {ArtInfo}:Props

const ArtDisplay = ({ArtInfo,onPress, navigation}:Props) =>{

    let imgPressFunction = onPress !== undefined ? onPress : () => {navigation.navigate('ArtDetail',{Info:ArtInfo})};
    return (
        <>
        <View style={styles.container}>
        <TouchableOpacity style={styles.button2} onPress={imgPressFunction}>
              {/* <ImageBackground
                source={ArtInfo.ImageUrl}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
              > */}
              <ImageBackground
                source={{uri:ArtInfo.image_url}}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
              >
                <View style={styles.rect8Filler}></View>
                <View style={styles.rect8}>
                   <Text style={styles.text22}>{ArtInfo.artist_name_kor}</Text>
                  <Text style={styles.text22}>{ArtInfo.make_year}</Text>
                  <Text style={styles.text22}>{ArtInfo.money}</Text>                  
                </View>
              </ImageBackground>
            </TouchableOpacity>
        </View>
        </>
        
    );
}


export default ArtDisplay;