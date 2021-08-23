import { RouteProp } from '@react-navigation/native';
import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, ScrollView, SafeAreaView, FlatList, Alert } from 'react-native';
import ArtDisplay from '~/components/ArtDisplay';
import { StackNavigationProp } from '@react-navigation/stack';
import RNFetchBlob from 'rn-fetch-blob';

const styles = StyleSheet.create(({
    container:{
        margin:4,
    },
    titleText: {
        color: "black",
        fontSize: 20,        
      }
}));

interface Props{
    Title:string;        
    // ApiBaseUrl:string;
    navigation:StackNavigationProp<ArtistStackParamList,"ArtDisplayList">;    
}


const samples:Array<ArtInformation> = [
    {
         Title : 'Ligths',
         EstimatePrice : '20000~400000',
         ImageUrl : require('~/assets/images/lights.jpg'),
        Material :'Oil',
        Size : '120 x 120'
    },
    {
        Title : 'Bat',
        EstimatePrice : '20000~400000',
        ImageUrl : require('~/assets/images/bat.jpg'),
       Material :'Oil',
       Size : '120 x 120'
   },
   {
    Title : 'Gita',
    EstimatePrice : '20000~400000',
    ImageUrl : require('~/assets/images/gita.jpg'),
   Material :'Oil',
   Size : '120 x 120'
},
{
    Title : 'Ligths',
    EstimatePrice : '20000~400000',
    ImageUrl : require('~/assets/images/lights.jpg'),
   Material :'Oil',
   Size : '120 x 120'
},
{
   Title : 'Bat',
   EstimatePrice : '20000~400000',
   ImageUrl : require('~/assets/images/bat.jpg'),
  Material :'Oil',
  Size : '120 x 120'
},
{
Title : 'Gita',
EstimatePrice : '20000~400000',
ImageUrl : require('~/assets/images/gita.jpg'),
Material :'Oil',
Size : '120 x 120'
},

   
]

const ArtDisplayList = ({Title,ApiBaseUrl,navigation}:Props) =>{

    const [data,setData] = useState<Array<ArtDisplayInfo>>([]);

    const initData = async () =>{
        try {
            let res = await RNFetchBlob.fetch('GET', 'http://20.85.245.228:9999/collection');
            let status = res.info().status;
            if(status == 200){
                //Alert.alert('hello','heello');
                //Alert.alert('test',res.data[0].image_url)
                let tmp:Array<ArtDisplayInfo> = [...data,res.data];
                setData(tmp);
            }
            
        } catch (error) {
            
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
                    renderItem={({index,item})=><><ArtDisplay ArtInfo={item}></ArtDisplay></>}
                    keyExtractor={(item,i) => item.title_eng + i.toString()}
                />
        </View>
    </>
    );

};

export default ArtDisplayList;
