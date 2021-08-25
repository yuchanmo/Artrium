import { RouteProp } from '@react-navigation/core';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, Image, ScrollView } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import RNFetchBlob from 'rn-fetch-blob';
import ApiUrl from '~/GlobalContant';
import ArtistDescription from './ArtistDescription';
import ArtistTrend from './ArtistTrend';

const styles = StyleSheet.create(
    ({
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
            backgroundColor: "#67568f",
            
            flex: 1
          },
          ellipse: {
            top: 9,
            left: 0,
            width: 859,
            height: 890,
            position: "absolute"
          },
          settingsList: {
            left: 51,
            height: 409,
            position: "absolute",
            right: 450,
            bottom: 272
          },
          accountSettings: {
            height: 165,
            marginTop: 15,
            marginLeft: 24,
            marginRight: 24
          },
          expanded: {
            color: "#121212",
            fontSize: 18,
            marginTop: -3
          },
          subSettings: {
            height: 118,
            marginTop: 9
          },
          editProfile: {
            height: 30,
            flexDirection: "row"
          },
          text10: {
            color: "rgba(0,0,0,1)",
            fontSize: 16,
            marginTop: 6
          },
          text10Filler: {
            flex: 1,
            flexDirection: "row"
          },
          icon: {
            color: "rgba(31,178,204,1)",
            fontSize: 30
          },
          changeConnections: {
            height: 30,
            flexDirection: "row",
            marginTop: 11
          },
          text11: {
            color: "rgba(0,0,0,1)",
            fontSize: 16,
            marginTop: 6
          },
          text11Filler: {
            flex: 1,
            flexDirection: "row"
          },
          icon2: {
            color: "rgba(31,178,204,1)",
            fontSize: 30
          },
          editProfileColumn: {
            marginLeft: 10,
            marginRight: 10
          },
          editProfileColumnFiller: {
            flex: 1
          },
          providerSettings: {
            height: 30,
            flexDirection: "row",
            marginLeft: 10,
            marginRight: 10
          },
          text12: {
            color: "rgba(0,0,0,1)",
            fontSize: 16,
            marginTop: 6
          },
          text12Filler: {
            flex: 1,
            flexDirection: "row"
          },
          icon3: {
            color: "#1fb2cc",
            fontSize: 30
          },
          sub2: {
            height: 186,
            marginTop: 18,
            marginLeft: 29,
            marginRight: 29
          },
          notifications: {
            height: 27,
            alignSelf: "center",
            flexDirection: "row"
          },
          text7: {
            color: "#121212",
            fontSize: 18
          },
          text7Filler: {
            flex: 1,
            flexDirection: "row"
          },
          switch3: {
            width: 40
          },
          backup: {
            height: 27,
            alignSelf: "center",
            flexDirection: "row",
            marginTop: 53
          },
          text72: {
            color: "#121212",
            fontSize: 18
          },
          text72Filler: {
            flex: 1,
            flexDirection: "row"
          },
          switch2: {
            width: 40,
            marginRight: -2
          },
          notificationsColumn: {},
          notificationsColumnFiller: {
            flex: 1
          },
          sponsored: {
            height: 27,
            alignSelf: "center",
            flexDirection: "row"
          },
          text73: {
            color: "#121212",
            fontSize: 18
          },
          text73Filler: {
            flex: 1,
            flexDirection: "row"
          },
          switch4: {
            width: 40
          },
          pageName: {
            top: 0,
            left: 85,
            color: "rgba(255,255,255,1)",
            position: "absolute",
            fontSize: 24
          },
          detailScroll:{
            flex:5,
            padding:10,
            margin:10

          },
          userInfo: {
            flex:2,
            // alignItems:'center',
            // justifyContent:'center',
            // alignContent:'center',
            // top: 64,
            // left: 87,
            // // height: 125,
            // position: "absolute",
            // right: 451,
            // flexDirection: "row"
          },
          
          avatar: {
            width: 120,
            height: 120,
            borderRadius: 100
          },
          userEmail: {
            top: 75,
            left: 0,
            color: "rgba(0,0,0,1)",
            position: "absolute",
            fontSize: 16
          },
          userName: {
            top: 0,
            left: 0,
            color: "#1fb2cc",
            position: "absolute",
            fontSize: 30
          },
          userEmailStack: {
            width: 150,
            height: 96,
            marginLeft: 62,
            marginTop: 13
          },
          avatarRow: {
            // height: 109,
            flexDirection: "row",
            flex: 1,
            marginLeft:10,
            alignItems:'flex-end',
            justifyContent:'center',
            alignContent:'flex-end',
          },
          ellipseStack: {
              flex:1
            // height: 899,
            // marginTop: 34,
            // marginLeft: -50,
            // marginRight: -449
          }   
    })
);

const Tab = createMaterialTopTabNavigator();


interface Props{   
    // ApiBaseUrl:string;

    route:RouteProp<ArtistStackParamList,"ArtistDetail">;     
    navigation:NativeStackScreenProps<ArtistStackParamList,"ArtistDetail">;    
}

const ArtistDetail = ({route,navigation}:Props) =>{
  const {name} = route.params;
  const [artist,setArtist] = useState<ArtistInfo>();
  const getArtist = async ()=>{
      let res = await RNFetchBlob.fetch('GET', ApiUrl['artistinfo']);
          let status = res.info().status;
          if(status == 200){                              
              //let tmp:Array<ArtDisplayInfo> = [...data, res.data];
              setArtist(res.json());
          }  
    };

    useEffect(()=>{
      getArtist();
      
    },[]);

    useLayoutEffect(()=>{
        navigation.setOptions({
          headerTitle:"ARTIST DETAIL"
        });
      }, [navigation]);

    return (
        <> 
        <View style={styles.body}>
        <Svg viewBox="0 0 859.43 890.3" style={styles.ellipse}>
            <Ellipse
              strokeWidth={1}
              fill="#e8ebee"
              cx={430}
              cy={445}
              rx={460}
              ry={450}
            ></Ellipse>
          </Svg>
              
          <View style={styles.userInfo}>
            <View style={styles.avatarRow}>
              <Image
                source={artist==undefined? require("~/mun.png") :{uri:artist.img_src}}
                resizeMode="stretch"
                style={styles.avatar}
              ></Image>
              <View style={styles.userEmailStack}>                
                <Text style={styles.userName}>{name}</Text>
              </View>
            </View>
          </View>
          <View style={styles.detailScroll}>
            <Tab.Navigator>
                  {/* <Tab.Screen name="DESCRIPTION" component={ArtistDescription} initialParams={{ artistinfo: artist }}/> */}
                  <Tab.Screen name="DESCRIPTION" component={ArtistDescription} initialParams={{ name: name }}/>
                  <Tab.Screen name="TREND" component={ArtistTrend} initialParams={{ name: name }}/>                
            </Tab.Navigator>            
          </View>
        </View>
        </>
        
    );
}


export default ArtistDetail;