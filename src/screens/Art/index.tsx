import React,{useState,useEffect, useLayoutEffect} from 'react';
import { Text, View,StyleSheet, Dimensions, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Divider } from 'react-native-paper';
import RNFetchBlob from 'rn-fetch-blob';
import ArtDisplay from '~/components/ArtDisplay';
import ApiUrl from '~/GlobalContant';
import PriceChart from './Chart';

const styles = StyleSheet.create(({
  container:{
      margin:7,
  },
  titleText: {
      color: "black",
      fontSize: 20,        
    },
    button2: {
      width:180,
      height:180,
      backgroundColor: "rgba(230, 230, 230,1)",
      elevation: 18,
      borderRadius: 5,
      overflow: "hidden"
    },
    image: {
      flex: 1
    },row: {
      flex: 1,
      justifyContent: "space-around"
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
      tabWrapContainer:{
        flex:1
    },
    bannerContainer:{
        flex:1
    },
    overlay: {
        backgroundColor: "rgba(30,26,26,0.4)",
        flex: 1

    },
    tabScreenContainer:{
        flex:7
    },
    artInfo:{
        margin:20
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
    contentsbox:{
    flex:8
    },
    artList:{
      flex:7
    }
}));


const ReleaseBanner = ()=>{
  return (
      <>
      <View style={styles.bannerContainer}>
            <View style={styles.overlay}>
                  <View style={styles.artInfo}>
                    <Text style={styles.artTitle}>BANNER</Text>                                    
                    
                  </View>
            </View>
        </View>
      </>
  )
}

const Sample = ({ArtInfo,onPress}:Props) =>{

  let imgPressFunction = onPress;
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


const Art = ({}) =>{
  const [data,setData] = useState<Array<ArtDisplayInfo>>([]);
  const url =  ApiUrl['collection'];
  const initData = async () =>{
      try {
          let res = await RNFetchBlob.fetch('GET', url);
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
           {/* <View style={styles.bannerContainer}>
                <ReleaseBanner></ReleaseBanner>
            </View> */}
            <View>
         
              <FlatList
                      numColumns={2}
                      columnWrapperStyle={styles.row}
                      data={data}
                      renderItem={({index,item})=><><Sample ArtInfo={item}></Sample></>}
                      keyExtractor={(item,i) => item.title_eng + i.toString()}
                  />
              <Divider color='red' orientation="horizontal"></Divider>
          </View>
      </View>
  </>
  );
}


export default Art;