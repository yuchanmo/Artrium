import React, { Component, useState } from 'react'
import { Card, Icon } from 'react-native-elements'
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import PropTypes from 'prop-types'


import Separator from './Separator'

import { RouteProp } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import RNFetchBlob from 'rn-fetch-blob'
import ApiUrl from '~/GlobalContant'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import ArtistDescription from './ArtistDescription'
import ArtistTrend from './ArtistTrend';

interface Props{   
  // ApiBaseUrl:string;
  route:RouteProp<ArtistStackParamList,"ArtistDetail">;     
  navigation:NativeStackScreenProps<ArtistStackParamList,"ArtistDetail">;    
}


const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 45,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
  detailScroll:{
    flex:5,
    padding:5,
    margin:5

  },
  tabContainer:{
    flex:3
  }
})


const Tab = createMaterialTopTabNavigator();


const Profile1 = ({route,navigation}:Props) =>{
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


  const onPressPlace = () => {
    console.log('place')
  };

 
 

  const renderHeader = () => {    

    return (
      <View style={styles.headerContainer}>
        <ImageBackground
          style={styles.headerBackgroundImage}
          blurRadius={10}
          source={require('~/assets/images/background.jpg')}
        >
          <View style={styles.headerColumn}>
            <Image
              style={styles.userImage}
              source={require('~/assets/images/temp.jpg')}
            />
            <Text style={styles.userNameText}>{name}</Text>
            <View style={styles.userAddressRow}>
              <View>
                <Icon
                  name="place"
                  underlayColor="transparent"
                  iconStyle={styles.placeIcon}
                  onPress={onPressPlace}
                />
              </View>
              <View style={styles.userCityRow}>
                <Text style={styles.userCityText}>
                  
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  };  

  return (
    <ScrollView style={styles.scroll}>
          <View style={styles.container}>
            <Card containerStyle={styles.cardContainer}>
              {renderHeader()}
              {/* {renderTel()} */}
              {Separator()}              
            </Card>
          </View>
          <View style={styles.detailScroll}>
            <Tab.Navigator>
                  {/* <Tab.Screen name="DESCRIPTION" component={ArtistDescription} initialParams={{ artistinfo: artist }}/> */}
                  <Tab.Screen name="DESCRIPTION" component={ArtistDescription} initialParams={{ name: name }} options={{swipeEnabled:false}}/>
                  <Tab.Screen name="TREND" component={ArtistTrend} initialParams={{ name: name }} options={{swipeEnabled:false}}/>                
            </Tab.Navigator>            
          </View>
        </ScrollView>
  )
};



export default Profile1;
