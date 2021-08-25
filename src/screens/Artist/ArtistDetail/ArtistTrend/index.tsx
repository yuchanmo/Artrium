import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, Alert } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import ApiUrl from '~/GlobalContant';

const styles = StyleSheet.create(
    ({
        cotainer:{
            flex:1
        },
        

    })
);

const ArtistTrend = ({}) =>{
    const [arts,setArts] = useState<Array<ArtDisplayInfo>>([]);
    const initData = async () =>{
        try {
            let res = await RNFetchBlob.fetch('GET', ApiUrl['artist']);
            let status = res.info().status;
            if(status == 200){              
                setArts(res.json());
            }
            
        } catch (error) {
            Alert.alert('info',error.message);
            Alert.alert('info',error.stack);
        }      
        
  
    };
    return (
        <>
        <View>
            <Text>Art</Text>
        </View>
        </>
        
    );
}


export default ArtistTrend;