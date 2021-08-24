import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, ScrollView, SafeAreaView, FlatList, Alert, Button } from 'react-native';
import ArtDisplay from '~/components/ArtDisplay';
import RNFetchBlob from 'rn-fetch-blob';
import Spinner from 'react-native-loading-spinner-overlay';
import {  NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Divider } from 'react-native-elements';

const styles = StyleSheet.create(({
    container:{
        margin:7,
    },
    titleText: {
        color: "black",
        fontSize: 20,        
      }
}));

interface Props{
    Title:string;
    // ApiBaseUrl:string;
    // route:RouteProp<ArtistStackParamList,"Favorite">;    
    navigation:NativeStackScreenProps<ArtistStackParamList,"Favorite">;    
}


const ArtGalleryList = ({Title,navigation}:Props) =>{

    const [data,setData] = useState<Array<ArtDisplayInfo>>([]);

    const initData = async () =>{
        try {
            let res = await RNFetchBlob.fetch('GET', 'http://20.85.245.228:9999/collection');
            let status = res.info().status;
            if(status == 200){
                                
                //let tmp:Array<ArtDisplayInfo> = [...data, res.data];
                setData(res.json());
            }
            
        } catch (error) {
            Alert.alert('info',error.message);
            Alert.alert('info',error.stack);
        }
        
        

    };

    useEffect(()=>{
        initData();

    },[]);

    return (
    <>    
      <View style={styles.container}>
            <Text style={styles.titleText}>{Title}</Text>
            
            <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={({index,item})=><><ArtDisplay ArtInfo={item} navigation={navigation}></ArtDisplay></>}
                    keyExtractor={(item,i) => item.title_eng + i.toString()}
                />
            <Divider color='red' orientation="horizontal"></Divider>
        </View>
    </>
    );

};

export default ArtGalleryList;
