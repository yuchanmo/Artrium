import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, ScrollView } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import ArtDisplayList from '~/components/ArtDisplayList';
import ApiUrl from '~/GlobalContant';

const styles = StyleSheet.create(
    ({
        container:{           
            padding:20
        },
        descriptionText:{
            fontSize:15
        }

        
        

    })
);

interface Props{   
    // ApiBaseUrl:string;

    route:RouteProp<ArtistStackParamList,"ArtistDetail">;     
    navigation:NativeStackScreenProps<ArtistStackParamList,"ArtistDetail">;    
}


const ArtistDescription = ({route,navigation}:Props) =>{
    const {name} = route.params;
    const [artist,setArtist] = useState<ArtistInfo>();
    let artsUrl = `${ApiUrl['arts']}?artistname=${encodeURI(name)}`;
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
    return (
        <>       
            <ScrollView style={styles.container}>
                <Text style={styles.descriptionText}>{artist?.description}</Text>
                <ArtDisplayList Title={"작가의 작품"} ApiBaseUrl={artsUrl} navigation={navigation}></ArtDisplayList>
            </ScrollView>  
        </>
        
    );
}


export default ArtistDescription;