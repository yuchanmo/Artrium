import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, FlatList, Alert } from 'react-native';
import { Divider } from 'react-native-elements';
import RNFetchBlob from 'rn-fetch-blob';
import ReleaseThumnail from './ReleaseThumnail';


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
    route : RouteProp<ReleaseStackParamList,"ReleaseList">
    navigation:NativeStackScreenProps<ReleaseStackParamList,"ReleaseList">;    
}


const ReleaseList = ({route,navigation}:Props) =>{
    const [data,setData] = useState<Array<ArtDisplayInfo>>([]);

    const initData = async () =>{
        try {
            let res = await RNFetchBlob.fetch('GET', 'http://20.85.245.228:9999/collection');
            let status = res.info().status;
            //Alert.alert('info',status)
            if(status == 200){                              
               
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
            <Text style={styles.titleText}>TEST</Text>            
            <FlatList                   
                    data={data}
                    renderItem={({index,item})=><><ReleaseThumnail ArtInfo={item}></ReleaseThumnail></>}
                    keyExtractor={(item,i) => item.title_eng + i.toString()}
                />
             {/* <FlatList                   
                    data={data}
                    renderItem={({index,item})=><><Text>SSFSDG</Text></>}
                    keyExtractor={(item,i) => item.title_eng + i.toString()}
                /> */}
            <Divider color='red' orientation="horizontal"></Divider>
        </View>
    </>
    );
}


export default ReleaseList;