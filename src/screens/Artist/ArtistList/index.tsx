import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { SearchBar,Divider } from 'react-native-elements';
import ArtistInfo from './ArtistInfo';


const styles = StyleSheet.create(
    ({
        container: {
            backgroundColor: "rgba(20,31,40,1)",
            width: '100%',
         
          },
          searchbox:{
            flex:1

          },
          artistlistContainer:{
            flex:8
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

const samples:Array<ArtistInformation> = [
 
{
  KorName:'문형태',
  EngName:'Mun',
  PictureUrl:require('./mun.png'),
  Summary:'짱짱맨',
  DetailInformation:'이보다 더 짱짱맨',
  UpdateDate:'2021-08-17',
  ArtList:[{
    ImageUrl:require('./mun.png'),
    Material:'print',
  EstimatePrice:1000000,
Size:'150x150',
Title:'이것은 무엇인가'}]
},

{
  KorName:'문형태',
  EngName:'Mun',
  PictureUrl:require('./mun.png'),
  Summary:'짱짱맨',
  DetailInformation:'이보다 더 짱짱맨',
  UpdateDate:'2021-08-17',
  ArtList:[{
    ImageUrl:require('./mun.png'),
    Material:'print',
  EstimatePrice:1000000,
Size:'150x150',
Title:'이것은 무엇인가'}]
},
];

const ArtistList = ({}) =>{

    let [serachingName,setSearchingName] = useState<string>('');
    return (
        <>
        <View style={styles.searchbox}>
            <SearchBar 
            placeholder="작가이름" 
            value={serachingName} 
            onChangeText={(v)=>{setSearchingName(v)}}
            ></SearchBar>
        </View>
        <View style={styles.artistlistContainer}>
        <SafeAreaView style={styles.container}>
          
          
          <FlatList
            data={samples}
            renderItem={({index,item})=><><ArtistInfo
              artist={item}
              style={styles.tweet}
           ></ArtistInfo>
           <Divider style={styles.divider}></Divider></>}
            keyExtractor={(item,i) => item.KorName + i.toString()}
          />
          
       </SafeAreaView>
       </View>
         {/* <ScrollView horizontal={false} style={styles.container}>
          
         <ArtistInfo
            artist={samples}
            style={styles.tweet}
         ></ArtistInfo>
        </ScrollView> */}
        </>
        
    );
}


export default ArtistList;